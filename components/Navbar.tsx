import React from "react";
import Link from "next/link";
import Button from "./Button";
// import Usecase from "../app/Usecase/page"; // Ensure this import is correct
import Main from "./Main";
const Navbar: React.FC = () => {
  return (
    <div className=" bg-[#000000] text-white">
      {/* Transparent Sticky Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 space-x-2">
        <nav className="relative">
          <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto backdrop-blur-lg">
            {/* Logo */}
            <Link href="/" className="flex items-center ml-1 text-2xl font-bold space-x-2">
              <span className="text-white">Everything</span>
              <span className="text-white">Talent</span>
            </Link>

            {/* Nav Links */}
            <div className="flex items-center space-x-8">
              <Link href="/about" className="text-gray-300 hover:text-white">
                About
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white">
                Blog
              </Link>
              <Link href="/Usecase" className="text-gray-300 hover:text-white">
                Usecase
              </Link>
              <Link href="/resources" className="text-gray-300 hover:text-white">
                Resources
              </Link>
              <Link href="/docs" className="text-gray-300 hover:text-white">
                Docs
              </Link>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost">Sign in</Button> {/* Ghost style button */}
              <Button>Get Started</Button> {/* Default style button */}
            </div>
          </div>
        </nav>
      </header>

     
    </div>
  );
};

export default Navbar;
