import React from 'react'
import logo from '../../logo.svg'
import { BiCartAlt,BiHeart, BiUser } from "react-icons/bi";
import '../Navbar/Navbar.css';
const Navbar = () => {
  return (
    <div>
         <header className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between">
            <div className='flex gap-2'>
                <BiHeart className='text-4xl text-gray-500 border-x border-y p-1 border-grap-500 cursor-pointer rounded-full hover:bg-primary hover:text-white hover:border-white transition'></BiHeart>
                <BiUser className='text-4xl text-gray-500 border-x border-y p-1 border-grap-500 cursor-pointer rounded-full hover:bg-primary hover:text-white hover:border-white transition'></BiUser>
            </div>

            <div>
                <img src={logo} alt="Logo" className="w-32" />
            </div>

            <div className="">
                <div className='flex gap-2 rounded-md px-4 py-2 border-x border-y border-grap-500 bg-white text-gray-500 hover:bg-primary hover:text-white hover:border-white align-items-center transition relative'>
                        <BiCartAlt className='text-2xl '></BiCartAlt>
                        <p className='m-0 font-bold'>Cart</p>
                        <div className="cart_badge">
                            <p className="bg-black rounded-lg py-1 px-2 text-white">2</p>
                        </div>
                </div>
            </div>
        </div>
        </header>
        <nav className="bg-gray-800">
        <div className="container flex">
            <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
                <span className="text-white">
                    <i className="fa-solid fa-bars"></i>
                </span>
                <span className="capitalize ml-2 text-white">All Categories</span>

                <div
                    className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                    <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/sofa.svg" alt="sofa" className="w-5 h-5 object-contain" />
                        <span className="ml-6 text-gray-600 text-sm">Sofa</span>
                    </div>
                    <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/terrace.svg" alt="terrace" className="w-5 h-5 object-contain" />
                        <span className="ml-6 text-gray-600 text-sm">Terarce</span>
                    </div>
                    <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/bed.svg" alt="bed" className="w-5 h-5 object-contain" />
                        <span className="ml-6 text-gray-600 text-sm">Bed</span>
                    </div>
                    <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/office.svg" alt="office" className="w-5 h-5 object-contain" />
                        <span className="ml-6 text-gray-600 text-sm">office</span>
                    </div>
                    <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/outdoor-cafe.svg" alt="outdoor" className="w-5 h-5 object-contain" />
                        <span className="ml-6 text-gray-600 text-sm">Outdoor</span>
                    </div>
                    <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                        <img src="assets/images/icons/bed-2.svg" alt="Mattress" className="w-5 h-5 object-contain" />
                        <span className="ml-6 text-gray-600 text-sm">Mattress</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between flex-grow pl-12">
                <div className="flex items-center space-x-6 capitalize">
                    <div href="index.html" className="text-gray-200 hover:text-white transition">Home</div>
                    <div href="pages/shop.html" className="text-gray-200 hover:text-white transition">Shop</div>
                    <div href="#" className="text-gray-200 hover:text-white transition">About us</div>
                    <div href="#" className="text-gray-200 hover:text-white transition">Contact us</div>
                </div>
                <div href="pages/login.html" className="text-gray-200 hover:text-white transition">Login</div>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
