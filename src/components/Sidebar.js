import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-xl w-48">
      <Link to={"/"}>
        <h1 className="font-bold pb-1 text-xl">Home</h1>
      </Link>
      <ul>
        <li>Music</li>
        <li>Video</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold pt-3 pb-1 text-xl">Shots</h1>
      <ul>
        <li>Music</li>
        <li>Video</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
      <h1 className="font-bold pt-3 pb-1 text-xl">Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Video</li>
        <li>Sports</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
