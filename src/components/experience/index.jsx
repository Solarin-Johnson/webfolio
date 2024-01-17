import { useEffect, useState } from "react";
import "./experience.scss";
import { useInView } from "react-intersection-observer";

export default function Experience({ browserWidth }) {
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });

  const experience = [
    {
      date: ["Nov 2023", "Date"],
      head: "Conju.me — Contract",
      body: "Product development process, from user experience processes, research, site-mapping, wire-frame design, and user journey, to the implementation",
    },
    {
      date: ["Jul 2022", "Aug 2023"],
      head: "Jatado — Fulltime Remote",
      body: "Product development process, from user experience processes, research, site-mapping, wire-frame design, and user journey, to the implementation",
    },
    {
      date: ["Apr 2022", "Jun 2022"],
      head: "Magnusrise — Contract",
      body: "Developed RESTFUL API using Laravel for business logic, User Authentication, User Dashboard, Admin Authentication and Admin Dashboard",
    },
  ];
  const projects = [
    {
      date: ["Nov 2023", ""],
      head: "Conju.me — Python - FastAPI",
      body: "Conju.me is your ultimate platform for effortlessly sharing and monetizing everything you create online in one link. Visit:https://conju.me/",
    },
  ];
  return (
    <div
      className={`experience-container ${
        inView ? "inView" : browserWidth <= 600 ? "inView" : ""
      }`}
      ref={ref}
    >
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
          {data.map(() => (
            <span></span>
          ))}
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
        {data.date
          ? `${data.date[0]} ${data.date[1] && "— " + data.date[1]}`
          : ""}
      </div>
      <div className="experience-tab-title">{data.head}</div>
      <div className="experience-tab-body">{data.body}</div>
      <span className="tab-animation"></span>
    </div>
  );
};
