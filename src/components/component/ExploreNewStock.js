// import React from 'react'

// const ExploreNewStock = () => {
//     return (
//         <div className='flex mx-20 h-[700px] xs:flex-col'>
//             <div className='flex justify-center items-center md:mr-20'>
//                 <img
//                     src="https://fura.brickthemes.com/wp-content/uploads/2018/11/bag_trans.png"
//                     alt="image"
//                     className="md:max-w-screen-lg"
//                     width="660px"
//                     height="475px"
//                 />
//             </div>

//             <div className="flex justify-center items-center font-oswald flex-col w-[510px]">
//                 <div className='text-center font-black text-[40px] w-[400px]'>
//                     <h1>New Stock  2023</h1>
//                     <h1 className=''>Casual For Man</h1>
//                 </div>
//                 <div className='text-center text-base font-normal mt-4'>
//                     Pellentesque fringilla lectus eu odio posuere maximus. Nullam tristique nisi in eleifend ultrices. Sed ut convallis felis, eget dictum enim. Nam efficitur ligula eget nibh placerat viverra.
//                 </div>
//                 <div className='mt-4'>
//                     <button className="bg-[white] text-[black] text-[13px] font-semibold cursor-pointer transition-all duration-[0.3s] ease-[ease-in-out] border shadow-[0_0_0_0_black] px-[2em] py-[1em] rounded-[10em] border-solid border-[black] hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_black] active:translate-y-0.5 active:translate-x-px active:shadow-[0_0_0_0_black]">
//                         Get it Now
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ExploreNewStock

import React from 'react';

const ExploreNewStock = () => {
    return (
        <div className='flex flex-col md:flex-row justify-around items-center h-[700px] xs:my-20 '>
            <div className='text-center'>
                <img
                    src="https://fura.brickthemes.com/wp-content/uploads/2018/11/bag_trans.png"
                    alt="image"
                    className="max-w-screen-lg w-full md:w-[600px]"
                    height="475px"
                />
            </div>
            <div className="flex justify-center items-center font-oswald flex-col md:w-[510px] xs:mt-10">
                <div className='text-center font-black text-[40px] xs:text-center' data-aos="fade-up">
                    <h1>New Stock  2023</h1>
                    <h1 className=''>Casual For Man</h1>
                </div>
                <div className='text-center text-base font-normal mt-4 xs:w-80'>
                    Pellentesque fringilla lectus eu odio posuere maximus. Nullam tristique nisi in eleifend ultrices. Sed ut convallis felis, eget dictum enim. Nam efficitur ligula eget nibh placerat viverra.
                    <div className='mt-4'>
                        <button className="bg-[white] text-[black] text-[13px] font-semibold cursor-pointer transition-all duration-[0.3s] ease-[ease-in-out] border shadow-[0_0_0_0_black] px-[2em] py-[1em] rounded-[10em] border-solid border-[black] hover:-translate-y-1 hover:-translate-x-0.5 hover:shadow-[2px_5px_0_0_black] active:translate-y-0.5 active:translate-x-px active:shadow-[0_0_0_0_black]">
                            Get it Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreNewStock;
