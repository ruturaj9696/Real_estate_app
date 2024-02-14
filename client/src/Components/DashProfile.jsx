import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TextInput } from "flowbite-react";

export default function DashProfile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="max-w-lg mx-auto p-3 w-full">
      <h1 className="my-7 text-center font-semibold text-3xl">Profile</h1>
      <form className="flex flex-col gap-4">
        <div className="w-32 h-32 self-center cursor-pointer shadow-md overflow-hidden rounded-full ">
          <img
            src={currentUser.avatar}
            alt="user"
            className="rounded-full w-full h-full object-cover border-8 border-indigo-50"
          />
        </div>
        <TextInput
          type="text"
          id="username"
          placeholder="UserName"
          defaultValue={currentUser.username}
        />
        <TextInput
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
        />

        <TextInput type="password" id="password" placeholder="Password" />
        <button type="submit" className="outline rounded-md">
          Update
        </button>
      </form>
      <div className=" flex justify-between mt-5">
        <span className="text-red-400 cursor-pointer">Delete Account</span>
        <span className="text-red-400 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}
