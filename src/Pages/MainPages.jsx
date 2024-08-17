import React from 'react';
import { FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
const Medium = "https://medium.com/@nethinduhansaka";
const Linkln = "http://www.linkedin.com/in/nethinduhansaka-a752072b4";
const GitHub = "https://github.com/nethinduhansaka-dev";
const BgImage = "./src/assets/bg.png"

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    {children}
  </div>
);

export default function MainPages() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    >
      <div className="animate-fade-right h-[90vh] w-[95vw] md:h-[80vh] md:w-[80vw] rounded-3xl bg-white/90 shadow-2xl ring-1 ring-black/5 p-8 overflow-auto   delay-[300ms] duration-[600ms] taos:translate-x-[200px] taos:opacity-0 hover:shadow-indigo-500" data-taos-offset="400">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Nethindu Hansaka</h1>
          <p className="text-xl ">Software Engineering Student at Open University Sri Lanka👨‍🎓💻</p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Section title="About Me">
              <p>A passionate software engineering student with a keen interest in Web development. Aspiring to become a full-stack developer specializing in AI-driven web applications, with a long-term goal of leading innovative tech projects that make a positive impact on society.</p>
            </Section>

            <Section title="Education">
              <p>Open University Sri Lanka</p>
              <p>Bachelor of Software Engineering (Honours)</p>
              <p>Expected Graduation: 2028</p>
            </Section>

            
          </div>

          <div>
            <Section title="Projects">
              <div className="mb-4">
                <h3 className="font-semibold">Project 1</h3>
                <p>About
                Admin Dashboard Application is a front end project developed for modern web development tools and e-commerce platform.<br /> <b>Technologies used:</b> React, Tailwind CSS</p>
                <a href='https://admin-dashboard-application-ten.vercel.app/' className='text-blue-500 hover:underline pointer flex gap-2 '>View<FaExternalLinkAlt /></a>
              </div>
              
            </Section>

            <Section title="Experience">
              <p>Part-time Web Developer at Initezz Technologies - 2024</p>
            </Section>

            <Section title="Extracurricular">
              <p>Member of University SEDS OUSL</p>
              <p>Media Team - Web Developer - 2024</p>
            </Section>
          </div>
        </div>

        <footer className="mt-8 text-center">
          <div className="flex justify-center space-x-4">
            <a href={GitHub} target="_blank" className="text-gray-600 hover:text-black">
              <FaGithub size={24} />
            </a>
            <a href={Linkln} target="_blank" className="text-gray-600 hover:text-blue-600">
              <FaLinkedin size={24} />
            </a>
           
            <a href={Medium} target="_blank" className="text-gray-600 hover:text-black">
              <FaMedium size={24} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}