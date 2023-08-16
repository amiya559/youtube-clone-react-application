import React from "react";
import { MENU_ICON, USER_ICON, YOUTUBE_LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-14 cursor-pointer"
          alt="menu"
          src={MENU_ICON}
        />
        <img className="h-14" alt="youtube-logo" src={YOUTUBE_LOGO} />
      </div>
      <div className="col-span-10 text-center">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-200">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="user-icon" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Header;
