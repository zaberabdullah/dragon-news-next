"use client";

import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(session, user, "session");

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

      {isPending ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : user ? (
        <div className="flex items-center gap-4">
          <h2>Hello, {user?.name || "User"}</h2>
          <Image src={user?.image || userAvatar} alt="User Avatar" width={60} height={60} />
          <button
            className="btn bg-purple-500 text-white hover:bg-purple-600"
            onClick={async () => await authClient.signOut()}
          >
            Logout
          </button>
        </div>
      ) : (
        <button className="btn bg-purple-500 text-white hover:bg-purple-600">
          <Link href="/login">LogIn</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;
