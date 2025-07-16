import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const StoriesCarousel = () => {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex flex-col justify-center gap-4 ">
                                    <h3 className='gradient-title w-fit font-semibold xl:text-[40px] lg:text-4xl sm:text-3xl text-2xl max-md:max-w-sm max-sm:max-w-[300px]'>
                                        HR Manager, TechCorp
                                    </h3>
                                    <p className='sm:text-base text-sm lg:max-w-2xl md:max-w-xl sm:max-w-sm max-w-[300px] '>
                                        "Thanks to [Your Business Automation Company Name], our onboarding time dropped by 60%. The automation is seamless and reliable!"
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}


export default StoriesCarousel;