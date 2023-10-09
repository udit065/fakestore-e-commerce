import React from 'react';

const Newsletter = () => {
    return (
        <div className='flex justify-center flex-col items-center h-80 xs:h-[600px] bg-black text-white'>
            <div className='flex flex-col items-center justify-center font-oswald text-center'>
                <div className='text-2xl font-bold'>Join Our Newsletter List</div>
                <div className='text-2xl font-bold xs:mt-3'>
                    <span style={{ whiteSpace: 'nowrap' }}>And Get 25% Discount On All</span>
                    <span className="xs:block">Products</span>
                </div>
            </div>


            <div class="p-5 flex justify-center mt-4 xs:mt-6">
                <div class="xs:flex xs:flex-col xs:items-center">
                    <input type="text" class="w-[400px] xs:w-[250px] h-[40px] text-base text-black pl-10 font-semibold outline-0 rounded-tl-full rounded-bl-full xs:rounded-full mb-2 xs:mb-0" />
                    <input type="button" value="SUBSCRIBE" class="bg-orange-500 font-oswald w-40 xs:w-[250px] h-[42px] p-2 rounded-tr-full rounded-br-full xs:rounded-full text-white font-bold subpixel-antialiased xs:mt-2" />
                </div>
            </div>
        </div>
        // </div >
    );
}

export default Newsletter;
