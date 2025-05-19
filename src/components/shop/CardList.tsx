import Card from "./Card";
import { products } from "./Products";

function CardList() {
    return (
        <>
            {/* Filter bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-4 px-2 md:px-6">
                <ul className="flex gap-6 text-lg mb-2 md:mb-0">
                    <li>
                        <a href="#" className="text-gray-800 hover:underline">
                            Toate
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-800 hover:underline">
                            Bǎrbați
                        </a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-800 hover:underline">
                            Femei
                        </a>
                    </li>
                </ul>
                <select className="border border-gray-300 rounded px-4 py-2 appearance-none bg-[url('data:image/svg+xml;utf8,')] bg-no-repeat bg-right pr-4 w-full md:w-52">
                    <option>Sorteazǎ</option>
                    <option>A to Z</option>
                    <option>Articol</option>
                </select>
            </div>

            {/* Product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 md:px-6">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        id={product.id}
                        image={product.image}
                        title={product.title}
                        size={product.size}
                        price={product.price}
                    />
                ))}
            </div>
            <div className="flex justify-end mt-8">
                <div className="flex border border-gray-200 rounded overflow-hidden shadow-sm">
                    <button className="bg-[#59ab6e] text-white px-4 py-2">1</button>
                    <button className="bg-white text-gray-800 px-4 py-2 border-l border-gray-200 hover:bg-[#59ab6e]">
                        2
                    </button>
                    <button className="bg-white text-gray-800 px-4 py-2 border-l border-gray-200 hover:bg-[#59ab6e]">
                        3
                    </button>
                </div>
            </div>
        </>
    );
}

export default CardList;
