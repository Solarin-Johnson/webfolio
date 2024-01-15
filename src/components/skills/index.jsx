import { useEffect, useState } from "react";
import "./skills.scss";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.05,
    triggerOnce: false,
  });

  const language = [
    { name: "HTML", rate: 90 },
    { name: "CSS", rate: 65 },
    { name: "JavaScript", rate: 85 },
    { name: "Python", rate: 80 },
  ];

  const pro = [
    { name: "Web Design", rate: 65 },
    { name: "Backend Development", rate: 90 },
    { name: "Data Analysis", rate: 70 },
    { name: "Version Control", rate: 80 },
  ];
  return (
    <div
      className={`experience-container skills-container ${
        inView ? "inView" : ""
      }`}
      ref={ref}
    >
      <div className="experience-head skills-head">
        My <span>Skills</span>
      </div>
      <div className="experience-window-container">
        <SkillsWindow data={language} head={"coding skills"} />
        <SkillsWindow data={pro} head={"professional skills"} />
      </div>
    </div>
  );
}

export const SkillsWindow = ({ data, head }) => {
  return (
    <div className="skills-window-container">
      <div className="skills-window-head">{head}</div>
      <div className="skills-window">
        {data.map((item, i) => (
          <SkillTab data={item} />
        ))}
      </div>
    </div>
  );
};

export const SkillTab = ({ data }) => {
  const [rate, setRate] = useState(0);
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  useEffect(() => {
    const updateRate = async () => {
      for (let i = 0; i <= data.rate; i++) {
        await sleep(10);
        setRate(i);
      }
    };

    inView && updateRate();
  }, [data.rate, inView]);

  return (
    <div className="skills-tab" ref={ref}>
      <div className="skills-tab-head">
        <div>{data.name}</div>
        <div>{rate}%</div>
      </div>
      <div className="skills-tab-bar">
        <span style={{ width: `${rate}%` }}></span>
      </div>
    </div>
  );
};
