// src/components/Filtration.tsx
import { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";

interface AccordionProps {
    title: string;
    items: string[];
    isOpen: boolean;
    onToggle: () => void;
}

function Accordion({ title, items, isOpen, onToggle }: AccordionProps) {
    return (
        <div className="pb-3">
            <button
                onClick={onToggle}
                className="lg:w-50 xl:w-85 w-full flex justify-between items-center text-xl font-normal text-black cursor-pointer transition-colors duration-300 hover:text-gray-700"
            >
                <span>{title}</span>
                <FaChevronCircleDown
                    className={`text-xl transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
            </button>

            {/* Animated list */}
            <div
                className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
                    isOpen ? "max-h-40 mt-2" : "max-h-0"
                }`}
            >
                <ul className="pl-2 space-y-1">
                    {items.map((item, index) => (
                        <li key={index}>
                            <a href="#" className="text-base text-black hover:underline transition-colors duration-200">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

function Filtration() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const categories = [
        { title: "Gen", items: ["Bǎrbați", "Femei"] },
        { title: "Vânzǎri", items: ["Sport", "Lux"] },
        { title: "Produse", items: ["Genți", "Pulovere", "Ochelari"] },
    ];

    const toggleAccordion = (index: number) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div className="w-full lg:w-1/4 p-2">
            <h1 className="text-2xl mb-4">Categorii</h1>
            <div className="space-y-2">
                {categories.map((category, index) => (
                    <Accordion
                        key={index}
                        title={category.title}
                        items={category.items}
                        isOpen={openIndex === index}
                        onToggle={() => toggleAccordion(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Filtration;
