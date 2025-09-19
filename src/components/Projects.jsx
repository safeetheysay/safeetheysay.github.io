function ProjectCard({ title, description, link }) {
  return (
    <div id="projects" className="project-card">
      <h3 className="project-title">{title}</h3>
      <p className="project-desc">{description}</p>
      <a href={link} target="_blank" className="project-link">
        View Project →
      </a>
    </div>
  );
}

export default function Projects() {
  const Projects = [
    {
      title: "Bank Management System",
      description: "A desktop app to manage bank accounts using C++.",
      link: "#",
    },
    {
      title: "Institute Navigational System",
      description: "React Native app for campus Navigation.",
      link: "#",
    },
    {
      title: "Breast Cancer Prediction Tool",
      description:
        "A Powerful AI enabled tool that predicts and identifies Breast Cancer Based on Input Features.",
      link: "#",
    },
    {
      title: "PortFolio Website",
      description: "Personal portfolio built with React + CSS styling.",
      link: "https://safeetheysay.github.io/",
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
        Projects
      </h2>

      <div className="projects-grid">
        {Projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}
