import React from "react";

const Footer = () => {
  return (
    <>
      {/* footer */}
      <footer className="mx-5 my-2 rounded-3xl bg-black text-white py-8">
        <div className="container mx-auto flex flex-col items-center">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter">Hello</i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
