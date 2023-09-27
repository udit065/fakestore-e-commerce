import React from 'react'

const Slider = () => {
    return (
        // <div className='flex justify-between h-44 my-8'>
        //     <div className='flex bg-slate-100 flex-1 p-10 items-center'>
        //         <img src="./img-files/currency-animate.svg" alt="Multi-Currency" className='h-28' />
        //         <div>
        //             <p className='text-2xl font-semibold'>Multi-Currency</p>
        //             <p className='font-medium'>All major types accepted</p>
        //         </div>
        //     </div>
        //     <div className='flex bg-slate-100 flex-1 p-10 items-center'>
        //         <img src="./img-files/top-notch-quality.svg" alt="Top-Notch Quality" className='h-28' />
        //         <div>
        //             <p className='text-2xl font-semibold'>Top-Notch Quality</p>
        //             <p className='font-medium'>From Best Material</p>
        //         </div>
        //     </div>
        //     <div className='flex bg-slate-100 flex-1 p-10 items-center'>
        //         <img src="./img-files/money-saving-animate.svg" alt="Money Savings" className='h-28' />
        //         <div>
        //             <p className='text-2xl font-semibold'>Money Savings</p>
        //             <p className='font-medium'>Guarantee with any  order</p>
        //         </div>
        //     </div>
        //     <div className='flex bg-slate-100 flex-1 p-10 items-center'>
        //         <img src="./img-files/secure-data-animate.svg" alt="Fast & Secure" className='h-28' />
        //         <div>
        //             <p className='text-2xl font-semibold'>Fast & Secure</p>
        //             <p className='font-medium'>Accept all major cards</p>
        //         </div>
        //     </div>
        // </div>
        <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between my-8'>
            <div className='flex bg-slate-100 flex-1 p-4 md:p-10 items-center'>
                <img src="./img-files/currency-animate.svg" alt="Multi-Currency" className='h-20 md:h-28' />
                <div>
                    <p className='text-lg md:text-2xl font-semibold'>Multi-Currency</p>
                    <p className='font-medium'>All major types accepted</p>
                </div>
            </div>
            <div className='flex bg-slate-100 flex-1 p-4 md:p-10 items-center'>
                <img src="./img-files/top-notch-quality.svg" alt="Top-Notch Quality" className='h-20 md:h-28' />
                <div>
                    <p className='text-lg md:text-2xl font-semibold'>Top-Notch Quality</p>
                    <p className='font-medium'>From Best Material</p>
                </div>
            </div>
            <div className='flex bg-slate-100 flex-1 p-4 md:p-10 items-center'>
                <img src="./img-files/money-saving-animate.svg" alt="Money Savings" className='h-20 md:h-28' />
                <div>
                    <p className='text-lg md:text-2xl font-semibold'>Money Savings</p>
                    <p className='font-medium'>Guarantee with any order</p>
                </div>
            </div>
            <div className='flex bg-slate-100 flex-1 p-4 md:p-10 items-center'>
                <img src="./img-files/secure-data-animate.svg" alt="Fast & Secure" className='h-20 md:h-28' />
                <div>
                    <p className='text-lg md:text-2xl font-semibold'>Fast & Secure</p>
                    <p className='font-medium'>Accept all major cards</p>
                </div>
            </div>
        </div>


    )
}

export default Slider;