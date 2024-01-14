import "./home.scss";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [ref, inView] = useInView({
    threshold: 0.45,
    triggerOnce: false,
  });
  return (
    <div
      className={`home-container ${inView ? "inView" : "outView"}`}
      ref={ref}
    >
      <div className="home-content">
        <div className="home-content-name">Hi, I'm Solarin Daniel</div>
        <div className="home-content-label">Software Engineer</div>
        <div className="home-content-text">
          I'm a full-stack web developer, adept at blending frontend and backend
          technologies to craft seamless and engaging web experiences. My skills
          cover a diverse range of technologies, ensuring end-to-end solutions
          in web development.
        </div>
        <div className="home-content-button">
          <div></div>
          <div></div>
        </div>
        <div className="home-content-social">
          <div>
            <span></span>
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div>
            <span></span>
            <i class="fa-brands fa-github"></i>
          </div>
          <div>
            <span></span>
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
      </div>
      <div className="home-image">
        <img src={process.env.PUBLIC_URL + "/image.png"} alt="" />
      </div>
      <div className="overlay"></div>
    </div>
  );
}
