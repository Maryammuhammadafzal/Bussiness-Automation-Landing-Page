import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaSquareInstagram, FaLinkedin, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    let contact_data = [
        {
            name: "Address:",
            link: "3891 Ranchview Dr. Richardson, California 62639",
        },
        {
            name: "Send Email:",
            link: "Info@gmail.com",
        },
        {
            name: "Call Emergency:",
            link: "+88 (308) 555-0121",
        },
    ];
    return (
        <div className="w-full lato text-primary h-auto gap-5 flex justify-center items-center p-3">
            <div className="academySection w-[80%] max-lg:w-[95%] max-md:w-full  h-auto flex flex-col gap-4 justify-center items-center">
                <div className="footerContent max-sm:justify-center w-full h-auto flex flex-wrap justify-between mb-3 ">
                    <div className="left w-[25%] max-sm:w-[100%] max-[900px]:w-[45%] max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center p-3 h-auto">
                        {/* Logo */}
                        <div className="logo ">
                            <Link href='/' className='w-auto h-auto'>
                                <p className='logo text-[40px] font-semibold px-2'>LOGO</p>
                            </Link>
                        </div>
                        <p className="text-lg  my-5 max-sm:w-[70%] max-sm:text-center font-[Nunito Sans] max-md:text-[14px] max-sm:text-[12px] max-sm:w-full font-[400]">
                            Let’s make life sweeter together! Reach us at
                        </p>
                    </div>

                    <div className="middle max-sm:w-full max-sm:py-3 w-[20%] p-3 h-auto ">
                        <h4 className="text-secondary text-xl  lato capitalize max-lg:text-lg max-md:text-base">
                            Pages
                        </h4>
                        <ul className="list-none text-base py-2  gap-1 flex flex-col ">
                            <li className=" font-[Nunito Sans]  font-[400]">
                                <a href="#" className="">
                                    Home
                                </a>
                            </li>
                            <li className=" font-[Nunito Sans]  font-[400]">
                                <a href="#" className="">
                                    Products
                                </a>
                            </li>
                            <li className=" font-[Nunito Sans]  font-[400]">
                                <a href="#" className="">
                                    About Us
                                </a>
                            </li>
                            <li className=" font-[Nunito Sans]  font-[400]">
                                <a href="#" className="">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="middle max-sm:w-auto max-sm:py-3 max-sm:mx-auto w-[25%] p-3 h-auto">
                        <h4 className="text-secondary text-xl lato capitalize max-lg:text-lg max-md:text-base">
                            Get In Touch
                        </h4>
                        <ul className="list-none py-2 gap-1 flex flex-col ">
                            <li className="text-sm font-[Nunito Sans]  font-[400] ">
                                4517 Washington Ave. Manchester, Kentucky 39495
                            </li>
                            <li className="text-sm font-[Nunito Sans]  font-[400]">
                                jessica.hanson@example.com
                            </li>
                            <li className="text-sm font-[Nunito Sans]  font-[400]">
                                (308) 555-0121
                            </li>
                        </ul>
                    </div>
                    <div className="left max-sm:w-full max-sm:px-3  max-sm:py-3 w-[25%] p-3  h-auto max-[900px]:w-full">
                        <h4 className="text-secondary text-lg capitalize max-lg:text-base lato max-md:text-sm">
                            Social Media
                        </h4>
                        <div className="flex gap-3 py-1">
                            <FaFacebook size={20} />
                            <FaXTwitter size={20} />
                            <FaSquareInstagram size={20} />
                            <FaLinkedin size={20} />
                            <FaWhatsapp size={20} />

                        </div>
                    </div>
                </div>
                <div className="copyright flex sm:flex-row flex-col gap-4 justify-between items-center w-full h-auto py-5">
                    <p className="md:text-sm text-xs">© 2021 all copyright reserved. All Rights Reserved.</p>
                    <ul className="flex gap-2 md:text-sm text-xs">
                        <li>Term of services</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;