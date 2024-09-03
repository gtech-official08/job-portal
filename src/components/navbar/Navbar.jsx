import React from 'react';
import { FaBars } from 'react-icons/fa6';
import { LiaTimesSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { GiPortal } from "react-icons/gi";


const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const navLinks = [
        { href: '/', label: 'Find Jobs' },
        { href: '/companies', label: 'Companies' },
        { href: '/saved-jobs', label: 'Saved jobs' },
        { href: '/blog', label: 'Blog' },
    ];

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <nav className='w-full h-[8ch] bg-neutral-50 flex items-center md:flex-row lg:px-32 md:px-16 sm:px-7 px-4 z-50 border-b border-neutral-200'>
                {/* Logo Section */}
                <Link to="/" className='text-2xl text-sky-500 font-bold mr-16 flex items-center'>
                    <GiPortal />
                    portal
                </Link>

                {/* Toggle button */}
                <button
                    onClick={handleClick}
                    className='flex-1 lg:hidden text-neutral-600 ease-in-out duration-300 flex items-center justify-end'
                >
                    {open ? <LiaTimesSolid className='text-xl' /> : <FaBars className='text-xl' />}
                </button>

                <div
                    className={`${open ? 'flex absolute top-16 left-[50%] translate-x-[-50%] w-[95%] h-auto md:h-auto md:relative' : 'hidden'
                        } flex-1 md:flex flex-col md:flex-row gap-x-5 gap-y-4 md:items-center md:p-0 sm:p-4 p-4 justify-between md:bg-transparent bg-neutral-50 md:border-none border border-neutral-200 md:shadow-none sm:shadow-md shadow-md rounded-md`}
                >
                    <ul className='list-none flex md:items-center sm:items-start items-start gap-x-7 gap-y-3 flex-wrap md:flex-row sm:flex-col flex-col text-base text-neutral-500 font-medium'>
                        {navLinks.map((nav) => (
                            <li key={nav.href}>
                                <Link to={nav.href} onClick={handleClose} className='hover:text-sky-500 ease-in-out duration-300'>
                                    {nav.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className='flex md:items-center sm:items-start items-start gap-x-5 gap-y-2 flex-wrap md:flex-row sm:flex-col flex-col text-base font-medium text-neutral-50'>
                        <button className="w-fit px-6 py-2 rounded-full bg-sky-500 hover:bg-sky-600 ease-in-out duration-300">
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;