import React, { useState, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BsEyeFill } from "react-icons/bs";
import { CartContext } from '../contexts/CartContext';
import Footer from '../components/component/Footer';

function FilterProducts() {
    const { products } = useContext(ProductContext);
    // Cart context
    const { addToCart } = useContext(CartContext);
    const { name } = useParams(); // Get the category name from the URL parameter

    // Filter products by the category name
    const filteredProducts = products.filter(product => product.category === name);

    return (
        <>
            {/* //Products mapping */}
            <div className="flex flex-wrap justify-center mt-28">
                {filteredProducts.map((product) => (
                    <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-4" key={product.id}>
                        <div className="bg-white rounded shadow">
                            <div className="w-full h-full flex justify-center items-center ease-in duration-200 transform hover:scale-110 transition-transform relative group">
                                <div className="w-[200px] mx-auto flex justify-center items-center">
                                    <img src={product.image} className="max-h-[160px] " alt={product.title} />
                                </div>
                                {/* //PLUS Button */}
                                <div className='absolute top-0 right-0 bg-[#E5E4E2] p-1 w-10 h-10 opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-x-full'>
                                    <button onClick={() => addToCart(product, product.id)}>
                                        <div className='flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-[1.8rem] w-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                                {/*  Second Button */}
                                <div className="absolute top-10 right-0 bg-[#E5E4E2] p-1 w-10 h-10 opacity-0 group-hover:opacity-100 transition-all transform group-hover:-translate-x-full">
                                    <Link
                                        to={`/product/${product.id}`}
                                        className="h-[1.8rem] w-8 flex justify-center items-center text-primary drop-shadow-xl"
                                    >
                                        <BsEyeFill />
                                    </Link>
                                </div>
                            </div>


                            <div className="p-4">
                                <div className="tex-sm capitalize text-gray-500 mb-1">{product.category}</div>
                                <Link
                                    to={`/product/${product.id}`}
                                    className="font-semibold mb-1 cursor-pointer"
                                >
                                    {product.title}
                                </Link>
                                <p className="font-semibbold">${product.price}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer/>
        </>
    );
}

export default FilterProducts;
