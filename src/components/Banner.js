import React, { useState, useEffect, useContext } from 'react';


function Banner() {


    return (
        <>
            <section className="flex h-[640px]">
                <div className="absolute inset-x-0 h-[640px] bg-cover bg-center"
                    style={{ backgroundImage: 'url("./img-files/Abract01.png")', opacity: '0.8', }} ></div>
                <div className="container flex h-full w-full">
                    <div className="flex flex-col justify-center ml-20">
                        <div className="font-semibold flex items-center uppercase">
                            <div className="w-10 h-[2px] mr-3 bg-cyan-700"></div>Hot Trend
                        </div>
                        <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">Fresh Fashion Finds<br />
                            <span className="font-light">new collection</span></h1>
                        <h1 className='self-start uppercase font-semibold border-b-2 border-primary border-black'>Discover More</h1>
                    </div>
                    <div className="w-4/12 absolute top-40 left-[56rem]" >
                        <img src="./img-files/online-shopping-animate.svg" alt="Online Shopping" />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;



