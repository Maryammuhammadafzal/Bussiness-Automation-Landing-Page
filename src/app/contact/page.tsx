import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Vector from "@/components/Vector";
import React from "react";

const ContactPage = () => {
    return (
        <div className="px-8 md:py-20 sm:py-14 py-7 w-full h-auto flex md:gap-16 sm:gap-10 gap-6 flex-col relative">
             <div className="vector absolute w-[400px] h-[540px] top-0 -right-50">
                <Vector/>
            </div>
            <Heading title="Let’s Start Planning" />
            <div className=" h-auto flex flex-col gap-3 w-full ">
                <h3 className='gradient-title w-fit font-semibold xl:text-[40px] lg:text-4xl sm:text-3xl text-2xl max-md:max-w-sm max-sm:max-w-[300px]'>
                    {`Let’s Automate Your Success`}
                </h3>
                <p className='sm:text-base text-sm lg:max-w-2xl md:max-w-xl sm:max-w-sm max-w-[300px] '>
                    Join the future of work. Contact us today to schedule your free consultation and discover how automation can revolutionize your business.
                </p>
            </div>
            <div className="max-w-[620px] h-auto flex flex-col gap-3 justify-center items-center">
                <div className="flex flex-wrap md:gap-8 gap-5">
                    <div className="grid sm:max-w-[290px] w-full items-center gap-1.5 ">
                        <Label className="text-secondary text-base" htmlFor="name">Name</Label>
                        <Input type="text" id="name" className="h-[40px] border-image" />
                    </div>
                    <div className="grid sm:max-w-[290px] w-full items-center gap-1.5 ">
                        <Label className="text-secondary text-base" htmlFor="email">Email</Label>
                        <Input type="email" id="email" className="h-[40px] border-image" />
                    </div>

                    <div className="grid w-full gap-3">
                        <Label htmlFor="message">Your message</Label>
                        <Textarea placeholder="Type your message here." id="message" className="border-image min-h-[100px]" />
                    </div>

                    <div className="w-auto h-auto">
                        <Button className="gradient px-10 text-base py-4">Send</Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;