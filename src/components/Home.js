import ProductCard from "./ProductCard";
import { products } from "../data";

const Home = () => {
    return (
        <div className="p-4">
            <div className="grid grid-cols-4 w-11/12 max-w-6xl mx-auto gap-x-5 gap-y-10 p-6 ">
                {
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;