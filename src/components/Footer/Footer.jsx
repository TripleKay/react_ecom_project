import React from 'react'
import logo from '../../logo.svg'

const Footer = () => {
  return (
    <div>
    <footer className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container grid grid-cols-3">
            <div className="col-span-1 space-y-8 mr-2">
                <img src={logo} alt="logo" className="w-30" />
                <div className="mr-2">
                    <p className="text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, hic?
                    </p>
                </div>
                <div className="flex space-x-6">
                    <div href="#" className="text-gray-400 hover:text-gray-500"><i
                            className="fa-brands fa-facebook-square"></i></div>
                    <div href="#" className="text-gray-400 hover:text-gray-500"><i
                            className="fa-brands fa-instagram-square"></i></div>
                    <div href="#" className="text-gray-400 hover:text-gray-500"><i
                            className="fa-brands fa-twitter-square"></i></div>
                    <div href="#" className="text-gray-400 hover:text-gray-500">
                        <i className="fa-brands fa-github-square"></i>
                    </div>
                </div>
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-8">
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
                        <div className="mt-4 space-y-4">
                            <div href="#" className="text-base text-gray-500 hover:text-gray-900 block">Marketing</div>
                            <div href="#" className="text-base text-gray-500 hover:text-gray-900 block">Analitycs</div>
                            <div href="#" className="text-base text-gray-500 hover:text-gray-900 block">Commerce</div>
                            <div href="#" className="text-base text-gray-500 hover:text-gray-900 block">Insights</div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
                        <div className="mt-4 space-y-4">
                            <div href="#" className="text-base text-gray-500 hover:text-gray-900 block">Pricing</div>
                            <div href="#" className="text-base text-gray-500 hover:text-gray-900 block">Documentation</div>
                            <div href="#" className="text-base text-gray-500 hover:text-gray-900 block">Guides</div>
                            <div href="#" className="text-base text-gray-500 hover:text-gray-900 block">API Status</div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
                        <div className="mt-4 space-y-4">
                            <div href="#" className="text-base text-gray-500 hover:text-gray-900 block">Marketing</div>
                            <div href="#" className="text-base text-gray-500 hover:text-gray-900 block">Analitycs</div>
                            <div href="#" className="text-base text-gray-500 hover:text-gray-900 block">Commerce</div>
                            <div href="#" className="text-base text-gray-500 hover:text-gray-900 block">Insights</div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
                        <div className="mt-4 space-y-4">
                            <div href="#" className="text-base text-gray-500 hover:text-gray-900 block">Pricing</div>
                            <div href="#" className="text-base text-gray-500 hover:text-gray-900 block">Documentation</div>
                            <div href="#" className="text-base text-gray-500 hover:text-gray-900 block">Guides</div>
                            <div href="#" className="text-base text-gray-500 hover:text-gray-900 block">API Status</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <div className="bg-gray-800 py-4">
        <div className="container flex items-center justify-between">
            <p className="text-white">&copy; TailCommerce - All Right Reserved</p>
            <div>
                <img src="../assets/images/methods.png" alt="methods" className="h-5" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Footer