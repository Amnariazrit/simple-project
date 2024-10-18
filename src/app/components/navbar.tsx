import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGZCTtiHqh4i2wqGXw5qTEQEt6S1M3-4MYw&s"
              alt="peace"
              width={100}
              height={100}
              className="w-[50px]"
            />
            <span className="ml-3 text-xl">Elegant Peace</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-green-600">
              Home
            </Link>
            <Link href={"./about"} className="mr-5 hover:text-green-600">
              About
            </Link>
            <Link href={"./contact"} className="mr-5 hover:text-green-600">
              Contact
            </Link>
            <Link href={"./jobs"} className="mr-5 hover:text-green-600">
              Jobs
            </Link>
            <Link
              href={"./jobs/programming"}
              className="mr-5 hover:text-green-600"
            >
              Programming
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
