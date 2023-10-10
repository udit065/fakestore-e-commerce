import React from 'react'

const ExploreSection1 = () => {
    return (
        <>
            <div className="grid grid-cols-3 xs:grid-cols-1 xs:grid-row-3" data-aos="fade-up">
                <div className=''>
                    <img src="https://fura.brickthemes.com/wp-content/uploads/2018/12/banner01.jpg?id=458" alt="Abc FOR HIM" />
                </div>
                <div className='flex justify-center items-center flex-col xs:h-[218px]'>
                    <h1 className="lg:text-2xl font-bold md:text-lg xs:text-2xl">My Ultra Fashion</h1>
                    <p className='mx-8 text-center  mt-8 lg:text-base md:mt-2 md:text-xs'>Elevate your wardrobe with our exclusive range, designed to make every day a fashion statement.</p>
                </div>
                <div className=''>
                    <img src="https://fura.brickthemes.com/wp-content/uploads/2018/12/banner02.jpg?id=457" alt="Abc FOR HER" />
                </div>
            </div>
        </>
    )
}

export default ExploreSection1;
