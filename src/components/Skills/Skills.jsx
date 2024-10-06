import React from "react";

const Skills = () => {
  return (
    <div>
      <section className="py-6">
        <h2 className="text-2xl font-bold mb-4">🛠 Skills</h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {["JavaScript", "Python", "React", "Flask", "HTML5", "CSS3"].map(
            (skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm"
              >
                {skill}
              </span>
            )
          )}
        </div>
        <h3 className="font-bold mt-4">Other Skills:</h3>
        <ul className="list-disc list-inside">
          <li>
            Engineering: Problem-Solving, Project Management, Technical
            Documentation
          </li>
          <li>
            Soft Skills: Communication, Teamwork, Client Relations, Adaptability
          </li>
          <li>
            Languages: Spanish (Native), English (Fluent), Portuguese (Fluent)
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
