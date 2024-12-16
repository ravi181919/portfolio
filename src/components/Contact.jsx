import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import { PiMailboxFill } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {

useEffect(() => {
  document.title = "Ravi Gupta | Contact";
}, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   alert("Form submitted successfully!");
  //   console.log(data);
  //   reset();
  // };

  // handle form 
  const onSubmit = async (data) => {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        access_key: import.meta.env.VITE_WEB3FORM_API_ID,
        to_email: import.meta.env.VITE_EMAIL_ID,
      }),
    });
  
    const result = await response.json();
    if (response.ok) {
      alert("Form submitted successfully!");
      reset();
    } else {
      console.error("Form submission failed:", result);
      alert("Something went wrong. Please try again later.");
    }
  };
  

  return (
    <div className="w-full mt-8 lg:mt-2 lg:min-h-[100vh] flex items-center justify-center flex-col text-black/75 mb-4 dark:text-white/65 px-5 lg:px-20">
      <Heading Icon={PiMailboxFill} title={"Contact"} />

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <h1 className="text-3xl lg:text-4xl font-black mb-4">
          Get in <span className="text-yellow-400">Touch</span>
        </h1>
        <p className=" text-xs lg:text-sm font-medium">
          Feel free to reach out through the form or our contact links.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-1 gap-2 mt-10 lg:w-full w-auto  place-items-center">
        {/* Contact Form */}
        <motion.div
          className="rounded-xl lg:p-5 p-4 lg:w-[40%] w-full  shadow-[0_4px_8px_rgba(0,_0,_0,_0.4)]"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <h2 className="text-2xl font-black mb-2">Send a Message</h2>
          <form 
           onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full p-2 mt-1 focus:text-sm text-sm focus:font-medium font-medium dark:focus:text-black/65 text-black/65 dark:bg-white/75 bg-white/30 focus:bg-white/30 rounded-lg outline-none focus:ring-2 focus:ring-zinc-500"
              />
              {errors.name && (
                <p className="text-red-500 font-medium text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium ">Email</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full p-2 mt-1 focus:text-sm text-sm focus:font-medium font-medium dark:focus:text-black/65 text-black/65 dark:bg-white/75 bg-white/30 focus:bg-white/30 rounded-lg outline-none focus:ring-2 focus:ring-zinc-500"
              />
              {errors.email && (
                <p className="text-red-500 font-medium text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows="2"
                className="w-full p-3 mt-2 focus:text-sm text-sm focus:font-medium font-medium dark:focus:text-black/65 text-black/65 dark:bg-white/75 bg-white/30 focus:bg-white/30 rounded-lg outline-none focus:ring-2 focus:ring-zinc-500"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 1 }}
              className="py-2 px-4 w-full skill-bg hover:bg-zinc-600 rounded-lg font-medium"
            >
              Submit
            </motion.button>

            <div className="w-full flex justify-center items-center">
              {/* Contact Options */}
              <motion.div
                className="flex justify-center gap-4 items-center"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <Link to={`https://wa.me/${import.meta.env.VITE_PHONE_NUMBER}`}>
                  <div className="w-fit px-2 skill-bg flex justify-center items-center gap-2 bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 rounded-lg py-1">
                    <h1 className="text-center w-full font-semibold leading-none tracking-tighter lg:text-[1.4vw] text-[4vw]">
                      What'sApp
                    </h1>
                    <FaWhatsapp
                      size={25}
                      className="dark:text-white/65 text-black/75"
                    />
                  </div>
                </Link>
                <Link to={`mailto:${import.meta.env.VITE_EMAIL_ID}`}>
                  <div className="w-fit px-2 skill-bg flex justify-center items-center gap-2 bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 rounded-lg py-1">
                    <h1 className="text-center w-full font-semibold leading-none tracking-tighter lg:text-[1.4vw] text-[4vw]">
                      Gmail
                    </h1>
                    <SiGmail
                      size={25}
                      className="dark:text-white/65 text-black/75"
                    />
                  </div>
                </Link>
                <Link to={`mailto:${import.meta.env.VITE_EMAIL_ID}`}>
                  <div className="w-fit px-2 skill-bg flex justify-center items-center gap-2 bg-white/30 backdrop-blur-lg shadow-lg border border-white/20 rounded-lg py-1">
                    <h1 className="text-center w-full font-semibold leading-none tracking-tighter lg:text-[1.4vw] text-[4vw]">
                      Linkedin
                    </h1>
                    <FaLinkedin
                      size={25}
                      className="dark:text-white/65 text-black/75"
                    />
                  </div>
                </Link>
              </motion.div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
