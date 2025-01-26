import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-primary dark:bg-dark-secondary py-16 px-4 md:px-16">
      <section
        id="about"
        className="flex flex-col lg:flex-row justify-between items-center gap-12 text-center md:text-left text-dark-textgray dark:text-dark-textgray"
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
    <Image src="/images/phone.png" unoptimized alt="Phone" width={24} height={24} />
    <span className="font-medium">+91 9484489018</span>
  </a>
</div>
<div className="flex items-center gap-2">
<a
              href="https://www.google.com/maps/place/Surat,+Gujarat,+India"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline flex"
            >
    <Image src="/images/map.png" unoptimized alt="Phone" width={24} height={24}/>
    Surat, Gujarat, India
    </a>
</div>
<div className='flex gap-4 justify-start pl-2'>
<div className="flex items-center gap-2">
  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=milan.p9018@gmail.com" target="_blank" className="flex items-center">
    <Image src="/images/gmail.png" unoptimized alt="Phone" width={22} height={22} />
  </a>
</div>
<div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/milansojitra90/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
             <Image src="/images/linkedin.png"unoptimized  alt="LinkedIn" width={22} height={22} />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/milansojitra90/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:underline"
            >
              <Image src="/images/instagram.png" unoptimized alt="instagram" width={23} height={24} />
            </a>
          </div>
</div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
