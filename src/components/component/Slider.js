import React from 'react'

const Slider = () => {
    return (
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between my-8 xs:mt-[200px]' data-aos="fade-up">
            <div className='flex flex-1 p-4 md:p-10 items-center xs:flex-col'>
                <img src="./img-files/currency-animate.svg" alt="Multi-Currency" className='h-28' />
                <div className='ml-2 xs:text-center xs:mt-6'>
                    <p className='text-2xl font-semibold'>Multi-Currency</p>
                    <p className='font-medium mt-2'>All major types accepted</p>
                </div>
            </div>
            <div className='flex flex-1 p-4 md:p-10 items-center xs:flex-col'>
                <img src="./img-files/top-notch-quality.svg" alt="Top-Notch Quality" className='h-28' />
                <div className='xs:text-center xs:mt-6'>
                    <p className='text-2xl font-semibold'>Top-Notch Quality</p>
                    <p className='font-medium mt-2'>From Best Material</p>
                </div>
            </div>
            <div className='flex flex-1 p-4 md:p-10 items-center xs:flex-col'>
                <img src="./img-files/money-saving-animate.svg" alt="Money Savings" className='h-28' />
                <div className='xs:text-center xs:mt-6'>
                    <p className='text-2xl font-semibold'>Money Savings</p>
                    <p className='font-medium mt-2'>Guarantee with any order</p>
                </div>
            </div>
            <div className='flex flex-1 p-4 md:p-10 items-center xs:flex-col'>
                <img src="./img-files/secure-data-animate.svg" alt="Fast & Secure" className='h-28' />
                <div className='xs:text-center xs:mt-6'>
                    <p className='text-2xl font-semibold'>Fast & Secure</p>
                    <p className='font-medium mt-2'>Accept all major cards</p>
                </div>
            </div>
        </div>


    )
}

export default Slider;