import React from "react";


const Footer = () => {
  return (
      <div className="px-0 md:px-10">
          <footer className="animate-fade-up bg-white border text-gray-600  py-8 mb-8 mt-10 rounded-none  shadow-none shadow-slate-400 hover:shadow-cyan-600 md:shadow-2xl md:rounded-full">
              <div className="container mx-auto text-center">
                  <p className="mb-4">
                      Designed & Developed by <span className="text-gray-900 hover:text-purple-500">Nethindu Hansaka</span>
                  </p>
                  <p className="text-sm">&copy; {new Date().getFullYear()} Nethindu Hansaka. All Rights Reserved.</p>
              </div>
          </footer>
      </div>
  );
};

export default Footer;
