import "./experience.scss";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });

  const experience = [
    {
      date: ["2017", "2018"],
      head: "Master Degree - University",
      body: "lorem",
    },
    {
      date: ["2017", "2018"],
      head: "Master Degree - University",
      body: "lorem",
    },
    {
      date: ["2017", "2018"],
      head: "Master Degree - University",
      body: "lorem",
    },
  ];
  const projects = [
    {
      head: "Master Degree - University",
      body: "lorem",
    },
    {
      head: "Master Degree - University",
      body: "lorem",
    },
    {
      head: "Master Degree - University",
      body: "lorem",
    },
  ];
  return (
    <div className={`experience-container ${inView ? "inView" : ""}`} ref={ref}>
      <div className="experience-head">
        My <span>Journey</span>
      </div>
      <div className="experience-window-container">
        <ExperienceWindow head={"Experience"} data={experience} />
        <ExperienceWindow head={"Top Projects"} data={projects} />
      </div>
    </div>
  );
}

export const ExperienceWindow = ({ head, data }) => {
  return (
    <div className="experience-window">
      <div className="experience-window-head">{head}</div>
      <div className="experience-window-content">
        <div className="experience-window-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="experience-window-body">
          {data.map((item, i) => (
            <ExperienceTab data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const ExperienceTab = ({ data }) => {
  return (
    <div className="experience-tab">
      <div className="experience-tab-date">
        {data.date && <i class="fa-solid fa-calendar-days"></i>}
        {data.date ? `${data.date[0]} — ${data.date[1]}` : ""}
      </div>
      <div className="experience-tab-title">{data.head}</div>
      <div className="experience-tab-body">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
        repellendus neque est quas eveniet, aut voluptatum soluta quisquam quam
        alias ducimus sheiu.
      </div>
    </div>
  );
};
