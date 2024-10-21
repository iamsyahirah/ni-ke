import React from "react";
import { offer } from "../assets/images";
import { Button } from "../components";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1">
                <img src={offer} width={773}
                    heigth={687}
                    className="object-contain w-full"
                />
            </div>
            <div className="flex flex-1 flex-col">
                <h2 className="text-4xl capitalize font-palanquin font-bold lg:max-w-lg">
                    <span className="text-coral-red"> Special</span> Offer
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Embark on a shopping journey that redefines your experience with our
                    top-of-the-line products. Experience the pinnacle of quality, innovation and
                    style at unbeatable prices.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fulfill your every unique desires, surpassing the loftiest expectations. Your journey with us is now both exciting and excruciating.</p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <Button label='Shop Now' iconURL={arrowRight} />
                    <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" />
                </div>
            </div>
        </section>
    )
};

export default SpecialOffer;
