import "./footer.scss";
import { useInView } from "react-intersection-observer";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [ref, inView] = useInView({
    threshold: 0.45,
    triggerOnce: false,
  });

  return (
    <div className={`footer-container ${inView ? "inView" : ""}`} ref={ref}>
      <p className="footer-copy">
        &copy; {currentYear} Solarin Daniel. All rights reserved. Designed and
        developed by Js
      </p>
      <div>
        <div
          className="footer-btt"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i class="fa-solid fa-arrow-up"></i>
        </div>
      </div>
    </div>
  );
}
