import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 boder-t">
        <Title text1={"CONTACT"} text2={"US"}></Title>
      </div>
      <div className=" my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={assets.contact} alt="" />

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-gray-600">Our Store</p>
          <p className="text-gray-500">
            46673 Near Bus Station <br /> Suit 350, Tripura
          </p>
          <p className="text-gray-500">
            Phone Number:1234567890 <br /> Email Id: abc@gamil.com{" "}
          </p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
