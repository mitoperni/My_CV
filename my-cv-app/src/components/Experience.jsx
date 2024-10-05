import React from 'react'

const Experience = () => (
    <section className="py-6">
      <h2 className="text-2xl font-bold mb-4">💼 Experience</h2>
      {[
        {
          title: "Full-Stack Developer Bootcamp Graduate",
          date: "2023",
          description: [
            "Developed comprehensive web applications using modern technologies",
            "Selected as top student and best Team Leader in the cohort"
          ]
        },
        {
          title: "R&D Project Consultant at Aliot Innovación",
          date: "Apr 2023 - Jan 2024",
          description: [
            "Drafted project reports and R&D documents for tax benefit applications",
            "Managed multiple projects simultaneously, meeting deadlines and maintaining confidentiality"
          ]
        },
        // Add other experiences here
      ].map((job, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-bold">{job.title}</h3>
          <p className="italic">{job.date}</p>
          <ul className="list-disc list-inside">
            {job.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );}

export default Experience