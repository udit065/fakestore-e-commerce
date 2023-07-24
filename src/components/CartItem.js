import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);


    return (
        <div className="flex gap-x-4 py-2  border-b border-gray-200 w-full font-light text-gray-500 px-16">
            <div className="w-full min-h-[150px] flex items-center gap-x-4">
                {/* image */}
                <Link to={`/product/${item.id}`}>
                    <img className="max-w-[80px]" src={item.image} alt="" />
                </Link>
                <div className="w-full flex flex-col">
                    {/* title and remove icon */}
                    <div className="flex justify-between mb-2">
                        {/* title */}
                        <Link
                            to={`/product/${item.id}`}
                            className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
                        >
                            {item.title}
                        </Link>
                        {/* remove icon */}
                        <div
                            onClick={() => removeFromCart(item.id)}
                            className="text-2xl cursor-pointer pr-14"
                        >
                            <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
                        </div>
                    </div>
                    <div className="flex gap-x-2 h-[36px] text-sm">
                        {/* quantity */}
                        <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
                            <div onClick={() => decreaseAmount(item.id)} className="h-full flex-1 flex justify-center items-center cursor-pointer">
                                <IoMdRemove />
                            </div>
                            <div className="h-full flex justify-center items-center px-2">
                                {item.amount}
                            </div>
                            <div onClick={() => increaseAmount(item.id)} className="h-full flex flex-1 justify-center items-center cursor-pointer">
                                <IoMdAdd />
                            </div>
                        </div>
                        {/* item price */}
                        <div className="flex flex-1 justify-around items-center">
                            $ {item.price}
                        </div>
                        {/* final price */}
                        <div className="flex flex-1 justify-end items-center text-primary font-medium pr-14">{`$ ${parseFloat(
                            item.price * item.amount
                        ).toFixed(2)}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
