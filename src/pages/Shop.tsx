import Filtration from "../components/shop/Filtration";
import CardList from "../components/shop/CardList";
import Brands from "../components/about/Brands";

function Shop() {
    return (
        <>
            <div className="flex flex-col lg:flex-row gap-6 px-6 md:px-25 py-10">
                {/* Sidebar: Categorii */}
                <div className="w-full lg:w-1/4">
                    <Filtration />
                </div>

                {/* Main content: Filter + Cards */}
                <div className="w-full lg:w-3/4 flex flex-col gap-6">
                    <CardList />
                </div>
            </div>
            <Brands />
        </>
    );
}

export default Shop;
