import { useContext, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { FiShoppingCart } from "react-icons/fi";
import { CartContext } from '../contexts/CartContext';
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const { products } = useContext(ProductContext);
    const { itemAmount } = useContext(CartContext);

    return (
        <>
            <nav className={`bg-black flex items-center justify-around top-0 w-full z-99 xl:h-12 md:h-10 sm:h-10`}>
                <div className="flex items-center">
                    <h1 className='text-white text-xl'>TrendPrime</h1>
                </div>

                <div className="flex gap-4 text-white">
                    <ul className="flex gap-4">
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Services</li>
                    </ul>
                </div>

                {/* Add to Cart */}
                <div className="items-center  mt-02">
                    <Link to="/addtocart">
                        <FiShoppingCart className="text-xl text-white cursor-pointer relative w-[30px] h-[30px] items-center" />
                        <div className='bg-white text-black rounded-full absolute -top-2 right-[8.5rem] w-4 text-center font-medium mr-12 mt-2'>
                            {itemAmount}
                        </div>
                    </Link>
                </div>
            </nav>


        </>
    )
}

export default Navbar;