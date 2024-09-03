import React from 'react'
import Layout from '../layout/Layout'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { GiPortal } from 'react-icons/gi';

const Footer = () => {
    return (
        <footer className='w-full py-7 bg-neutral-200/50'>
            <Layout className='w-full space-y-10'>
                <div className="grid md:grid-cols-5 grid-cols-2 gap-10">
                    <div className="col-span-2 space-y-4">
                        {/* Logo Section */}
                        <Link to="/" className='text-4xl text-sky-500 font-bold mr-16 flex items-center'>
                            <GiPortal />
                            portal
                        </Link>
                        <div className="space-y-6">
                            <p className="text-sm text-neutral-500 font-normal">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, sit. Maxime repellat adipisci
                                quam quo laudantium repellendus impedit eligendi assumenda. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, ab.
                            </p>
                            <div className="flex items-center gap-5 w-full">
                                <Link to="https://www.instagram.com/gtech.official08/" target='_blank' className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center hover:bg-sky-500/20 ease-in-out duration-300">
                                    <FaInstagram className="text-sky-500 text-lg" />
                                </Link>
                                <Link to="https://www.youtube.com/@g-techofficial" target='_blank' className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center hover:bg-sky-500/20 ease-in-out duration-300">
                                    <FaYoutube className="text-sky-500 text-lg" />
                                </Link>
                                <Link to="https://www.youtube.com/@g-techofficial" target='_blank' className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center hover:bg-sky-500/20 ease-in-out duration-300">
                                    <FaFacebookF className="text-sky-500 text-lg" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 space-y-4">
                        <h1 className="text-xl text-neutral-700 font-semibold">
                            For Candidate
                        </h1>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/cdashboard" className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300">
                                    Candidate Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/jobs" className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300">
                                    My Jobs
                                </Link>
                            </li>
                            <li>
                                <Link to="/account" className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300">
                                    My Account
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-span-1 space-y-4">
                        <h1 className="text-xl text-neutral-700 font-semibold">
                            For Employees
                        </h1>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/jobs" className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300">
                                    Find Jobs
                                </Link>
                            </li>
                            <li>
                                <Link to="/account" className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300">
                                    My Account
                                </Link>
                            </li>
                            <li>
                                <Link to="/sjobs" className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300">
                                    Saved Jobs
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile" className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300">
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-1 col-span-2 space-y-4">
                        <h1 className="text-xl text-neutral-700 font-semibold">
                            About Companies
                        </h1>
                        <ul className="space-y-3">
                            <li>
                                <Link to="/about" className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300">
                                    About Company
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300">
                                    Term & Condition
                                </Link>
                            </li>
                            <li>
                                <Link to="/policy" className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/faqs" className="text-base text-neutral-600 font-medium hover:text-sky-500 ease-in-out duration-300">
                                    FAQs
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>

                <div className="w-full h-[1px] bg-neutral-300"></div>

                <div className="w-full flex items-center justify-between">
                    <p className="text-sm text-neutral-500/80 font-normal">
                        Copyright © 2024. All rights reserved
                    </p>
                    <p className="text-sm text-neutral-500/80 font-normal">
                        Designed and Developed by
                        <Link to="https://github.com/gtech.official08" className="text-sky-500 hover:text-sky-600 ease-in-out duration-300 ml-2">
                            G-Tech Official
                        </Link>
                    </p>
                </div>
            </Layout>
        </footer>
    )
}

export default Footer