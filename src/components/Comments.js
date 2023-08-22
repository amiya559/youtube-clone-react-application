import React from "react";
import { USER_ICON } from "../utils/constants";

const Comments = ({ data }) => {
  const { name, comment, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img className="w-12 h-12" alt="user" src={USER_ICON} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default Comments;
