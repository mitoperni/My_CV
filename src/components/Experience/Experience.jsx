// @ts-check
import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronUpIcon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";

const Experience = () => {
  const [experiences, setExperiences] = useState([
    {
      title: "Full Stack Web Developer",
      company: "Freelance",
      location: "Dublin, Ireland",
      date: "Jun 2024 - Present",
      description: [
        "Developing full-stack web applications for various clients",
        "Utilizing a wide range of technologies including TypeScript, Python, and React"
      ],
      skills: ["Responsive Web Design", "REST", "TypeScript", "Python", "GitHub", "React Hooks", "SQL", "React.js"],
      achievements: ["Successfully completed multiple client projects"],
    },
    {
      title: "Frontend Web Developer",
      company: "No Country",
      location: "Remote, Buenos Aires Province, Argentina",
      date: "Jun 2024 - Aug 2024",
      description: [
        "Designed and implemented the user interface for YO LO CUIDO, a responsive web platform connecting pet owners with caregivers",
        "Utilized React, HTML, and CSS to create a seamless user experience",
        "Collaborated with UX/UI team to integrate modern design principles",
        "Optimized the platform for mobile devices",
      ],
      skills: ["Remote Teamwork", "TypeScript", "Vercel", "React Hooks", "React.js"],
      achievements: ["Successfully launched YO LO CUIDO platform"],
    },
    {
      title: "R&D Consultant",
      company: "Aliot Innovación",
      location: "Córdoba, Andalucía, Spain",
      date: "Apr 2023 - Jan 2024",
      description: [
        "Conducted research and development consultancy",
        "Developed projects utilizing Microsoft Office suite",
        "Engaged in technical writing and report preparation",
      ],
      skills: ["Written Communication", "Microsoft Office", "Teamwork", "Project Development", "Research", "Consulting", "Problem Solving", "Artificial Intelligence"],
      achievements: ["Successfully completed multiple R&D projects"],
    },
    {
      title: "Technical Sales Advisor",
      company: "SolarProfit",
      location: "Remote, Barcelona, Catalunya, Spain",
      date: "Apr 2022 - Apr 2023",
      description: [
        "Provided technical and commercial advice for solar energy solutions",
        "Managed key accounts and led sales teams",
        "Offered customer support and technical assistance",
      ],
      skills: ["Technical Support", "Team Leadership", "Customer Service", "Key Account Management", "Energy Sector", "Electrical Sector", "Energy Efficiency"],
      achievements: ["Exceeded sales targets consistently"],
    },
    {
      title: "Project Researcher",
      company: "University of Córdoba",
      location: "Angola",
      date: "Mar 2020 - May 2021",
      description: [
        "Conducted research for the project 'PROMOÇÃO DO CARVÃO VEGETAL SUSTENTÁVEL EM ANGOLA ATRAVÉS DE UMA ABORDAGEM DA CADEIA DE VALOR'",
        "Collaborated with the Ministry of Environment of Angola and the United Nations Development Programme (UNDP)",
        "Focused on sustainable charcoal production and value chain approaches",
      ],
      skills: ["Project Development", "Sustainability", "Cooperation", "Project Management", "Research", "Portuguese"],
      achievements: ["Successfully contributed to sustainable energy practices in Angola"],
    },
    {
      title: "Technical Consultant",
      company: "UNDP",
      location: "Luanda, Angola",
      date: "Feb 2020 - Mar 2020",
      description: [
        "Provided technical consultancy for the project 'PROMOTION OF EFFICIENT COOKSTOVES FOR CHARCOAL AND EXPLOITATION OF CHARCOAL RESIDUES FOR BRIQUETTES'",
        "Worked on improved cookstoves at Dom Bosco Professional School, Luanda",
      ],
      skills: ["Technical Consulting", "Sustainable Design", "Energy Efficiency", "Project Execution"],
      achievements: ["Developed and tested new improved cookstove designs"],
    },
  ]);

  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedExperience, setSelectedExperience] = useState(null);

  const sortedExperiences = useMemo(() => {
    return [...experiences].sort((a, b) => {
      if (sortBy === "date") {
        return sortOrder === "desc"
          ? new Date(b.date) - new Date(a.date)
          : new Date(a.date) - new Date(b.date);
      } else if (sortBy === "title") {
        return sortOrder === "desc"
          ? b.title.localeCompare(a.title)
          : a.title.localeCompare(b.title);
      } else if (sortBy === "location") {
        return sortOrder === "desc"
          ? b.location.localeCompare(a.location)
          : a.location.localeCompare(b.location);
      }
    });
  }, [experiences, sortBy, sortOrder]);

  const toggleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">💼 Experience</h2>
      <div className="mb-4 flex space-x-4">
        <button
          onClick={() => toggleSort("date")}
          className="flex items-center px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
        >
          Sort by Date
          {sortBy === "date" && (
            sortOrder === "desc" ? <ChevronDownIcon className="w-4 h-4 ml-1" /> : <ChevronUpIcon className="w-4 h-4 ml-1" />
          )}
        </button>
        <button
          onClick={() => toggleSort("title")}
          className="flex items-center px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
        >
          Sort by Title
          {sortBy === "title" && (
            sortOrder === "desc" ? <ChevronDownIcon className="w-4 h-4 ml-1" /> : <ChevronUpIcon className="w-4 h-4 ml-1" />
          )}
        </button>
        <button
          onClick={() => toggleSort("location")}
          className="flex items-center px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 transition-colors"
        >
          Sort by Location
          {sortBy === "location" && (
            sortOrder === "desc" ? <ChevronDownIcon className="w-4 h-4 ml-1" /> : <ChevronUpIcon className="w-4 h-4 ml-1" />
          )}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedExperiences.map((job, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedExperience(job)}
          >
            <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
            <p className="text-gray-600 mb-2">{job.company}</p>
            <p className="text-gray-500 text-sm">{job.location}</p>
            <p className="text-gray-500 text-sm mt-2">{job.date}</p>
          </motion.div>
        ))}
      </div>
      {selectedExperience && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-2xl font-bold">{selectedExperience.title}</h3>
              <button
                onClick={() => setSelectedExperience(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-2">{selectedExperience.company}</p>
            <p className="text-gray-500 mb-4">{selectedExperience.date}</p>
            <h4 className="font-semibold mb-2">Description:</h4>
            <ul className="list-disc list-inside mb-4">
              {selectedExperience.description.map((desc, i) => (
                <li key={i} className="mb-1">{desc}</li>
              ))}
            </ul>
            <h4 className="font-semibold mb-2">Skills:</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedExperience.skills.map((skill, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  {skill}
                </span>
              ))}
            </div>
            <h4 className="font-semibold mb-2">Achievements:</h4>
            <ul className="list-disc list-inside">
              {selectedExperience.achievements.map((achievement, i) => (
                <li key={i} className="mb-1">{achievement}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Experience;