"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

function Navbar() {
  const [showSideBar, setShowSidebar] = useState(false);

  const openSideBar = () => {
    setShowSidebar(true);
  };
  const closeSideBar = () => {
    setShowSidebar(false);
  };
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="./hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul
        className={` h-fulls gap-12 lg:flex ${
          showSideBar
            ? "flex flex-col gap-5 pt-6 fixed top-0 right-0 h-full z-20  bg-gray-100 w-[15rem] transition-all duration-200 ease-in-out"
            : "hidden"
        }`}>
        {showSideBar && (
          <li className="bg-red-500 w-fit">
            <Image
              src="close.svg"
              alt="close"
              width={34}
              height={34}
              onClick={closeSideBar}
            />
          </li>
        )}
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-ray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}

        {showSideBar && (
          <li>
            <div className="flexCenter lg:hidden">
              <Button
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green"
              />
            </div>
          </li>
        )}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={34}
        height={34}
        className="inline-block cursor-pointer lg:hidden"
        onClick={openSideBar}
      />
      {showSideBar && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 w-full h-full z-10 bg-black opacity-50"
          onClick={closeSideBar}
        />
      )}
    </nav>
  );
}

export default Navbar;
