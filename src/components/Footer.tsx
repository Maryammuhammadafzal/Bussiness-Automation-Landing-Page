
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
        <div className="w-full lato text-secondary h-auto gap-5 flex justify-center items-center p-3">
            <div className=" w-[80%] max-lg:w-[95%] max-md:w-full  h-auto flex flex-col gap-4 justify-center items-center">
                <div className="footerContent max-sm:justify-center w-full h-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-between mb-3 gap-6 ">
                    <div className="left w-full max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center p-3 h-auto">
                        {/* Logo */}
                        <div className="logo ">
                            <Link href='/' className='w-auto h-auto'>
                                <p className='logo text-[40px] font-semibold px-2'>LOGO</p>
                            </Link>
                        </div>
                    </div>

                    <div className="middle max-sm:w-full max-sm:py-3 w-full p-3 h-auto ">
                        <h4 className="text-secondary text-xl  lato capitalize max-lg:text-lg max-md:text-base">
                            Pages
                        </h4>
                        <ul className="list-none text-base py-2  gap-1 flex flex-col ">
                            <li className="  font-normal">
                                <a href="#" className="">
                                    Home
                                </a>
                            </li>
                            <li className="  font-normal">
                                <a href="#" className="">
                                    Products
                                </a>
                            </li>
                            <li className="  font-normal">
                                <a href="#" className="">
                                    About Us
                                </a>
                            </li>
                            <li className="  font-normal">
                                <a href="#" className="">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="middle  max-sm:py-3 w-full p-3 h-auto">
                        <h4 className="text-secondary text-xl lato capitalize max-lg:text-lg max-md:text-base">
                            Get In Touch
                        </h4>
                        <ul className="list-none py-2 gap-1 flex flex-col ">
                            <li className="text-sm  font-normal ">
                                4517 Washington Ave. Manchester, Kentucky 39495
                            </li>
                            <li className="text-sm  font-normal">
                                jessica.hanson@example.com
                            </li>
                            <li className="text-sm  font-normal">
                                (308) 555-0121
                            </li>
                        </ul>
                    </div>
                    <div className="left max-sm:w-full max-sm:px-3 gap-10  max-sm:py-3 w-full p-3  h-auto max-[900px]:w-full">
                        <h4 className="text-secondary text-lg capitalize max-lg:text-base lato max-md:text-sm">
                            Social Media
                        </h4>
                        <div className="flex gap-x-10 gap-y-6 flex-wrap h-auto max-w-[200px]  py-1">
                            <FaFacebook size={30} />
                            <FaXTwitter size={30} />
                            <FaSquareInstagram size={30} />
                            <FaLinkedin size={30} />
                            <FaWhatsapp size={30} />

                        </div>
                    </div>
                </div>
                <div className="copyright flex gap-4 justify-center items-center w-full h-auto py-5">
                    <p className="md:text-sm text-xs text-center">© 2021 all copyright reserved. All Rights Reserved. <Link href='/' className="underline"> Rootlet Solution</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Footer;