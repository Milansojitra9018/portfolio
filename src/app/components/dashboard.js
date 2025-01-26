"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { technologyData, projectData, servicesData   } from "../utils/alltype";

const Dashboard = () => {
  const [role, setRole] = useState("Frontend Developer");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError({});

    const emailData = {
      from_name: formData?.name,
      from_email: formData?.email,
      message: formData?.message,
    };

    let hasError = false;
    const newError = {};

    // Validate name
    if (!formData.name) {
      newError.name = "Name is required!";
      hasError = true;
    }

    // Validate email
    if (!formData.email) {
      newError.email = "Email is required!";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newError.email = "Please enter a valid email address!";
      hasError = true;
    }

    // Validate message
    if (!formData.message) {
      newError.message = "Message is required!";
      hasError = true;
    }

    if (hasError) {
      setError(newError);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_xjo9tqp",
          template_id: "template_pwnfv5m",
          user_id: "8Lo5rvY9ncr2H8IIm",
          template_params: emailData,
        }),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setError({});
        alert("Message sent successfully!");
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      setError({ general: "Something went wrong. Please try again later." });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const roles = ["Frontend Developer", "Web Designer"];
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
        className="bg-[#F9FAFB] dark:bg-dark-primary font-sans pt-4 "
      >
        <div className="min-h-screen flex flex-col justify-center items-center text-center px-12 md:px-4">
          <div className="flex justify-center items-center gap-10 max-sm:flex-col">
            <div>
              <Image
                src={"/images/milan.png"}
                alt=""
                width={400}
                height={400}
                unoptimized
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
        className="w-full flex flex-col items-center justify-center max-md:py-8 py-12 bg-white dark:bg-dark-primary px-2"
      >
       <div className="max-lg:flex-col flex justify-between max-md:gap-10 gap-16">
       <div className='flex flex-col justify-center items-center'>
       <h2 className="text-4xl max-sm:text-3xl font-bold text-center text-gray-800 dark:text-dark-textgray underline decoration-decoration dark:decoration-dark-decoration max-md:mb-2 mb-4">
          Education
        </h2>
        <p className="text-lg text-center text-dark-secondary dark:text-dark-textgray mb-4 max-md:mb-2">
          Here is an overview of my educational journey and achievements.
        </p>
        <div className="w-full max-w-[400px] items-center justify-center">
          <div className=" border-2 border-secondary  bg-white dark:bg-dark-secondary text-dark-primary dark:text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 p-4">
          <div className="w-full flex justify-end">
  <div className="p-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-teal-500 rounded-lg">
    <p className="font-medium  bg-white dark:bg-dark-secondary text-dark-primary dark:text-white p-1 rounded-lg">
      2019 - 2023
    </p>
  </div>
</div>

            <div className="flex justify-center items-center gap-2 ">
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
          </div>
        </div>
       </div>
       <div className="max-lg:hidden border dark:border-dark-textgray border-dark-primary"/>
       <div className="flex flex-col justify-center items-center">
       <h2 className="text-4xl max-sm:text-3xl font-bold text-center text-gray-800 dark:text-dark-textgray underline decoration-decoration dark:decoration-dark-decoration max-md:mb-2 mb-4">
          work
        </h2>
        <p className="text-lg text-center text-dark-secondary dark:text-dark-textgray mb-4 max-md:mb-2">
        Here is an overview of my professional journey and experiences.
        </p>
        <div className="w-full max-w-[400px] items-center justify-center">
          <div className=" border-2 border-secondary bg-white dark:bg-dark-secondary text-dark-primary dark:text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 p-4">
          <div className="w-full flex justify-end">
  <div className="p-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-teal-500 rounded-lg">
    <p className="font-medium bg-white dark:bg-dark-secondary  text-dark-primary dark:text-white p-1 rounded-lg">
      2023 - present
    </p>
  </div>
</div>
            <div className="flex justify-center items-center ">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-textgray pt-2">
                Frontend Developer
              </h3>
            </div>
            <p className="text-sm max-sm:text-center text-start text-dark-secondary dark:text-dark-textgray font-semibold">
            Focused on building responsive and user-friendly web applications
            </p>
          </div>
        </div>
        </div>
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
              className="relative border-2 border-primary  bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-lg transition-all duration-500 hover:scale-105 transform hover:shadow-xl  text-white"
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
              className="border-2 border-secondary  bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
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
      id="contact"
      className="py-16 px-6 text-center bg-white dark:bg-dark-primary"
    >
      <h2 className="text-4xl max-sm:text-3xl font-bold text-gray-800 dark:text-dark-textgray underline decoration-decoration dark:decoration-dark-decoration mb-8">
        Contact Me
      </h2>
      <p className="text-lg text-dark-secondary dark:text-dark-textgray mb-10">{`Feel free to reach out if you'd like to discuss a project or just want to connect!`}</p>
      <div className="max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-textgray dark:border-dark-textgray rounded-lg shadow-lg bg-white dark:bg-dark-secondary text-dark-primary dark:text-white focus:outline-none"
            />
            {error.name && (
              <p className="text-red-500 text-sm mt-1">{error.name}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Your Email"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-textgray dark:border-dark-textgray rounded-lg shadow-lg bg-white dark:bg-dark-secondary text-dark-primary dark:text-white focus:outline-none"
            />
            {error.email && (
              <p className="text-red-500 text-sm mt-1">{error.email}</p>
            )}
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              placeholder="Your Message"
              onChange={handleChange}
              className="w-full px-4 py-2 border border-textgray dark:border-dark-textgray rounded-lg shadow-lg bg-white dark:bg-dark-secondary text-dark-primary dark:text-white focus:outline-none"
            />
            {error.message && (
              <p className="text-red-500 text-sm mt-1">{error.message}</p>
            )}
          </div>
          {error.general && (
            <div className="mb-4 text-red-500">
              <p>{error.general}</p>
            </div>
          )}
          <div className="mb-4">
            <button
              type="submit"
              disabled={isLoading}
              className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondaryhover transition duration-300"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
    </>
  );
};

export default Dashboard;
