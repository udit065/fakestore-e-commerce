import React, { useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="flex justify-between items-center w-[92%] mx-auto border-b-2 h-16">
            <div>
                <h1 className='font-black text-2xl'>CareerGaze</h1>
            </div>
            {/* top-[9%] */}
            <div
                className={`nav-links duration-500 lg:static absolute bg-white lg:min-h-fit h-[60vh] ${menuOpen ? 'top-[9%]' : 'top-[-100%]'
                    } lg:w-auto w-full flex items-center px-5 z-10`}
            >
                <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-8 h-16">
                    <Link href="/pages/community">
                        <div className="flex items-center hover:border-b-4 hover:border-green-700 h-16">
                            <li >
                                Home
                            </li>
                        </div>
                    </Link>
                    <Link href="/pages/jobs">
                        <div className="flex items-center hover:border-b-4 hover:border-green-700 h-16">
                            <li>
                                Products
                            </li>
                        </div>
                    </Link>
                    <Link href="/pages/companies">
                        <div className="flex items-center hover:border-b-4 hover:border-green-700 h-16">
                            <li>
                                Latest Products
                            </li>
                        </div>
                    </Link>
                    <Link href="/pages/salaries">
                        <div className="flex items-center hover:border-b-4 hover:border-green-700 h-16">
                            <li>
                                Offers
                            </li>
                        </div>
                    </Link>
                </ul>
            </div>
            <div className="flex items-center gap-6">
                <SearchIcon />
                <span className='xs:hidden'>Search</span>
                <NotificationsNoneIcon />
                <AccountCircleIcon />
                <IconButton
                    onClick={toggleMenu}
                    className="lg:hidden"
                >
                    {menuOpen ? <CloseIcon className='z-50' /> : <MenuIcon />}
                </IconButton>
            </div>
        </nav>
    );
};

export default Navbar;
