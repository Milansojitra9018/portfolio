"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { technologyData, projectData, servicesData } from "../utils/alltype";

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
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
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
        }
      );

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setError({});
        alert("Thank you for reaching out!😊");
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
        className="bg-[#F9FAFB] dark:bg-dark-primary font-sans max-md:pt-10 max-md:pb-16 py-28"
      >
        <div className="px-4 flex flex-col items-center text-center">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            {/* Text Section */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <motion.h1
                className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-pink-500 to-purple-400"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {`Hi, I'm Milan Sojitra`}
              </motion.h1>

              <motion.h2
                className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-yellow-500 to-teal-500 mt-3"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {role}
              </motion.h2>

              <motion.p
                className="pt-4 text-lg md:text-xl text-dark-secondary dark:text-dark-textgray max-w-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Specializing in React.js and Next.js to create dynamic,
                user-friendly websites.
              </motion.p>

              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.a
                  className="px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-300 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleSetActive("project")}
                >
                  View My Work
                </motion.a>
                <motion.a
                  className="px-6 py-3 border border-secondary text-secondary rounded-lg hover:bg-secondaryhover hover:text-white transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleSetActive("contact")}
                >
                  Contact Me
                </motion.a>
              </div>
            </div>

            {/* Image Section */}
            <div className="relative p-[3px] bg-gradient-to-r from-[#FDC830] to-[#F37335] rounded-full shadow-lg">
              <Image
                src="/images/milan.jpg"
                alt="Milan Sojitra"
                width={300}
                height={300}
                className="rounded-full object-cover"
                unoptimized
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-gradient-to-r from-[#FDC830] to-[#F37335] h-[2px] rounded-lg shadow-lg dark:from-[#F37335] dark:to-[#FDC830] transition-all" />

      <section
        id="myskills"
        className="bg-white dark:bg-dark-primary font-sans py-16"
      >
        <h2 className="text-4xl max-sm:text-3xl font-bold text-center text-gray-800 dark:text-dark-textgray underline decoration-decoration dark:decoration-dark-decoration mb-8">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-6 px-5">
          {technologyData.map((item, index) => (
            <div key={index} className="h-full">
              <div className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-yellow-500 to-teal-500">
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className=" flex flex-col items-center max-sm:w-[120px] hover:shadow-[0_0_100px_rgba(253,200,48,0.7)] max-sm:h-[120px] w-[150px] h-[140px] bg-gray-100 rounded-lg shadow-lg dark:bg-dark-secondary text-center  hover:border-2 hover:border-primary transition-all"
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={100}
                    height={50}
                    loading="lazy"
                    className={`object-contain ${
                      item?.label === "HTML" || item?.label === "TypeScript"
                        ? "h-[55px] mt-4"
                        : "h-20"
                    } ${
                      item?.label === "SEO" || item?.label === "Next.js" || item?.label === "JavaScript"
                        ? "dark:bg-dark-secondary p-2"
                        : ""
                    }`}
                  />
                  <p
                    className={`text-dark-primary dark:text-dark-textgray mt-3 text-sm font-medium ${
                      item?.label === "HTML" || item?.label === "TypeScript"
                        ? "pt-2"
                        : ""
                    }`}
                  >
                    {item.label}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full bg-gradient-to-r from-[#FDC830] to-[#F37335]  h-[2px] rounded-lg shadow-lg  transition-all" />

      <section
        id="education"
        className="w-full flex flex-col items-center justify-center max-md:py-8 py-12 bg-white dark:bg-dark-primary px-2"
      >
        <div className="max-lg:flex-col flex justify-between max-md:gap-10 gap-16">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl max-sm:text-3xl font-bold text-center text-gray-800 dark:text-dark-textgray underline decoration-decoration dark:decoration-dark-decoration max-md:mb-2 mb-4">
              Education
            </h2>
            <p className="text-lg text-center text-dark-secondary dark:text-dark-textgray mb-4 max-md:mb-2">
              Here is an overview of my educational journey and achievements.
            </p>
            <div className="w-full max-w-[400px] items-center justify-center p-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-teal-500 rounded-lg">
              <div className="hover:border-2 hover:border-secondary  hover:shadow-[0_0_100px_rgba(253,200,48,0.7)] bg-white dark:bg-dark-secondary text-dark-primary dark:text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 p-4">
                <div className="w-full flex justify-end">
                  <div className="p-[2px]  rounded-lg">
                    <p className="font-medium  bg-white dark:bg-dark-secondary  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-primary  to-teal-500 p-1 rounded-lg">
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
                    loading="lazy"
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
          <div className="max-lg:hidden border dark:border-dark-textgray border-dark-primary" />
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-4xl max-sm:text-3xl font-bold text-center text-gray-800 dark:text-dark-textgray underline decoration-decoration dark:decoration-dark-decoration max-md:mb-2 mb-4">
              work
            </h2>
            <p className="text-lg text-center text-dark-secondary dark:text-dark-textgray mb-4 max-md:mb-2">
              Here is an overview of my professional journey and experiences.
            </p>
            <div className="w-full max-w-[400px] items-center justify-center p-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-teal-500 rounded-lg">
              <div className="hover:border-2 hover:shadow-[0_0_100px_rgba(253,200,48,0.7)] hover:border-secondary bg-white dark:bg-dark-secondary text-dark-primary dark:text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 p-4">
                <div className="w-full flex justify-end">
                  <div className="p-[2px]  rounded-lg">
                    <p className="font-medium bg-white dark:bg-dark-secondary   bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-primary to-teal-500 p-1 rounded-lg">
                      2023 - present
                    </p>
                  </div>
                </div>
                <div className="flex justify-center gap-2 items-center ">
                  <Image
                    src={"/images/laptop.png"}
                    width={20}
                    height={40}
                    alt="degree"
                    loading="lazy"
                    className="w-8 pt-3 h-8"
                    unoptimized
                  />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-textgray pt-2">
                    Frontend Developer
                  </h3>
                </div>
                <p className="text-sm max-sm:text-center text-start text-dark-secondary dark:text-dark-textgray font-semibold">
                  Focused on building responsive and user-friendly web
                  applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full bg-gradient-to-r from-[#FDC830] to-[#F37335]  h-[2px] rounded-lg shadow-lg transition-all" />

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
            <div key={index} className="flex h-full">
              <div className="p-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-teal-500 rounded-lg w-full h-full">
                <motion.div
                  className="relative hover:border-2 hover:border-secondary hover:shadow-[0_0_100px_rgba(253,200,48,0.7)] bg-white dark:bg-dark-secondary p-6 rounded-lg transition-all duration-500 hover:scale-105 transform flex flex-col h-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <h3 className="text-2xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500  to-teal-500">
                      {project?.title}
                    </h3>
                    <p className="text-lg text-dark-secondary dark:text-dark-textgray flex-grow">
                      {project?.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full bg-gradient-to-r from-[#FDC830] to-[#F37335]  h-[2px] rounded-lg shadow-lg transition-all" />
      <section
        id="services"
        className="min-h-screen py-16 px-6 text-center bg-[#F9FAFB] dark:bg-dark-primary"
      >
        <h2 className="text-4xl max-sm:text-3xl font-bold text-gray-800 dark:text-dark-textgray underline decoration-decoration dark:decoration-dark-decoration mb-8">
          My Services
        </h2>
        <p className="text-lg text-dark-secondary dark:text-dark-textgray mb-10 max-w-2xl mx-auto">
          I offer a range of services to help your business succeed online.
          Explore my areas of expertise below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-[5%]">
          {servicesData.map((service, index) => (
            <div key={index} className="flex h-full">
              <div className="p-[2px] bg-gradient-to-r from-pink-500 via-yellow-500 to-teal-500 rounded-lg w-full h-full">
                <motion.div
                  key={index}
                  className="hover:border-2 hover:border-secondary hover:shadow-[0_0_100px_rgba(253,200,48,0.7)]  bg-white dark:bg-dark-secondary p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex flex-col items-center mb-4">
                    <Image
                      src={service.icon}
                      alt={`${service.title} icon`}
                      width={100}
                      height={100}
                      loading="lazy"
                      className="object-contain w-full"
                      unoptimized
                    />
                    <h3 className="text-2xl font-semibold mt-4  bg-clip-text text-transparent bg-gradient-to-r from-pink-500  to-teal-500">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-dark-secondary dark:text-dark-textgray">
                    {service.description}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full bg-gradient-to-r from-[#FDC830] to-[#F37335] h-[2px] rounded-lg shadow-lg  transition-all" />

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
                <p className="text-red-500 text-sm mt-1 text-start">{error.name}</p>
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
                <p className="text-red-500 text-sm text-start mt-1">{error.email}</p>
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
                <p className="text-red-500 text-start text-sm mt-1">{error.message}</p>
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
