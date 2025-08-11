// src/components/MyExperience.jsx
import React from "react";

const MyExperience = () => {
  const experiences = [
   {
      id: 1,
      role: "Accountant",
      company: "Ratul Group",
      period: "2018 - 2024",
      description:
        "Managed accounts, financial reporting, and analysis with precision and efficiency. Gained strong problem-solving skills and attention to detail.",
    },
    {
      id: 2,
      role: "Teacher",
      company: "Genius Coaching Center",
      period: "2010-2017",
      description:
        "Taught mathematics at a coaching center, guiding students through problem-solving techniques and fostering analytical skills for academic excellence.",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-8 lg:px-16" id="experience">
      <div className="">
        <h2 className="text-3xl font-bold text-center mb-12">My Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-10 ml-6">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 border border-white"></div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <span className="text-sm text-gray-500">{exp.period}</span>
                <p className="mt-3 text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
