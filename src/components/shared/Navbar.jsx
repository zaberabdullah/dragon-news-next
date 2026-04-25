import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="flex justify-between container mx-auto gap-4 mt-6">
      <div></div>
      <ul className="flex items-center justify-between text-gray-700 gap-4">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/career">Career</NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <Image src={userAvatar} alt="User Avatar" width={60} height={60} />
        <button className="btn bg-purple-500 text-white hover:bg-purple-600">
          <NavLink href="/login">LogIn</NavLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
