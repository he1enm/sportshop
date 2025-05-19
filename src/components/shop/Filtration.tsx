// src/components/Filtration.tsx
import { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";

interface AccordionProps {
    title: string;
    items: string[];
}

function Accordion(props: AccordionProps) {
    const { title, items } = props;
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="pb-3    ">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center text-lg">
                <span className="text-left">{title}</span>
                <FaChevronCircleDown
                    className={`transition-transform duration-300 text-black ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {isOpen && (
                <ul className="pl-4 mt-2 space-y-1">
                    {items.map((item, index) => (
                        <li key={index}>
                            <a href="#" className="text-gray-700 hover:underline text-base">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function Filtration() {
    return (
        <div className="flex flex-col gap-6">
            {/* Sidebar */}
            <div className="w-full lg:w-1/4">
                <h1 className="text-2xl mb-4">Categorii</h1>
                <Accordion title="Gen" items={["Bǎrbați", "Femei"]} />
                <Accordion title="Vânzări" items={["Sport", "Lux"]} />
                <Accordion title="Produse" items={["Genți", "Pulovere", "Ochelari"]} />
            </div>

            {/* Main area */}
        </div>
    );
}

export default Filtration;
