import img1 from "../../assets/img/category_img_01.jpg";
import img2 from "../../assets/img/category_img_02.jpg";
import img3 from "../../assets/img/category_img_03.jpg";

function BestSellers() {
    return (
        <section className="py-12 px-6 sm:px-10 lg:px-1 2xl:px-[20%]">
            <div className="text-center pt-6">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-4">
                        Top Selecții pentru un Stil Activ
                    </h1>
                    <p className="text-gray-700 text-base sm:text-lg">
                        Am selectat cele mai îndrăgite produse care îmbină performanța cu stilul. Fie că ești în sală,
                        pe stradă sau în natură – fii activ, dar rămâi tu însuți.
                    </p>
                </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                    { img: img1, label: "Watches" },
                    { img: img2, label: "Shoes" },
                    { img: img3, label: "Accessories" },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col items-center p-4">
                        <a
                            href="#"
                            className="w-full max-w-[200px] sm:max-w-[250px] lg:max-w-[300px] aspect-square rounded-full overflow-hidden border border-gray-200 mx-auto"
                        >
                            <img src={item.img} alt={item.label} className="w-full h-full object-cover" />
                        </a>
                        <h5 className="mt-6 mb-3 text-xl sm:text-2xl text-center">{item.label}</h5>
                        <a
                            href="#"
                            className="bg-[#59ab6e] text-white px-5 py-2.5 rounded hover:bg-green-700 transition"
                        >
                            Cumpără acum
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BestSellers;
