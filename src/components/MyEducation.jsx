// src/components/MyEducation.jsx
import React from "react";

const MyEducation = () => {
  const educations = [
    {
      degree: "Bachelor of Arts",
      institution: "Govt. Titumir College, Dhaka",
      address: "Bir Uttam AK Khandakar Rd,Mohakhali, Dhaka 1213",
      status: "Completed",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Badarganj Degree College",
      address: "Badarganj Bazar,Chuadanga",
      status: "Completed",
    },
  ];

  return (
    <section id="education" className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16">
      <div className="mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Educational Journey
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {educations.map((education, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-blue-500"
            >
              <h3 className="text-xl font-semibold text-gray-700">
                {education.degree}
              </h3>
              <p className="text-gray-500">{education.institution}</p>
              <p className="text-sm text-gray-400">{education.address}</p>
              <p className="mt-3 text-gray-600">{education.status}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyEducation;
