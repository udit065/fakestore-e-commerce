import React, { useState, useEffect, useContext } from 'react';


function Banner() {

    // sm: Small screens (640px and up)
    // md: Medium screens (768px and up) -> tablet 
    // lg: Large screens (1024px and up) -> Laptop  
    // xl: Extra-large screens (1280px and up) -> Laptop L
    // 2xl: 2x extra-large screens (1536px and up) -> 4k
    return (
        <>
            <section className="flex h-[640px] xs:h-[120px]">
                <div className="absolute inset-x-0 xl:h-[642px] lg:h-[535px] xs:h-[320px] md:bg-cover lg:bg-cover xl:bg-cover bg-center xs:bg-center"
                    style={{ backgroundImage: 'url("./img-files/Abract01.png")', opacity: '0.8', }} ></div>
                <div className="container flex h-full w-full xs:h-[280px]">
                    <div className="flex flex-col justify-center ml-20 xs:ml-4">
                        <div className="font-semibold flex items-center uppercase">
                            <div className="w-10 xs:w-4 h-[2px] mr-3 xs:mr-2 bg-cyan-700"></div>
                            <span className='font-semibold xs:text-sm'>Hot Trend</span>
                        </div>
                        <h1 className="uppercase text-[70px] xs:text-base leading-[1.1] font-semibold mb-4 xs:mb-2">Fresh Fashion Finds<br />
                            <span className="font-light xs:text-base">new collection</span></h1>
                        <h1 className='self-start uppercase font-semibold border-b-2 border-primary border-black xs:font-medium xs:text-xs'>Discover More</h1>
                    </div>
                    <div className="w-4/12 absolute top-40 xl:left-[52rem] lg:left-[28rem] xs:top:10 xs:left-56 " >
                        <img src="./img-files/online-shopping-animate.svg" alt="Online Shopping" />
                    </div>
                </div>
            </section>

        </>
    );
}

export default Banner;



