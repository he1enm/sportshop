import type { FC } from "react";
import { useState } from "react";

import { FaSearch, FaCartArrowDown, FaUser, FaTimes } from "react-icons/fa";

const MainNavbar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <nav className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between py-4">
                    {/* Logo */}
                    <a href="/" className="text-green-600 text-3xl font-semibold">
                        Fit cu Stil
                    </a>

                    {/* Toggler (mobil) */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                {isOpen ? (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                ) : (
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Meniu + iconițe */}
                    {/* <div className="hidden lg:flex lg:items-center lg:justify-between lg:space-x-20"> */}
                    {/* Meniu principal */}
                    <div className="hidden lg:flex lg:items-center lg:justify-between lg:space-x-20">
                        <ul className="flex space-x-12 text-lg font-medium text-gray-800">
                            <li>
                                <a href="#" className="hover:text-green-600 transition">
                                    Acasă
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-600 transition">
                                    Despre noi
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-600 transition">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-600 transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* Iconițe */}
                    <div className=" hidden lg:flex lg:items-center lg:justify-between lg:space-x-6">
                        <button className="text-gray-800 hover:text-green-600" onClick={() => setIsSearchOpen(true)}>
                            <FaSearch size={20} />
                        </button>
                        <a href="#" className="text-gray-800 hover:text-green-600 relative">
                            <FaCartArrowDown size={20} />
                            <span className="absolute -top-2 -right-2 bg-gray-300 text-xs px-1 rounded-full text-black">
                                {/* 1 */}
                            </span>
                        </a>
                        <a href="#" className="text-gray-800 hover:text-green-600 relative">
                            <FaUser size={20} />
                            <span className="absolute -top-2 -right-2 bg-gray-300 text-xs px-1 rounded-full text-black">
                                {/* 2 */}
                            </span>
                        </a>
                    </div>
                    {/* </div> */}
                </div>

                {/* Meniu pe mobil */}
                {isOpen && (
                    <div className="lg:hidden">
                        <ul className="flex flex-col space-y-4 pb-4 text-lg font-medium text-gray-800">
                            <li>
                                <a href="#" className="hover:text-green-600">
                                    Acasă
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-600">
                                    Despre noi
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-600">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-green-600">
                                    Contact
                                </a>
                            </li>
                        </ul>
                        <div className="flex space-x-6 pb-4">
                            <button
                                className="text-gray-800 hover:text-green-600"
                                onClick={() => setIsSearchOpen(true)}
                            >
                                <FaSearch size={20} />
                            </button>
                            <a href="#" className="text-gray-800 hover:text-green-600 relative">
                                <FaCartArrowDown size={20} />
                            </a>
                            <a href="#" className="text-gray-800 hover:text-green-600 relative">
                                <FaUser size={20} />
                            </a>
                        </div>
                    </div>
                )}
                {isSearchOpen && (
                    <div className="fixed inset-0 bg-white z-50 px-4 pt-12 flex justify-center">
                        <div className="w-full max-w-2xl relative">
                            {/* Buton X */}
                            <button
                                className="absolute -top-10 left-0 text-2xl text-gray-700 hover:text-red-600"
                                onClick={() => setIsSearchOpen(false)}
                                aria-label="Close Search"
                            >
                                <FaTimes />
                            </button>

                            {/* Search bar cu iconița în dreapta */}
                            <div className="relative w-full max-w-2xl">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full border border-gray-300 rounded-[10px] pl-6 pr-14 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                />
                                <button
                                    className="absolute right-0 top-0 bottom-0 bg-green-600 text-white px-5 rounded-r-[10px] hover:bg-green-700 flex items-center justify-center"
                                    aria-label="Search"
                                >
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default MainNavbar;
