import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from "react-icons/fi";
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';


const Sidebar = () => {

    const { cart, clearCart, itemAmount, total } = useContext(CartContext);

    return (
        <>
            <div>
                <div className='text-xl p-4 font-semibold'>Shopping Cart ({itemAmount})</div>
                <div>
                    {cart.map((item) => {
                        return <CartItem item={item} key={item.id} />;
                    })}
                </div>
                {/* //Bottom of Cart */}
                <div className="flex flex-col gap-y-3  mt-4">
                    <div className="flex w-full justify-between items-center px-20">
                        {/* total */}
                        <div className="font-semibold">
                            <span className="mr-2">Subtotal:</span> ${" "}
                            {parseFloat(total).toFixed(2)}
                        </div>
                        {/* clear cart icon */}
                        <div
                            onClick={clearCart}
                            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
                        >
                            <FiTrash2 />
                        </div>
                    </div>
                    <div className='px-16'>
                        <Link
                            to={"/"}
                            className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium "
                        >
                            View Cart
                        </Link>
                        <Link
                            to={"/"}
                            className="bg-primary flex p-3 justify-center items-center bg-black text-white w-full font-medium"
                        >
                            Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;