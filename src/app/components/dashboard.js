'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { servicesData } from '../utils/alltype';
import Image from 'next/image';

const Dashboard = () => {
  const handleSetActive = (item) => {
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with id ${item.toLowerCase()} not found.`);
    }
  };
  const router = useRouter()
  return (
    <>
    <section   id="home" className="bg-[#dddddd] dark:bg-dark-primary font-sans pt-8">
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
       <div className='flex justify-center items-center gap-10 max-sm:flex-col'>
        <div>
          <Image src={'/images/milan.png'} alt='' width={400} height={400}/>
        </div>
      <div className='flex flex-col'>
      <motion.h1
          className="text-5xl md:text-6xl font-bold text-[#000000] dark:text-dark-textgray"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {`Hi, I'm Milan Sojitra`}
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-2xl max-w-lg text-dark-secondary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          A Frontend Developer specializing in React.js and Next.js
        </motion.p>
        <div className="mt-8 flex gap-4 mb-10">
          <motion.a
            className="px-6 text-nowrap py-3 bg-secondary text-white rounded-lg hover:bg-secondaryhover transition duration-300"
            whileHover={{ scale: 1.1 }}
            onClick={()=>handleSetActive('project')}
          >
            View My Work
          </motion.a>
          <motion.a
            onClick={()=>handleSetActive('Contact')}
            className="px-6 py-3 text-nowrap border border-secondary text-secondary rounded-lg hover:bg-secondaryhover hover:text-[#ffffff] transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            Contact Me
          </motion.a>
        </div>
      </div>
       </div>
      </section>

    </section >
    <div className='bg-dark-secondaryhover h-1 my-16 dark:bg-dark-secondary'/>
    <section id="myskills" className='bg-[#dddddd] dark:bg-dark-primary font-sans'>
    <h2 className="text-5xl font-bold mb-8 text-center dark:text-[#ffffff] text-[#000000]">My Skills</h2>
    <div className="flex flex-row flex-wrap justify-center gap-6">
  {[
    { src: '/images/html.png', label: 'HTML' },
    { src: '/images/css.png', label: 'CSS' },
    { src: '/images/js.png', label: 'JavaScript' },
    { src: '/images/react.png', label: 'React' },
    { src: '/images/nextjs1.png', label: 'Next.js' },
    { src: '/images/seo.png', label: 'SEO' },
  ].map((item, index) => (
    <div
      key={index}
      className="flex flex-col flex-wrap  border border-[#000000] dark:border-[#ffffff] justify-center items-center w-[150px] h-[150px] bg-gray-100 rounded-lg shadow-md"
    >
      <div className="w-[100px] h-[100px] flex justify-center items-center">
        <Image
          src={item.src}
          alt={item.label}
          width={100}
          height={50}
          className={`object-contain ${item?.label === 'HTML' ? 'h-[68px]' : ''}`}
        />
      </div>
      <p className="dark:text-[#ffffff] text-dark-primary mt-3 text-center font-medium text-sm">
        {item.label}
      </p>
    </div>
  ))}
</div>

<div className='bg-dark-secondaryhover h-1 my-16 dark:bg-dark-secondary'/>
    </section>
    <section id='education'  className=' w-full px-2 flex flex-col  items-center justify-center'>
      <h2 className=" text-center text-5xl font-bold text-dark-primary dark:text-dark-textgray"> Education</h2>
      <p className="text-lg mb-10 text-center text-dark-secondary">
      Here is an overview of my educational journey and achievements.
      </p>
      <div className="w-full max-w-[400px] items-center justify-center">
    <motion.div
      className="border border-secondary dark:border-dark-secondary bg-white dark:bg-dark-primary text-gray-800 dark:text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full flex flex-col justify-center items-center mb-4">
       <div className='flex justify-center items-center gap-2'>
        <Image src={'/images/degree.png'} width={20} height={40} alt='degree' className='w-8 pt-3 h-8' unoptimized/>
       <h3 className=" text-center text-nowrap text-2xl font-semibold mt-4 text-dark-primary dark:text-dark-textgray">Marwadi University</h3>
       </div>
        <p className="text-sm text-center text-dark-secondary dark:text-dark-textgray font-semibold">Bachelor of Engineering in Computer Engineering</p>
        <p className="text-sm text-dark-secondary dark:text-dark-textgray">Graduated: 2023</p>
      </div>
    </motion.div>
  </div>
    </section>
   <div className='bg-dark-secondaryhover h-1 my-16 dark:bg-dark-secondary'/>
    <section  id="services" className="min-h-screen flex flex-col items-center py-10 text-[#000000] dark:text-[#ffffff]">
      <h2 className="text-5xl font-bold mb-8">Our Services</h2>
      <p className="text-lg mb-10 max-w-2xl text-center text-dark-secondary">
        We offer a range of services to help your business succeed online. Explore our areas of expertise below.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-[5%]">
  {servicesData.map((service, index) => (
    <motion.div
      key={index}
      className="border border-secondary dark:bg-dark-primary text-gray-800 dark:text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="flex flex-col items-center mb-4">  
        <Image
          src={service.icon} 
          alt={`${service.title} icon`} 
          className="h-full w-full max-md:h-[100px]" 
          width={50}
          height={50}
          unoptimized
        />
        <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
      </div>
      <p className="text-sm">{service.description}</p>
    </motion.div>
  ))}
</div>

    </section >
    <div className='bg-dark-secondaryhover h-1 my-16 dark:bg-dark-secondary'/>
    <section id="project" className="py-16 px-4 md:px-16 dark:bg-dark-primary text-center text-[#000000] dark:text-dark-textgray">
  <h2 className="text-4xl font-bold">Professional Experience</h2>
  <p className="mt-4 mb-8 max-w-3xl mx-auto text-dark-secondary">
    As a frontend developer, I have worked on a variety of projects that demonstrate my skills in React, Next.js, and Tailwind CSS. Below are a few highlights of my recent work:
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      {
        title: "Len Admin",
        description: "Developed a dynamic admin panel with functionalities including creating, adding, filtering, and searching songs. Implemented bulk upload support via CSV files for efficient management of multiple songs, streamlining content administration.",
      },
      {
        title: "Softus Infotech Portfolio",
        description: "Designed and developed a professional portfolio for Softus Infotech, showcasing their services and projects with a clean, modern interface built on Next.js for fast loading times and excellent SEO optimization.",
      },
      {
        title: 'jewellary web App',
        description: 'A responsive jewelry website designed to showcase various jewelry products, allowing users to browse through collections, view product details, and add items to their cart. '
      },
      {
        title: 'Donation App',
        description: 'I created a donation website optimized for the Korea, integrating popular payment methods like KakaoPay, TossPay, CMS, card payments, NPay, and Payco. The platform includes digital signature functionality for secure transactions.'
      }
    ].map((project, index) => (
      <motion.div
        key={index}
        className="border border-primary dark:bg-primary p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-2xl font-semibold mb-2  underline text-[#000000]">{project?.title}</h3>
        <p className="text-[#534242]">{project?.description}</p>
      </motion.div>
    ))}
  </div>
