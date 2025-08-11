import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const MyProjects = () => {
  // const projects = [
  //   {
  //     title: "Better Work",
  //     description:
  //       "A social development platform to create, join, and track social events, encouraging social responsibility and environmental awareness.",
  //     image: "https://i.ibb.co/2kPYk3s/project1.png", // Replace with your own image
  //     liveLink: "https://better-work-by-tauhid.netlify.app/",
  //     githubLink: "https://github.com/Tauhid25/better-work-client",
  //   },
  //   {
  //     title: "Event Explorer",
  //     description:
  //       "An event discovery platform with Firebase authentication, event listings, user profiles, and protected routes.",
  //     image: "https://i.ibb.co/ZhR0TNs/project2.png", // Replace with your own image
  //     liveLink: "https://event-explorer.netlify.app/",
  //     githubLink: "https://github.com/Tauhid25/event-explorer-client",
  //   },
  //   {
  //     title: "Freelance Hub",
  //     description:
  //       "A platform for connecting freelancers and clients with advanced search, project posting, and secure payments.",
  //     image: "https://i.ibb.co/vk4kVYp/project3.png", // Replace with your own image
  //     liveLink: "https://freelance-hub.netlify.app/",
  //     githubLink: "https://github.com/Tauhid25/freelance-hub-client",
  //   },
  // ];

  return (
    <section id="projects" className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white flex  shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="w-full md:w-1/2">
              <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                speed={1000} // 1 second fade
              >
                <SwiperSlide>
                  <img
                    src="https://i.ibb.co.com/SD3jdtf8/Dev-Dialogue-1.png"
                    alt="Dev Dialogue"
                    className="w-full h-96 object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://i.ibb.co.com/xtCVk1zY/Dev-Dialogue-2.png"
                    alt="Dev Dialogue"
                    className="w-full h-96 object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://i.ibb.co.com/0R8BV8g8/Dev-Dialogue-3.png"
                    alt="Dev Dialogue"
                    className="w-full h-96 object-cover"
                  />
                </SwiperSlide>
              </Swiper>
              {/* <img
                src={"https://i.ibb.co.com/7d8f0XLB/dev-dialogue.png"}
                alt={''}
                className="w-full h-48 object-cover"
              /> */}
            </div>
            <div className="w-full md:w-1/2 p-5">
              <h3 className="text-xl font-semibold mb-3">Better Work</h3>
              <p className="text-gray-600 mb-2">
                A community-driven platform to create, join, and track social
                events in local areas. The goal is to encourage social
                responsibility and environmental awareness through collaborative
                social activities.
              </p>
              <div>
                <p className="text-gray-500 mb-2">Features:</p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Event creation and management</li>
                  <li>Social media integration</li>
                  <li>Real-time event tracking</li>
                  <li>User authentication with Firebase</li>
                </ul>
              </div>
              <div className="my-4">
                <p>
                  Technologies Used:{" "}
                  <span className="bg-primary text-white px-3 py-1 rounded-full">
                    {" "}
                    React
                  </span>{" "}
                  <span> Express</span> <span> Node</span> <span> MongoDB</span>{" "}
                </p>
              </div>
              <div className="flex justify-between">
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Live
                </a>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                >
                  GitHub (Client)
                </a>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                >
                  GitHub (Server)
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white flex  shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="w-full md:w-1/2">
              <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                speed={1000} // 1 second fade
              >
                <SwiperSlide>
                  <img
                    src="https://i.ibb.co.com/r2hkBTYM/Better-work-1.png"
                    alt="Better Work"
                    className="w-full h-96 object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://i.ibb.co.com/nMKQ5nBk/Better-work-2-2.png"
                    alt="Better Work"
                    className="w-full h-96 object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://i.ibb.co.com/nM960bRJ/Better-work-3.png"
                    alt="Better Work"
                    className="w-full h-96 object-cover"
                  />
                </SwiperSlide>
              </Swiper>
              {/* <img
                src={"https://i.ibb.co.com/7d8f0XLB/dev-dialogue.png"}
                alt={''}
                className="w-full h-48 object-cover"
              /> */}
            </div>
            <div className="w-full md:w-1/2 p-5">
              <h3 className="text-xl font-semibold mb-3">Better Work</h3>
              <p className="text-gray-600 mb-2">
                A community-driven platform to create, join, and track social
                events in local areas. The goal is to encourage social
                responsibility and environmental awareness through collaborative
                social activities.
              </p>
              <div>
                <p className="text-gray-500 mb-2">Features:</p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Event creation and management</li>
                  <li>Social media integration</li>
                  <li>Real-time event tracking</li>
                  <li>User authentication with Firebase</li>
                </ul>
              </div>
              <div className="my-4">
                <p>
                  Technologies Used:{" "}
                  <span className="bg-primary text-white px-3 py-1 rounded-full">
                    {" "}
                    React
                  </span>{" "}
                  <span> Express</span> <span> Node</span> <span> MongoDB</span>{" "}
                </p>
              </div>
              <div className="flex justify-between">
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Live
                </a>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                >
                  GitHub (Client)
                </a>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                >
                  GitHub (Server)
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white flex  shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="w-full md:w-1/2">
              <Swiper
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                speed={1000} // 1 second fade
              >
                <SwiperSlide>
                  <img
                    src="https://i.ibb.co.com/Gjt9fsM/freelance-hub-1.png"
                    alt="Freelance Hub"
                    className="w-full h-96 object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://i.ibb.co.com/BK4g69TY/freelance-hub-2.png"
                    alt="Freelance Hub"
                    className="w-full h-96 object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://i.ibb.co.com/fVcw1WJM/freelance-hub-3.png"
                    alt="Freelance Hub"
                    className="w-full h-96 object-cover"
                  />
                </SwiperSlide>
              </Swiper>
              {/* <img
                src={"https://i.ibb.co.com/7d8f0XLB/dev-dialogue.png"}
                alt={''}
                className="w-full h-48 object-cover"
              /> */}
            </div>
            <div className="w-full md:w-1/2 p-5">
              <h3 className="text-xl font-semibold mb-3">Freelance Hub</h3>
              <p className="text-gray-600 mb-2">
                Freelance Hub is a platform connecting freelancers and clients, offering project posting, bidding, secure communication, and payment features to streamline collaboration and create opportunities for successful freelance careers worldwide.
              </p>
              <div>
                <p className="text-gray-500 mb-2">Features:</p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Freelancer and client profiles</li>
                  <li>Secure job posting</li>
                  <li>Real-time chat</li>
                  <li>Payment protection system</li>
                </ul>
              </div>
              <div className="my-4">
                <p>
                  Technologies Used:{" "}
                  <span className="bg-primary text-white px-3 py-1 rounded-full">
                    {" "}
                    React
                  </span>{" "}
                  <span> Express</span> <span> Node</span> <span> MongoDB</span>{" "}
                </p>
              </div>
              <div className="flex justify-between">
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Live
                </a>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                >
                  GitHub (Client)
                </a>
                <a
                  href={""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900"
                >
                  GitHub (Server)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
