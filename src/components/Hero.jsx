export default function Hero() {
  return (
    <div
      className="hero-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        padding: "0 1rem",
        background: "linear-gradient(135deg, #ec4899, #3b82f6)",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "4rem", fontWeight: "700", marginBottom: "1rem" }}>
        Hi, I'm Safeer 👋
      </h1>
      <p
        style={{ fontSize: "1.8rem", fontWeight: "500", marginBottom: "2rem" }}
      >
        CS Student • Aspiring Software Engineer • React Enthusiast
      </p>
      <div>
        <a
          href="#projects"
          style={{
            backgroundColor: "#ffffff",
            color: "#3b82f6",
            padding: "0.8rem 1.5rem",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            marginRight: "1rem",
            transition: "background-color 0.3s, color 0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#3b82f6";
            e.target.style.color = "#ffffff";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "#ffffff";
            e.target.style.color = "#3b82f6";
          }}
        >
          View My Work
        </a>
        <a
          href="#contact"
          style={{
            border: "2px solid white",
            color: "white",
            padding: "0.8rem 1.5rem",
            borderRadius: "8px",
            fontWeight: "600",
            textDecoration: "none",
            transition: "background-color 0.3s, color 0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "white";
            e.target.style.color = "#3b82f6";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "white";
          }}
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
