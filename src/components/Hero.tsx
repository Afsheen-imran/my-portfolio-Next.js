"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center animate-bg max-h-full"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/originals/cf/bc/37/cfbc370e45aee5035e26b4f2d3f24335.gif')",
        }}
      />
      <section className="relative z-10 text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-900">
              I am Afsheen
            </h1>
            <div className="w-[100px] h-[2px] bg-blue-700 mb-4"></div>
            <p className="mb-9 leading-relaxed text-red-500 font-semibold ml-30 text-justify">
              Frontend Web Developer, Passionate Content Creator, Graphic
              Designer, and Social Media Marketer. Certified content writer
              with nearly two years of experience. Dedicated to enhancing 
              brand visibility and engagement. Skilled graphic designer crafting
              captivating visuals. Strategizing impactful social media
              campaigns. Proficient WordPress web developer ensuring seamless
              user experiences. Professionally custom-designed pins for
              Pinterest.
            </p>
            <div className="flex justify-center">
              <Link href="/contact">
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-500 rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto w-[15rem]"
              alt="My Image"
              width={1200}
              height={1200}
              src={require("../../src/app/public/Assests/my-image3.jpeg")}
            />
          </div>
        </div>
      </section>

      {/* <style jsx>{`
        @keyframes bgAnimation {
          0% { background-position: 0% 0%; }
          50% { background-position: 100% 0%; }
          100% { background-position: 0% 0%; }
        }

        .animate-bg {
          animation: bgAnimation 15s linear infinite;
        }
      `}</style> */}
    </div>
  );
};

export default Hero;
