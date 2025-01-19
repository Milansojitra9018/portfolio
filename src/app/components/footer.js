import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-primary dark:bg-dark-secondary py-16 px-4 md:px-16">
      <section
        id="about"
        className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left text-dark-textgray dark:text-dark-textgray"
      >
        <div className="max-w-lg">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p>
            I am a passionate frontend developer with experience in building modern web applications using React and Next.js. I focus on creating responsive and visually engaging user interfaces that provide a seamless user experience.
          </p>
        </div>
        <div className="flex flex-col gap-6">
        <div className="flex items-center gap-2">
  <a href="tel:+919484489018" className="flex items-center">
    <Image src="/images/phone.png" alt="Phone" width={24} height={24} />
    <span className="font-medium pl-1">+91 9484489018</span>
  </a>
</div>

          <div className="flex items-center gap-2">
            <Image src="/images/github.png" alt="GitHub" width={24} height={24} />
            <a
              href="https://github.com/Milansojitra9018"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              github.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/images/linkedin.png" alt="LinkedIn" width={24} height={24} />
            <a
              href="https://www.linkedin.com/in/milansojitra90/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              linkedin.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>Address:</span>
            <a
              href="https://www.google.com/maps/place/Surat,+Gujarat,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline"
            >
              Surat, Gujarat, India
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
