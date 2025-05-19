import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../shop/Card";
import { products } from "../shop/Products";

const Article = () => {
    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 3, slidesToScroll: 3 },
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 2, slidesToScroll: 2 },
            },
        ],
        appendDots: (dots: React.ReactNode) => (
            <div className="m-10">
                <ul className="flex justify-center space-x-3 ">{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <div className="w-3 h-3 bg-gray-400 rounded-full  hover:bg-gray-600 transition-colors"></div>
        ),
    };

    return (
        <section className="py-16">
            <div className=" max-w-7xl mx-auto px-4">
                <div className="text-left p-4">
                    <h4 className="text-2xl font-semibold">Related Products</h4>
                </div>

                <Slider {...sliderSettings}>
                    {products.map((product, index) => (
                        <div key={index} className="px-2">
                            <Card
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                title={product.title}
                                size={product.size}
                                price={product.price}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Article;
