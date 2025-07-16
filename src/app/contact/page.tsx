import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

const ContactPage = () => {
    return (
        <div className="px-8 md:py-20 sm:py-14 py-7 w-full h-auto flex gap-16 flex-col ">
            <Heading title="Let’s Start Planning" />
            <div className=" h-auto flex flex-col gap-4 w-full ">
                <h3 className='font-semibold sm:text-2xl text-xl'>
                    {`Let’s Automate Your Success`}
                </h3>
                <p className='sm:text-base text-sm'>
                    Join the future of work. Contact us today to schedule your free consultation and discover how automation can revolutionize your business.
                </p>
            </div>
            <div className="max-w-2xl h-auto flex flex-col gap-3 justify-center items-center">
                <div className="flex flex-wrap gap-8 ">
                    <div className="grid min-w-xs items-center gap-1.5 ">
                        <Label className="text-secondary text-base" htmlFor="name">Name</Label>
                        <Input type="text" id="name" className="h-[40px] border-image" />
                    </div>
                    <div className="grid min-w-xs items-center gap-1.5 ">
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