import React from "react";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="mx-5 bg-transparent py-16 h-[400px] flex justify-center items-center "
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[48px] font-bold text-center mb-8 text-text-soft">
          About Us
        </h2>
        <p className="text-[18px] text-center text-text-soft leading-relaxed max-w-3xl mx-auto mb-12">
          At <span className="font-bold">Pixel Vision Tech</span>, we believe in
          the power of creativity, innovation, and technology to shape the
          future. From mesmerizing 3D and 2D animations to cutting-edge UI/UX
          design and custom web & app development, we bring ideas to life
          through unique digital experiences.
        </p>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Our Vision</h3>
            <p className="text-gray-600">
              To push the boundaries of design and technology, crafting
              solutions that not only meet but exceed client expectations. Our
              goal is to create visual experiences that captivate, inspire, and
              engage.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Expertise
            </h3>
            <p className="text-gray-600">
              From sleek, modern interfaces and seamless web experiences to
              immersive animations and dynamic branding, we deliver a
              comprehensive range of digital services. Whether it's creating a
              motion graphic that tells a story or building a robust app that
              solves real-world problems, we do it all with passion and
              precision.
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutUs;
