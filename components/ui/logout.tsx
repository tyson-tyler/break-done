"use client";

import { getCurrentUser } from "@/lib/actions/auth.action";
import { signOut } from "firebase/auth";

import { useRouter } from "next/navigation";
import React from "react";
import { auth } from "@/firebase/client";

const Logout = () => {
  const router = useRouter();

  const handleClick = async () => {
    try {
      await signOut(auth);
      router.push("/sign-in"); // redirect to login page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="px-2 py-2 rounded-md bg-purple-700 hover:bg-purple-500 hover:cursor-pointer"
    >
      Logout
    </div>
  );
};

export default Logout;
