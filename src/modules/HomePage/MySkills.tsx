import React from "react";

const skillsData = [
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Front-End Frameworks",
    skills: ["React.js", "Next.js"],
  },
  {
    category: "Libraries",
    skills: [
      "Ant Design",
      "Material UI",
      "Bootstrap",
      "Shadcn",
      "Magic UI",
      "NextUI",
    ],
  },
  {
    category: "Styling",
    skills: ["Tailwind CSS", "CSS3"],
  },
  {
    category: "State Management",
    skills: ["Redux"],
  },
  {
    category: "Data Fetching",
    skills: ["RTK Query", "Axios", "Fetch"],
  },
];

const MySkills = () => {
  return (
    <section className="light:bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 className="text-6xl font-bold text-center light:text-gray-800 mb-8 uppercase">
          My Skills
        </h2>
        <h3 className="text-3xl font-bold text-center light:text-gray-800 mb-8 uppercase">
         front end
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillCategory, index) => (
            <div key={index} className="dark:bg-slate-800  shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">
                {skillCategory.category}
              </h3>
              <ul className="space-y-2">
                {skillCategory.skills.map((skill, i) => (
                  <li key={i} className="text-gray-600 dark:text-white">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
