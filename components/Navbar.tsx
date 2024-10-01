'use client'

import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the menu is open

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev); // Toggle menu state
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" width={74} height={29} alt="" />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Book now"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Hamburger menu */}
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {/* Dropdown menu for mobile view */}
      {isMenuOpen && (
        <div className="absolute top-0 right-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center lg:hidden">
          <Image
            src="/close.svg"
            alt="close"
            width={32}
            height={32}
            className="absolute top-5 right-5 cursor-pointer"
            onClick={toggleMenu} // Close menu button
          />
          
          <ul className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-50 cursor-pointer transition-all hover:font-bold"
                onClick={toggleMenu} // Close menu on link click
              >
                {link.label}
              </Link>
            ))}
          </ul>

          <Button
            type="button"
            title="Book now"
            icon="/user.svg"
            variant="btn_dark_green"
             // Close menu on button click
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
