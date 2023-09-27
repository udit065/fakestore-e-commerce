import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
// import Product from '../components/Product'


const Category = () => {
    // get products from product context
    const { products } = useContext(ProductContext);

    console.log(products);

    // get only men's and women's clothing category
    const filteredProducts = products.filter((item) => {
        return (
            item.category === "men's clothing" || item.category === "women's clothing" || item.category === "jewelery"
        );
    });

    return (
        <div>
            <section className="py-20">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Products</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                        {filteredProducts.map((product) => {
                            return (
                                // <Product product={product} key={product.id} />
                                <>                                <h1>wergfh</h1>

                                    <div className="p-4">
                                        <div className="tex-sm capitalize text-gray-500 mb-1">{product.category}</div>
                                        <h2
                                            className="font-semibold mb-1 cursor-pointer"
                                        >
                                            {product.title}
                                        </h2>
                                        <p className="font-semibbold">${product.price}</p>
                                    </div>
                                </>

                            );
                        })}
                    </div>
                </div>
            </section >
        </div >
    );
};

export default Category;