import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
  return (
    <div>
      <h2>Login with</h2>
      <div className="flex flex-col gap-4 mt-4">
        <button className="btn border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white">
          <FaGoogle /> Login with Google
        </button>
        <button className="btn border-gray-300 text-gray-700 hover:bg-gray-300 hover:text-gray-900">
          <FaGithub /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
