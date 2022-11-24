import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Logo from '../../public/images/IMG_3570.png'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [headerClr, setHeaderClr] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeaderClr(true);
    }
    else {
      setHeaderClr(false);
    }
}
if (typeof window !== "undefined") {

    window.addEventListener('scroll', changeBackground);

}


  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-20 transition-all duration-300 ease-in-out ${headerClr ? 'bg-white shadow-sm' : 'bg-transparent' }`}>
        <div className="bottom_row relative z-40 ">
          <div className="container mx-auto  py-2 px-4 flex flex-col md:flex-row md:items-center">
            <div className="flex items-center justify-between">
              <div className="logo_wrapper flex items-center">
                <Link
                  href="/"
                >
                  <a className="md:w-[150px] w-[120px] md:h-[70px] h-[50px] text-2xl font-bold text-gray-800 transition-colors duration-300 transform lg:text-3xl hover:text-gray-700 ">
                    <Image
                      src={Logo}
                      alt="logo"
                      className='w-full'
                    />
                  </a>
                </Link>
              </div>

              {/* <!-- Mobile menu button --> */}
              <div className="flex md:hidden">
                <button
                  type="button"
                  className={`${headerClr ? 'text-black' : 'text-white'}`}
                  aria-label="toggle menu"
                  onClick={() => {
                    setOpen(!open)
                }}
                >
                 {/* hamburger button */}
                 {!open ? ( <svg
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
                  ) : (

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
                  )}
                </button>
              </div>
            </div>

            {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
            <div className={` ${open ? "-translate-x-0" : "-translate-x-full"} absolute inset-x-0 z-40 px-6 py-2 transition-all duration-300 ease-in-out bg-white top-16 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-full md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between w-full`}>
              <div className="flex flex-col md:flex-row md:mx-1 ">
                <Link href="#feature">
                  <a className={`my-2 text-base font-normal transition-colors duration-300 transform md:mx-4 md:my-0 ${headerClr ? 'md:text-black/70 md:hover:text-black' : 'md:text-white/60 md:hover:text-white' }`}>
                    Feature
                  </a>
                </Link>
                <Link href="#pricing">
                  <a className={`my-2 text-base font-normal transition-colors duration-300 transform md:mx-4 md:my-0 ${headerClr ? 'md:text-black/70 md:hover:text-black' : 'md:text-white/60 md:hover:text-white' }`}>
                    Pricing
                  </a>
                </Link>
                <Link href="#support">
                  <a className={`my-2 text-base font-normal transition-colors duration-300 transform md:mx-4 md:my-0 ${headerClr ? 'md:text-black/70 md:hover:text-black' : 'md:text-white/60 md:hover:text-white' }`}>
                    Support
                  </a>
                </Link>
                <Link href="#testimonial">
                  <a className={`my-2 text-base font-normal transition-colors duration-300 transform md:mx-4 md:my-0 ${headerClr ? 'md:text-black/70 md:hover:text-black' : 'md:text-white/60 md:hover:text-white' }`}>
                    Testimonials
                  </a>
                </Link>
              </div>
              <div className="md:my-0 my-4">
                  <Link href="#">
                    <a className="inline-block rounded-lg bg-[#f1cd00] px-4 py-1.5 text-sm font-semibold leading-7 text-black shadow-sm ring-1 ring-[#f1cd00] hover:bg-[#f1cd00] hover:ring-[#f1cd00]">
                    Book A Call
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
