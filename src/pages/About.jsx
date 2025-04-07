import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"}></Title>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about} alt="" />
        <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi vel
            atque explicabo ipsum quod itaque corporis commodi dicta beatae
            voluptatibus. Consequatur, dolorum eius id illo accusamus recusandae
            fugiat maiores enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae a
            quibusdam labore consectetur accusantium ut beatae id cupiditate!
            Facilis, ipsum! Illo optio odit ratione sapiente excepturi minima
            eveniet numquam mollitia!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque iusto
            molestias necessitatibus enim expedita, obcaecati aliquid debitis
            aliquam modi qui, consequuntur nostrum delectus fugit magnam
            doloribus temporibus, culpa esse eius?
          </p>
        </div>
      </div>

      <div className=" text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"}></Title>
      </div>

      <div className="flex flex-col md:flex-row text-sm md-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality stands.
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenien:</b>
          <p className="text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.{" "}
          </p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exectional Customer Service:</b>
          <p className="text-gray-600">
            {" "}
            Our team of dedicated professionals is here to take care of the
            Customers
          </p>
        </div>
      </div>

      <div className="mt-20">
        <NewsletterBox />
      </div>
    </div>
  );
}

export default About;
