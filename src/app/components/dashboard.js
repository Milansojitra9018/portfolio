"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { servicesData, projectData, technologyData } from "../utils/alltype";
import Image from "next/image";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [role, setRole] = useState('Frontend Developer');
  const router = useRouter();

  useEffect(() => {
    const roles = ['Frontend Developer', 'Web Designer'];
    let index = 0;

    const interval = setInterval(() => {
      setRole(roles[index]);
      index = (index + 1) % roles.length;
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  const handleSetActive = (item) => {
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn(`Section with id ${item.toLowerCase()} not found.`);
    }
  };


  return (
    <>
      <section
        id="home"
        className="bg-[#F9FAFB] dark:bg-dark-primary font-sans pt-8"
      >
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
          <div className="flex justify-center items-center gap-10 max-sm:flex-col">
            <div>
              <Image
                src={"/images/milan.png"}
                alt=""
                width={400}
                height={400}
                className="rounded-full shadow-lg border-2 border-primary dark:border-dark-primary"
              />
            </div>
            <div className="flex flex-col">
              <motion.h1
                className="text-4xl max-sm:text-3xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400   via-pink-500 to-purple-400"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {`Hi, I'm Milan Sojitra`}
              </motion.h1>
              <motion.h1
  className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-500 to-teal-500"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {role}
</motion.h1>


              <motion.p
                className="pt-2 text-lg md:text-2xl max-w-lg text-dark-secondary dark:text-dark-textgray mb-8"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
 specializing in React.js and Next.js to create dynamic, user-friendly websites
              </motion.p>
              <div className="mt-8 flex max-sm:gap-4 gap-6 mb-10">
                <motion.a
                  className="max-sm:px-3 px-6 py-3 bg-secondary text-nowrap text-white rounded-lg hover:bg-secondaryhover transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleSetActive("project")}
                >
                  View My Work
                </motion.a>
                <motion.a
                  className="max-sm:px-3 px-6 py-3 text-secondary border text-nowrap border-secondary rounded-lg hover:bg-secondaryhover hover:text-white transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => handleSetActive("contact")}
                >
                  Contact Me
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-gradient-to-r from-[#029FE4] to-[#BB5AE9] h-[3px] rounded-lg shadow-lg dark:from-[#BB5AE9] dark:to-[#029FE4] transition-all" />

      <section
        id="myskills"
        className="bg-white dark:bg-dark-primary font-sans py-16"
      >
        <h2 className="text-4xl max-sm:text-3xl font-bold text-center text-gray-800 dark:text-dark-textgray underline decoration-decoration dark:decoration-dark-decoration mb-8">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {technologyData.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col items-center max-sm:w-[120px] max-sm:h-[120px] w-[150px] h-[140px] bg-gray-100 rounded-lg shadow-lg dark:bg-dark-secondary text-center border-2 border-textgray dark:border-dark-textgray transition-all"
            >
              <Image
                src={item.src}
                alt={item.label}
                width={100}
                height={50}
                className={`object-contain ${
                  item?.label === "HTML" ? "h-[55px] mt-4" : "h-20"
                } ${
                  item?.label === "SEO" || item?.label === "Next.js"
                    ? "dark:bg-dark-secondary p-2"
                    : ""
                }`}
              />
              <p
                className={`text-dark-primary dark:text-dark-textgray mt-3 text-sm font-medium ${
                  item?.label === "HTML" ? "pt-2" : ""
                }`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full bg-gradient-to-r from-[#029FE4] to-[#BB5AE9] h-[3px] rounded-lg shadow-lg dark:from-[#BB5AE9] dark:to-[#029FE4] transition-all" />

      <section
        id="education"
        className="w-full flex flex-col items-center justify-center py-16 bg-white dark:bg-dark-primary px-2"
      >
        <h2 className="text-4xl max-sm:text-3xl font-bold text-center text-gray-800 dark:text-dark-textgray underline decoration-decoration dark:decoration-dark-decoration mb-8">
          Education
        </h2>
        <p className="text-lg text-center text-dark-secondary dark:text-dark-textgray mb-10">
          Here is an overview of my educational journey and achievements.
        </p>
        <div className="w-full max-w-[400px] items-center justify-center">
          <div className=" border border-secondary dark:border-dark-secondary bg-white dark:bg-dark-secondary text-dark-primary dark:text-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <div className="flex justify-center items-center gap-2 mb-4 ">
              <Image
                src={"/images/degree.png"}
                width={20}
                height={40}
                alt="degree"
                className="w-8 pt-3 h-8"
                unoptimized
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-textgray pt-2">
                Marwadi University
              </h3>
            </div>
            <p className="text-sm max-sm:text-center text-start text-dark-secondary dark:text-dark-textgray font-semibold">
              Bachelor of Engineering in Computer Engineering
            </p>
            <p className="text-sm max-sm:text-center text-start text-dark-secondary dark:text-dark-textgray">
              Graduated: 2023
            </p>
          </div>
        </div>
      </section>

      <div className="w-full bg-gradient-to-r from-[#029FE4] to-[#BB5AE9] h-[3px] rounded-lg shadow-lg dark:from-[#BB5AE9] dark:to-[#029FE4] transition-all" />

      <section
        id="services"
        className="min-h-screen py-16 px-6 text-center bg-[#F9FAFB] dark:bg-dark-primary"
      >
        <h2 className="text-4xl max-sm:text-3xl font-bold text-gray-800 dark:text-dark-textgray underline decoration-decoration dark:decoration-dark-decoration mb-8">
          Our Services
        </h2>
        <p className="text-lg text-dark-secondary dark:text-dark-textgray mb-10 max-w-2xl mx-auto">
          We offer a range of services to help your business succeed online.
          Explore our areas of expertise below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-[5%]">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="border border-secondary dark:border-dark-secondary bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center mb-4">
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={100}
                  height={100}
                  className="object-contain w-full"
                  unoptimized
                />
                <h3 className="text-2xl font-semibold mt-4  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-500 to-teal-500">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-dark-secondary dark:text-dark-textgray">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="w-full bg-gradient-to-r from-[#029FE4] to-[#BB5AE9] h-[3px] rounded-lg shadow-lg dark:from-[#BB5AE9] dark:to-[#029FE4] transition-all" />

      <section
        id="project"
        className="py-16 px-6 text-center bg-white dark:bg-dark-primary"
      >
        <h2 className="text-4xl max-sm:text-3xl font-bold text-gray-800 dark:text-dark-textgray underline decoration-decoration dark:decoration-dark-decoration mb-8">
          Professional Experience
        </h2>
        <p className="mt-4 mb-8 max-w-3xl mx-auto text-lg text-dark-secondary dark:text-dark-textgray">
          As a frontend developer, I have worked on a variety of projects that
          demonstrate my skills in React, Next.js, and Tailwind CSS. Below are a
          few highlights of my recent work:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="relative border border-primary dark:border-dark-secondary bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-lg transition-all duration-500 hover:scale-105 transform hover:shadow-xl  text-white"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-secondaryhover/50 opacity-20 rounded-lg"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-500 to-teal-500">
                  {project?.title}
                </h3>
                <p className="text-lg text-dark-secondary dark:text-dark-textgray">
                  {project?.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="w-full bg-gradient-to-r from-[#029FE4] to-[#BB5AE9] h-[3px] rounded-lg shadow-lg dark:from-[#BB5AE9] dark:to-[#029FE4] transition-all" />

      <section
        id="contact"
        className="py-16 px-6 text-center bg-white dark:bg-dark-primary"
      >
        <h2 className="text-4xl max-sm:text-3xl font-bold text-gray-800 dark:text-dark-textgray underline decoration-decoration dark:decoration-dark-decoration mb-8">
          Contact Me
        </h2>
        <p className="text-lg text-dark-secondary dark:text-dark-textgray mb-10">{`Feel free to reach out if you'd like to discuss a project or just want to connect!`}</p>
        <div className="max-w-xl mx-auto">
          <form
            action="mailto:milan@example.com"
            method="post"
            encType="multipart/form-data"
          >
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-2 border border-textgray dark:border-dark-textgray rounded-lg shadow-lg bg-white dark:bg-dark-secondary text-dark-primary dark:text-white focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border border-textgray dark:border-dark-textgray rounded-lg shadow-lg bg-white dark:bg-dark-secondary text-dark-primary dark:text-white focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 border border-textgray dark:border-dark-textgray rounded-lg shadow-lg bg-white dark:bg-dark-secondary text-dark-primary dark:text-white focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondaryhover transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
