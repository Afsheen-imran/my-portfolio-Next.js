// components/About.js
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div 
      id="about" 
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('https://i.pinimg.com/originals/cf/bc/37/cfbc370e45aee5035e26b4f2d3f24335.gif') " }}
    >
      <section className="text-rose-600 body-font h-full">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center h-full">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
              alt="hero"
              src={require("../../../src/app/public/Assests/my-image.jpeg")}
              width={300}
              height={400}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl mt-4 text-3xl mb-2 font-medium text-rose-500">
              About Me
            </h1>
            <p className="mb-2 leading-relaxed text-red-500 text-justify">
              I’m a frontend web developer, social media marketer, Shopify store specialist, content writer, and graphic designer with over 2 years of experience. I specialize in creating responsive websites using HTML, CSS, JavaScript, TypeScript, React, and Next.js, and I help businesses grow through effective social media campaigns and optimized Shopify stores. My skills in content writing and design allow me to deliver creative, engaging solutions that connect with audiences and elevate brands. Let’s work together to bring your vision to life!
            </p>
            <p className="mb-5 leading-relaxed text-red-500 text-justify">
              With a comprehensive skill set and a commitment to delivering high-quality work, I am here to help businesses and individuals transform their ideas into reality. Let’s connect and bring your vision to life!
            </p>
            <div className="flex justify-center">
              <a href="https://www.linkedin.com/in/afsheen-imran-b623a42a2/" target="_blank" rel="noopener noreferrer">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-5 focus:outline flex-none hover:bg-red-500 rounded text-sm">
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
