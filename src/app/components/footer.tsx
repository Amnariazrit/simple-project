import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="bg-green-50">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtGZCTtiHqh4i2wqGXw5qTEQEt6S1M3-4MYw&s"
              alt="peace"
              width={100}
              height={100}
              className="w-[50px]"
            />

            <span className="ml-3 text-xl">Elegant Peace</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Elegant Peace —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://github.com/Amnariazrit"}
              className="text-gray-500"
            >
              <BsGithub className="text-2xl" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
