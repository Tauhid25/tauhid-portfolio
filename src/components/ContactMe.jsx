import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    // Replace with your EmailJS service, template, and user IDs
    const serviceId = import.meta.env.VITE_serviceId;
    const templateId = import.meta.env.VITE_templateId;
    const publicKey = import.meta.env.VITE_publicKey;

    emailjs
      .send(serviceId, templateId, data, publicKey)
      .then(() => {
        alert("Message sent successfully!");
        reset();
      })
      .catch(() => {
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contactMe" className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="mx-auto px-4 ">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <p className="text-center mb-8">
          Feel free to reach out for any inquiries or collaborations.
        </p>
        <div className="flex justify-center gap-8">
          <div className="w-full space-y-6">
            <div className="p-4 bg-white shadow-lg rounded-lg space-y-2">
              <h2 className="flex items-center gap-2">
                {" "}
                <Link
                  to={"https://mail.google.com/mail/u/0/#inbox?compose=new"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope size={24} />
                </Link>
                Email
              </h2>
              <p>tauhidbd789@gmail.com</p>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-lg space-y-2">
              <h2 className="flex items-center gap-2">
                {" "}
                <Link to={"https://wa.me/8801736485591"} target="_blank">
                  <FaPhoneAlt size={24} />
                </Link>
                WhatsApp
              </h2>
              <p>+880 1736-485591</p>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-lg space-y-2">
              <h2 className="flex items-center gap-2">
                {" "}
                <FaLocationDot size={24} />
                Location
              </h2>
              <p>Jhenaidah,Dhaka,Bangladesh</p>
            </div>
            <div>
              <p className="font-medium">Available on</p>
              <div className="flex justify-center space-x-4 mt-4">
                <Link
                  to={"https://github.com/Tauhid25"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={24} />
                </Link>
                <Link
                  to={"https://www.linkedin.com/in/tauhidur-rahman-bd/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} />
                </Link>
                <Link
                  to={"https://www.facebook.com/tauhidurrahmanbd"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={24} />
                </Link>
                <Link
                  to={"https://x.com/Tauhidbd789"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter size={24} />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white shadow-lg rounded-lg p-6 space-y-4"
            >
              {/* Name */}
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Your Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please enter a valid email",
                    },
                  })}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Your Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className="w-full border border-gray-300 rounded px-3 py-2 h-32 resize-none focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Your Message"
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
