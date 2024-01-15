import "./contact.scss";
import { useInView } from "react-intersection-observer";

export default function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });
  return (
    <div
      className={`about-container contact-container ${inView ? "inView" : ""}`}
      ref={ref}
    >
      <div className="about-head contact-head">
        Contact <span>Me</span>
      </div>
      <div className="contact-form">
        <div id="input">
          <input type="text" placeholder="Full Name" />
          <input type="mail" placeholder="Email Address" />
        </div>
        <div id="message">
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message..."
          ></textarea>
        </div>
      </div>
      <div className="contact-button">Submit</div>
    </div>
  );
}
