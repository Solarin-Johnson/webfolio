import "./about.scss";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  return (
    <div className={`about-container ${inView ? "inView" : ""}`} ref={ref}>
      <div className="about-head">
        About <span>Me</span>
      </div>
      <div className="about-image">
        <img
          fetchpriority="high"
          src={process.env.PUBLIC_URL + "/image.webp"}
          alt=""
        />
      </div>
      <div className="about-title">Software Engineer!</div>
      <div className="about-content">
        Hi, I'm Daniel. A passionate software developer with expertise in both
        full-stack development and data science. Skilled in JavaScript (Node.js,
        React) for crafting dynamic web applications, Python (FastAPI) for API
        development, and PHP &minus; Laravel for analyzing complex datasets.
        Committed to clean coding practices and staying abreast of industry
        trends, I thrive on turning intricate challenges into streamlined
        solutions.
        <span>Let's build the future of technology together!</span>
      </div>
    </div>
  );
}
