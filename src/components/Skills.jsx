function SkillCard({ icon, name }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <div className="skill-name">{name}</div>
    </div>
  );
}

export default function Skills() {
  const Skills = [
    { name: "React", icon: "⚛️" },
    { name: "Javascript", icon: "🟨" },
    { name: "Python", icon: "🐍" },
    { name: "C++", icon: "💻" },
    { name: "PHP", icon: "🐘" },
    { name: "CSS", icon: "🎨" },
    { name: "Graphic Design", icon: "🖌️" },
    { name: "Adobe Photoshop", icon: "🖼️" },
    { name: "Adobe Illustrator", icon: "✏️" },
    { name: "Adobe Premiere Pro", icon: "🎬" },
    { name: "Node.js", icon: "🟩" },
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
        Skills
      </h2>
      <div className="skills-grid">
        {Skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </div>
  );
}
