import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            itaque eos debitis cumque eveniet nostrum iusto pariatur aut labore
            fugiat sed numquam ad, sunt laborum tenetur possimus cupiditate
            error est.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-2">COMPANY</p>
          <hr />
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>HOME</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-2">GET IN TOUCH</p>
          <hr />
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-1234567890</li>
            <li>samirtripura7@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ LiveYoung.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
