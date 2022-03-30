import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

import CustomLink from '../CustomLink/CustomLink'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='sticky top-0 bg-white justify-between px-4 md:px-12 py-8 flex justify-center md:justify-between'>
            <div onClick={()=> setOpen(!open)}>
                {open ? <XIcon className=' md:hidden static h-6 w-6 text-blue-500'></XIcon> : <MenuIcon className=' md:hidden static h-6 w-6 text-blue-500'></MenuIcon>}
            </div>
            <div className='hidden md:block font-sans font-bold text-2xl text-gray-600 absolute' to='/'>
                <Link to="/"><h2>Crypto Club</h2></Link>
            </div>

            <div className={`flex gap-4 text-xl ${open ? 'block' : 'hidden'} md:block md:flex `}>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/coins">Coins</CustomLink>
                <CustomLink to="/contact">Contact</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </div>
        </div>
    );
};

export default Header;