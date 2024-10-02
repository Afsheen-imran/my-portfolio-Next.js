import React from "react";


const Skill = () => {
  return (
    <div id="skills" className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://i.pinimg.com/originals/cf/bc/37/cfbc370e45aee5035e26b4f2d3f24335.gif')" }}>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-bold text-yellow-500">
            My Skills
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 -mt-[5rem]">
          {[
            { name: "HTML", level: "100%" },
            { name: "CSS", level: "95%" },
            { name: "JavaScript/TypeScript", level: "90%" },
            { name: "Graphic Designing", level: "80%" },
            { name: "Social Media Marketing", level: "95%" },
            { name: "Content Writing", level: "60%" },
          ].map(skill => (
            <div key={skill.name} className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
                    
                  </div>
                  <h2 className="text-yellow-500 text-lg title-font font-medium">
                    {skill.name}
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-gray-300 rounded-xl">
                    <div 
                      className="absolute bg-blue-500 h-1 rounded-xl" 
                      style={{ width: skill.level }} 
                    />
                  </div>
                  <p className="font-bold text-yellow-500 text-right">{skill.level}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
