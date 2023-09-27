import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';


function RandomProduct() {
    const [bannerProducts, setBannerProducts] = useState([]);

    const { products } = useContext(ProductContext);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products/category/jewelery");
            const data = await response.json();
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomProduct = data[randomIndex];
            setBannerProducts(randomProduct);
            // console.log(data);
        };
        fetchProducts();
    }, []);

    // console.log(bannerProducts);

    return (
        <>
            <section className="flex justify-around h-[640px] bg-no-repeat bg-cover bg-center pb-20">
                <div className="absolute inset-x-0 h-[640px] bg-cover bg-center"
                    style={{ backgroundImage: 'url("./banner.jpg")', opacity: '0.5', }} ></div>
                <div className="container flex h-full ml-20 z-10">
                    <div className="flex flex-col justify-center">
                        <div className="font-semibold flex items-center uppercase">
                            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>Hot Trend
                        </div>
                        <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">Fresh Fashion Finds<br />
                            <span className="font-light">new collection</span></h1>
                        <Link to={`/product/${products.id}`} className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More</Link>
                        {console.log(products.id)}
                    </div>
                </div>
                <div className="">
                    <img src={bannerProducts?.image} alt="Product" className="absolute right-[237px] top-[235px] h-[240px] w-auto shadow-"
                    />
                </div>

            </section>
        </>
    );
}

export default RandomProduct;



