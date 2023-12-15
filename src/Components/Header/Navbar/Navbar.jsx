import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { CiMobile1 } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import Button from "../../Button";

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(!false);

    const navLinks = [
        { href: '/', key: 'home', label: 'Home' },
        { href: '/service', key: 'about', label: 'Service' },
        { href: '/aboutus', key: 'services', label: 'About Us' },
        { href: '/portfolio', key: 'pricing ', label: 'Portfolio ' },
        { href: '/support', key: 'contact', label: 'Support' },
        { href: '/blog', key: 'contact', label: 'Blog' },
    ];

    return (
        <nav className="bg-[#0d183f] border-b border-[#abb8c3]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center h-24">
                    <h1 className="text-3xl font-bold">
                        <NavLink to='/'>
                            <img src="https://giantmarketers.com/wp-content/uploads/2022/09/giant-hero-color-logo.png" alt="" />
                        </NavLink>
                    </h1>

                    <div className="hidden xl:flex items-center gap-5">
                        <ul className="text-lg font-medium flex gap-x-7 text-white">

                            {
                                navLinks.map(navLink => (
                                    <li key={navLink.key} className='hover:text-[#ff6900]'>
                                        <NavLink to={navLink.href} className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#ff6900]" : ""}>
                                            {navLink.label}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>

                        <div className='text-lg font-medium text-white'>
                            <p className='flex items-center gap-2'>
                                <CiMobile1 className='text-white text-3xl' />
                                +8801911806157
                            </p>
                        </div>

                        <div className='w-[2px] h-8 bg-white'></div>

                        <div className='text-lg font-medium gap-x-7 text-white flex items-center'>
                            <NavLink>
                                Log In
                            </NavLink>

                            <NavLink>
                                <Button text={'Sign Up'} />
                            </NavLink>
                        </div>
                    </div>

                    {/* Mobile Navbar - responsive */}
                    <div onClick={() => setToggleMenu(!toggleMenu)} className="xl:hidden">

                        {
                            toggleMenu === true ? <FiMenu className="xl:hidden text-5xl text-white cursor-pointer" /> : <IoMdClose className="xl:hidden text-5xl text-white cursor-pointer" />
                        }

                        <div className={`absolute w-full top-[98px] left-0 bg-[#0d183f] shadow-xl z-50 flex flex-col text-[#02a2e0] text-lg xl:hidden ${toggleMenu ? 'hidden' : ''}`}>
                            <ul className="text-xl">
                                {
                                    navLinks.map(navLink => (
                                        <li key={navLink.key} className="px-5 py-2 border-b border-[#abb8c3] hover:text-[#f7f7f7] cursor-pointer">
                                            <NavLink to={navLink.href} className={({ isActive, isPending }) => isPending ? "" : isActive ? "text-[#f7f7f7]" : ""}>
                                                {navLink.label}
                                            </NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;