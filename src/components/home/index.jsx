import "./home.scss";
export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-content-name">Hi, I'm Solarin Daniel</div>
        <div className="home-content-label">Fullstack Web Developer</div>
        <div className="home-content-text">
          I'm a full-stack web developer, adept at blending frontend and backend
          technologies to craft seamless and engaging web experiences. My skills
          cover a diverse range of technologies, ensuring end-to-end solutions
          in web development.
        </div>
      </div>
      <div className="home-image">
        <img src={process.env.PUBLIC_URL + "/image.png"} alt="" />
      </div>
      <div className="overlay"></div>
    </div>
  );
}
