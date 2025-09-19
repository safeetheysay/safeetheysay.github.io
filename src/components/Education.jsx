function EducationCard({ degree, institution, year, details }) {
  return (
    <div className="card">
      <h3>{degree}</h3>
      <p>
        {institution} | {year}
      </p>
      <p>{details}</p>
    </div>
  );
}

export default function Education() {
  const list = [
    {
      degree: "BSc Computer Science",
      institution: "CECOS University",
      year: "2023-2027",
      details: "Software Development, Data Structures, Algorithms, AI.",
    },
    {
      degree: "Intermediate",
      institution: "Fazaia Degree College",
      year: "2021-2023",
      details: "The journey to persue Computer Science began here!",
    },
  ];

  return (
    <div className="container flex-column">
      <h2
        className="title-pink"
        style={{
          fontSize: "2.5rem",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        Education
      </h2>
      {list.map((edu, index) => (
        <EducationCard key={index} {...edu} />
      ))}
    </div>
  );
}

// function EducationCard({ degree, institution, year, details }) {
//   return (
//     <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
//       <h3 className="text-xl font-bold mb-2">{degree}</h3>
//       <p className="text-gray-600 mb-4">{institution}</p>
//       <p className="text-gray-500 mb-2">{year}</p>
//       <p className="text-gray-700">{details}</p>
//     </div>
//   );
// }

// export default function Education() {
//   const EducationList = [
//     {
//       degree: "Bachelor of Computer Science",
//       institution: "CECOS University of IT & Emerging Sciences, Peshawar",
//       year: "2023-2027",
//       details:
//         "Focused on Software Development, Data Structures, Algorithms, and AI.",
//     },
//     {
//       degree: "Intermediate in Computer Science",
//       institution: "Fazaia Degree College",
//       year: "2021-2023",
//       details: "The Journey of Persuing Computer Science Started Here!",
//     },
//   ];

//   return (
//     <section id="education" className="py-20 bg-gray-100">
//       <div className="max-w-4xl mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {EducationList.map((edu, index) => (
//             <EducationCard
//               key={index}
//               degree={edu.degree}
//               institution={edu.institution}
//               year={edu.year}
//               details={edu.details}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
