import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className=" flex flex-col sm:flex-row justify-between gap-5 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img className="w-12 m-auto mb-5" src={assets.exchange} alt="" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src={assets.quality} alt="" />
        <p className='font-semibold'>7 Days return Policy</p>
        <p className='text-gray-400'>We provide 7 days free return policy</p>
      </div>
      <div>
        <img className="w-12 m-auto mb-5" src={assets.support} alt="" />
        <p className='font-semibold'>Best Customer support</p>
        <p className='text-gray-400'>We provide best customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
