import React from 'react';
const BgImage = "/assets/bg.png"

export default function Skill() {
  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-center bg-cover bg-center "
        style={{
          backgroundImage:  `url(${BgImage})` ,
        }}
      >
        <div className="animate-fade-right h-[90vh] w-[95vw] md:h-[80vh] md:w-[80vw] rounded-3xl bg-white/90 shadow-2xl ring-1 ring-black/5 p-8 overflow-auto hover:shadow-fuchsia-500">
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold">My Skills</h1>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Web Development */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>HTML5, CSS3 [Tailwind, Bootstrap], JavaScript</li>
                <li>React.js, Next.js</li>
                <li>Node.js, Express.js</li>
                <li>REST APIs, GraphQL</li>
                <li>MongoDB, MySQL</li>
              </ul>
            </div>

            {/* Mobile Application Development */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Mobile Application Development</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>React Native</li>
                <li>Flutter</li>
                <li>Firebase</li>
              </ul>
            </div>

            {/* UI/UX Design */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">UI/UX Design</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Figma</li>
                <li>Adobe XD</li>
                <li>Canva</li>
                <li>Wireframing & Prototyping</li>
                <li>User Research & Usability Testing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
