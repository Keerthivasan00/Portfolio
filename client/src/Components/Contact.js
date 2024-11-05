import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import emailjs from "emailjs-com";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAddIcCall } from "react-icons/md";

function Contact() {
  const [formData, setFormData] = useState({
    to_name: "",
    from_name: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_uws9br8", 
        "template_ardpawd",
        {
          to_name: formData.to_name,
          from_name: formData.from_name,
          message: formData.message,
        },
        "lw6hH4v4WLmoPH4Xh"
      )
      .then((response) => {
        alert("Message sent successfully!");
        setFormData({ name: "", from_name: "", message: "" });
      })
      .catch((error) => {
        alert("An error occurred. Please try again.");
        console.error("EmailJS Error:", error);
      });
  };
  return (
    <>
      <Navbar />
      <div className="w-full bg-gray-50  xl:h-25 h-26">
        <div className="w-full h-full flex max-sm:flex-col">
          <div className="lg:w-5/12 lg:h-full h-52 flex-col flex justify-center lg:pl-2">
            {/* <div className='flex justify-center lg:text-4xl lg:p-5 text-2xl text-black font-bold'>How can you communicate ?</div> */}
            <div className="text-3xl pl-3 pt-3 lg:text-7xl text-purple-700 font-extrabold">
              Let's make something
            </div>
            <div className="text-3xl pl-3 lg:text-7xl text-purple-700 font-extrabold">
              great together...
            </div>
            <div className="w-full h-10 flex gap-10 lg:mt-20 mt-5 lg:pl-14 max-sm:justify-center">
              <a
                href="https://www.facebook.com/193n3EWZDJ/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <FaFacebook className="lg:w-10 lg:h-10 w-7 h-7" />
                </button>
              </a>
              <a
                href="https://instagram.com/kxx._.rthx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <FaInstagram className="lg:w-10 lg:h-10 w-7 h-7" />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/keerthivasan-k-b05336244/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>
                  <FaLinkedin className="lg:w-10 lg:h-10 w-7 h-7" />
                </button>
              </a>
              <a href="tel:+8220373623">
                <button>
                  <MdAddIcCall className="lg:w-10 lg:h-10 w-7 h-7" />
                </button>
              </a>
            </div>
          </div>
          <div className="lg:w-7/12 lg:h-full h-98 flex justify-center items-center">
            <div className="w-full max-w-lg mx-auto p-2 rounded-lg shadow-lg">
              <h2 className="text-2xl font-extrabold  text-center text-purple-600">
                Contact Me
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-purple-700">Name</label>
                  <input
                    type="text"
                    name="to_name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-1 lg:py-3 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-purple-700">Email</label>
                  <input
                    type="email"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    className="w-full px-4 py-1 lg:py-3 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-purple-700">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-1 lg:py-3 border rounded-md"
                    rows="4"
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-purple-500 text-white font-semibold px-2 py-1 lg:py-3 rounded-md hover:bg-blue-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
