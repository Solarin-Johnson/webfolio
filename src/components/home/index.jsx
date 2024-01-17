import "./home.scss";
import { useInView } from "react-intersection-observer";

export default function Home({ browserWidth }) {
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
          I'm a Skilled software engineer specializing in full-stack
          development, seamlessly blending frontend and backend technologies to
          create engaging and innovative web experiences. Let's collaborate and
          build something amazing together!
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
        <img
          fetchpriority="high"
          src={process.env.PUBLIC_URL + "/image.webp"}
          alt=""
        />
      </div>
      <div className="overlay"></div>
    </div>
  );
}