</section>
<div className='bg-dark-secondaryhover h-1 my-16 dark:bg-dark-secondary'/>
    <section id="contact" className="py-16 px-4 md:px-16 text-center text-[#000000] dark:text-dark-textgray">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <p className="mt-4 mb-8 max-w-3xl mx-auto">
          Interested in working together? Feel free to reach out for any project or collaboration!
        </p>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-dark-primary focus:outline-none text-dark-textgray"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-dark-primary focus:outline-none text-dark-textgray"
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-lg bg-dark-secondary border border-dark-primary focus:outline-none text-dark-textgray"
            rows="4"
          ></textarea>
          <motion.button
            type="submit"
            className="w-full px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondaryhover transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
       </section>
       <section id="about" className="bg-dark-primary dark:bg-dark-secondary flex max-sm:flex-col justify-center items-center gap-12 py-16 px-4 md:px-16  text-center text-dark-textgray">
       <div>
       <h2 className="text-4xl font-bold ">About Me</h2>
        <p className="mt-4 max-w-3xl mx-auto text-start">
          I am a passionate frontend developer with experience in building modern web applications using React and Next.js. I focus on creating responsive and visually engaging user interfaces that provide a seamless user experience.
        </p>
       </div>
        <div className='flex flex-col gap-4 pb-12 dark:text-dark-textgray'>
       <div className='flex gap-1'>
          <Image src={"/images/phone.png"} alt='phone' width={20} height={20} className='w-6' unoptimized/>
          <p className=' text-nowrap font-medium'>+91 9484489018</p>
        </div>
        <div className='flex gap-1'>
  <Image src={"/images/github.png"} alt='GitHub' width={20} height={20} className='w-6' unoptimized/>
  <a href="https://github.com/Milansojitra9018" target="_blank" rel="noopener noreferrer" className=' font-medium'>
    https://github.com
  </a>
</div>
<div className='flex gap-1'>
  <Image src={"/images/linkedin.png"} alt='LinkedIn' width={20} height={20} className='w-6' unoptimized/>
  <a href="https://www.linkedin.com/in/milansojitra90/" target="_blank" rel="noopener noreferrer" className=' font-medium'>
    https://www.linkedin.com
  </a>
</div>

       </div>
      </section>
    </>
  );
}

export default Dashboard;


