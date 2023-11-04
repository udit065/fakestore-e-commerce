import React from 'react';
import { Link } from 'react-router-dom';

const ProductsSection = () => {
    return (
        <div className='flex h-screen cursor-pointer xs:flex-col'>
            <Link to="/products/men's clothing">
                <div className='hover:bg-red-200 flex flex-col'>
                    <img src="./img-files/mens-photoshoot-animate.svg" alt="image" className='w-full h-screen xsh-96' />
                </div>
            </Link>
            <Link to="/products/women's clothing">
                <div className='hover:bg-red-200'>
                    <img src="./img-files/womens-clothes-animate.svg" alt="image" className='w-full h-screen xs:h-96' />
                </div>
            </Link>
            <Link to="/products/jewelery">
                <div className='hover:bg-red-200'>
                    <img src="./img-files/jewelry-shop-animate.svg" alt="image" className='w-full h-screen xs:h-96' />
                </div>
            </Link>
            <Link to="/products/electronics">
                <div className='hover:bg-red-200'>
                    <img src="./img-files/digital-transformation-animate.svg" alt="image" className='w-full h-screen xs:h-96' />
                </div>
            </Link>
        </div>
    )
}

export default ProductsSection