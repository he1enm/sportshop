import { useState } from "react";
import { FaSearch, FaCartArrowDown, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchModal from "./Search";

const MainNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <>
            <nav className="bg-white drop-shadow-xl z-10 px-5">
                {" "}
                {/* <-- Umbră adăugată aici */}
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-1">
                    <div className="flex justify-between items-center py-5">
                        {/* Logo */}
                        <a href="/" className="text-[#59ab6e] text-3xl sm:text-5xl font-semibold">
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
                        <div className="hidden lg:flex lg:items-center lg:justify-between lg:space-x-20">
                            <ul className="flex space-x-12 text-lg text-gray-800">
                                <li>
                                    <Link to="/" className="hover:text-[#59ab6e] transition">
                                        Acasă
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:text-[#59ab6e] transition">
                                        Despre noi
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/shop" className="hover:text-[#59ab6e] transition">
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:text-[#59ab6e] transition">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Iconițe */}
                        <div className="hidden lg:flex lg:items-center lg:justify-between lg:space-x-6">
                            <button
                                className="text-gray-800 hover:text-[#59ab6e]"
                                onClick={() => setIsSearchOpen(true)}
                            >
                                <FaSearch size={20} />
                            </button>
                            <a href="#" className="text-gray-800 hover:text-[#59ab6e] relative">
                                <FaCartArrowDown size={20} />
                                <span className="absolute -top-2 -right-2 bg-gray-300 text-xs px-1 rounded-full text-black">
                                    {/* 1 */}
                                </span>
                            </a>
                            <a href="#" className="text-gray-800 hover:text-[#59ab6e] relative">
                                <FaUser size={20} />
                                <span className="absolute -top-2 -right-2 bg-gray-300 text-xs px-1 rounded-full text-black">
                                    {/* 2 */}
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Meniu pe mobil */}
                    {isOpen && (
                        <div className="lg:hidden px-2.5">
                            <ul className="flex flex-col space-y-4 pb-4 text-lg text-gray-800">
                                <li>
                                    <Link to="/" className="hover:text-[#59ab6e]">
                                        Acasă
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:text-[#59ab6e]">
                                        Despre noi
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/shop" className="hover:text-[#59ab6e]">
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="hover:text-[#59ab6e]">
                                        Contact
                                    </Link>
                                </li>
                            </ul>

                            {/* Input + iconițe mobile */}
                            <div className="flex justify-between items-center space-x-4 pb-4">
                                {/* Input căutare cu iconiță */}
                                <div className="relative w-full max-w-xs">
                                    <input
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full px-4 pr-10 py-2 text-sm border border-gray-200 rounded-md outline-none"
                                    />
                                    <button
                                        onClick={() => setIsSearchOpen(true)}
                                        className="absolute right-0 top-0 h-full px-3 flex items-center justify-center bg-gray-300 rounded-r-md hover:bg-gray-400 transition"
                                        aria-label="Caută"
                                    >
                                        <FaSearch size={16} className="text-black" />
                                    </button>
                                </div>

                                {/* Iconițe cont + coș */}
                                <a href="#" className="text-gray-800 hover:text-[#59ab6e] relative">
                                    <FaCartArrowDown size={20} />
                                </a>
                                <a href="#" className="text-gray-800 hover:text-[#59ab6e] relative">
                                    <FaUser size={20} />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
            <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
        </>
    );
};

export default MainNavbar;
