import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <>
      <nav className="relative bg-white shadow-sm">
        <div className="top_row bg-zinc-100">
          <div className="container mx-auto  px-6 py-3 flex space-x-4 md:justify-end">
            <a href="tel:+1 929-460-0564" target="_blank" rel="noreferrer">
              <span className="text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline md:my-0">
                CALL: +1 929-460-0564
              </span>
            </a>
            <a
              href="https://facebook.com/softlixofficial/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline md:my-0">
                <svg
                  className="h-5 w-5 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </span>
            </a>
            <a
              href="https://twitter.com/Softlixglobal"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline md:my-0">
                <svg
                  className="h-5 w-5 text-black"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{' '}
                  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" />
                </svg>
              </span>
            </a>
            <a
              href="https://instagram.com/softlixglobal"
              target="_blank"
              rel="noreferrer"
            >
              <span className="text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline md:my-0">
                <svg
                  className="h-5 w-5 text-black"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />{' '}
                  <rect x="4" y="4" width="16" height="16" rx="4" />{' '}
                  <circle cx="12" cy="12" r="3" />{' '}
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="bottom_row ">
          <div className="container mx-auto  py-2 flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Link
                  href="/"
                  className="text-2xl font-bold text-gray-800 transition-colors duration-300 transform lg:text-3xl hover:text-gray-700 "
                >
                  <Image
                    src="/images/IMG_3570.png"
                    width={150}
                    height={70}
                    alt="logo"
                  />
                </Link>
              </div>

              {/* <!-- Mobile menu button --> */}
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="text-gray-500  hover:text-gray-600 focus:outline-none focus:text-gray-600 "
                  aria-label="toggle menu"
                >
                  <svg
                    x-show="!isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>

                  <svg
                    x-show="isOpen"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div className="absolute inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white top-32 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
              <div className="flex flex-col md:flex-row md:mx-1">
                <Link href="/">
                  <a className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline md:mx-4 md:my-0">
                    Home
                  </a>
                </Link>
                <Link href="/service">
                  <a className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline md:mx-4 md:my-0">
                    Services
                  </a>
                </Link>
                <Link href="/portfolio">
                  <a className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline md:mx-4 md:my-0">
                    Porfolio
                  </a>
                </Link>
                <Link href="/case-studies">
                  <a className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline md:mx-4 md:my-0">
                    Case Studies
                  </a>
                </Link>
                <Link href="/blog">
                  <a className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline md:mx-4 md:my-0">
                    Blog
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="my-2 text-sm leading-5 text-gray-700 transition-colors duration-300 transform hover:text-blue-600 hover:underline md:mx-4 md:my-0">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
