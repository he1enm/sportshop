import { FaEnvelope, FaPhone, FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

function TopNavbar() {
    return (
        <nav className="hidden lg:block bg-[#212934] text-[#cfd6e1] px-25">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center text-xs">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                        <FaEnvelope className="text-[12px]" />
                        <a href="mailto:infosportshop@company.md" className="hover:underline">
                            infosportshop@company.md
                        </a>
                    </div>
                    <div className="flex items-center space-x-1">
                        <FaPhone className="text-[12px]" />
                        <a href="tel:+37360-945-543" className="hover:underline">
                            +37360-945-543
                        </a>
                    </div>
                </div>
                <div className="flex items-center space-x-3">
                    <a href="https://fb.com/templatemo" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className="text-[12px] hover:text-blue-500 transition-colors" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-[12px] hover:text-pink-500 transition-colors" />
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-[12px] hover:text-sky-500 transition-colors" />
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-[12px] hover:text-blue-700 transition-colors" />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default TopNavbar;
