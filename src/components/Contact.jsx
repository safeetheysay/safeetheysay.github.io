export default function Contact() {
  return (
    <div
      className="container flex-column"
      id="contact"
      style={{
        textAlign: "center",
        padding: "3rem 1rem",
        backgroundColor: "#f3f4f6",
      }}
    >
      <h2
        className="title-pink"
        style={{ fontSize: "2.5rem", marginBottom: "1rem" }}
      >
        Get In Touch
      </h2>
      <p style={{ fontSize: "1.1rem", marginBottom: "2rem", color: "#555" }}>
        Feel free to reach out for collaboration, Freelance Projects, or just to
        say Hi! 👋
      </p>
      <div>
        <a
          href="mailto:safeerahmadawan68208@gmail.com"
          style={{
            backgroundColor: "#ec4899", // pink
            color: "white",
            padding: "0.8rem 1.5rem",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#db2777")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#ec4899")}
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginLeft: "50px",
            backgroundColor: "#3b82f6", // blue
            color: "white",
            padding: "0.8rem 1.5rem",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2563eb")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#3b82f6")}
        >
          Linked In
        </a>
      </div>
    </div>
  );
}
