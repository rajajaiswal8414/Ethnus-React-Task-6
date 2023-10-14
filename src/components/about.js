import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Sneha Agarwal, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                Following my completion of secondary education, I embarked on a journey to cultivate my passion for programming. 
                This led me to pursue a Bachelor's degree in Computer Science at VIT College, where I focused on Information Technology 
                to deepen my understanding of programming. Presently, I am in the final year of my academic journey.
                What captivates me most about programming is the inherent problem-solving nature of the discipline. 
                There's an unparalleled sense of accomplishment when I unravel complex challenges and arrive at viable solutions. 
                As I stand on the cusp of transitioning into the professional world, I eagerly seek an opportunity to apply my 
                skills and knowledge as an intern.Beyond the realm of coding, I find joy in painting, dancing, 
                immersing myself in movies, and cherishing quality time with my family. 
                I possess an insatiable curiosity and relish the process of acquiring new knowledge and skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;