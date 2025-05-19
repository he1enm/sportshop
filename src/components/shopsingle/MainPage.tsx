import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight, FaStar, FaRegStar } from "react-icons/fa";

import img10 from "../../assets/img/product_single_10.jpg";
import img1 from "../../assets/img/product_single_01.jpg";
import img2 from "../../assets/img/product_single_02.jpg";
import img3 from "../../assets/img/product_single_03.jpg";
import img4 from "../../assets/img/product_single_04.jpg";
import img5 from "../../assets/img/product_single_05.jpg";
import img6 from "../../assets/img/product_single_06.jpg";
import img7 from "../../assets/img/product_single_07.jpg";
import img8 from "../../assets/img/product_single_08.jpg";
import img9 from "../../assets/img/product_single_09.jpg";

interface ArrowProps {
    onClick?: () => void;
}

const NextArrow = ({ onClick }: ArrowProps) => {
    return (
        <div
            onClick={onClick}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-2xl text-black"
        >
            <FaChevronRight />
        </div>
    );
};

const PrevArrow = ({ onClick }: ArrowProps) => {
    return (
        <div
            onClick={onClick}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/1 z-10 cursor-pointer text-2xl text-black"
        >
            <FaChevronLeft />
        </div>
    );
};

function MainPage() {
    const thumbnails = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    const [mainImage, setMainImage] = useState<string>(thumbnails[0]);
    const sliderSettings = {
        dots: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <section className="bg-gray-100 py-10">
            <div className="max-w-7xl container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* LEFT SIDE - Images */}
                <div>
                    <div className="mb-4">
                        <img src={mainImage} alt="Main" className="w-full rounded shadow" />
                    </div>
                    <Slider {...sliderSettings}>
                        {thumbnails.map((img, index) => (
                            <div key={index} className="px-3">
                                <img
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full rounded border cursor-pointer"
                                    onClick={() => setMainImage(img)}
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* RIGHT SIDE - Product Info */}
                <div className="bg-white p-6 rounded shadow">
                    <h1 className="text-3xl mb-2">Active Wear</h1>
                    <p className="text-2xl mb-4">$25.00</p>
                    <div className="flex items-center space-x-1 mb-4">
                        {[...Array(4)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400" />
                        ))}
                        <FaRegStar className="text-gray-300" />
                        <span className="text-gray-600 ml-2">Rating 4.8 | 36 Comments</span>
                    </div>

                    <p className="text-gray-700 mb-4">
                        <strong>Brand:</strong> Easy Wear
                    </p>

                    <h6 className="font-medium">Description:</h6>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

                    <h6 className="font-medium">Available Color:</h6>
                    <p className="text-gray-600 mb-4">White / Black</p>

                    <h6 className="font-medium">Specification:</h6>
                    <ul className="list-disc pl-5 mb-6 text-gray-600">
                        <li>Lorem ipsum dolor sit</li>
                        <li>Amet, consectetur</li>
                        <li>Adipiscing elit, set</li>
                        <li>Duis aute irure</li>
                    </ul>

                    <div className="mb-4">
                        <span className="font-normal">Size:</span>
                        <div className="flex gap-2 mt-2">
                            {["S", "M", "L", "XL"].map((size) => (
                                <span key={size} className="px-3 py-1 border rounded cursor-pointer hover:bg-[#59ab6e]">
                                    {size}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <span className="font-normal">Quantity:</span>
                        <div className="flex items-center gap-4 mt-2">
                            <button className="bg-[#59ab6e] text-white px-3 py-1 rounded">-</button>
                            <span className="px-4">1</span>
                            <button className="bg-[#59ab6e] text-white px-3 py-1 rounded">+</button>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <button className="bg-[#59ab6e] text-white py-2 rounded hover:bg-[#59ab6e]">Buy</button>
                        <button className="bg-[#59ab6e] text-white py-2 rounded hover:bg-[#59ab6e]">Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainPage;
