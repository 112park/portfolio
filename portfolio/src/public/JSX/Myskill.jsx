import React, { useEffect } from "react";
import "../CSS/myskill.css";
import emot from "../IMG/emot.png";

export default function Myskill() {
  useEffect(() => {
    const charts = document.querySelectorAll(".chart");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateChart(entry.target);
        }
      });
    }, { threshold: 0.5 });

    charts.forEach((chart) => observer.observe(chart));

    return () => charts.forEach((chart) => observer.unobserve(chart));
  }, []);

  const animateChart = (chart) => {
    const targetNum = parseInt(chart.dataset.num, 10);
    const title = chart.querySelector("h2");
    const circle = chart.querySelector("circle");
    let currentNum = 0;
    let interval = setInterval(() => {
      if (currentNum >= targetNum) {
        clearInterval(interval);
        return;
      }
      currentNum += 1;
      title.textContent = currentNum;
      circle.style.strokeDashoffset = 630 - (630 * currentNum) / 100;
    }, 20);
  };

  const skillGroups = {
    Front: [
      { skill: "HTML", level: 90 },
      { skill: "CSS", level: 70 },
      { skill: "JavaScript", level: 80 },
      { skill: "JQuery", level: 60 },
      { skill: "React", level: 70 },
    ],
    Back: [
      { skill: "Node", level: 60 },
      { skill: "Python", level: 60 },
    ],
    Design: [
      { skill: "Photoshop", level: 70 },
      { skill: "Illustrator", level: 70 },
      { skill: "Figma", level: 80 },
    ],
    Communication: [
      { skill: "Discord", level: 80 },
      { skill: "Notion", level: 80 },
      { skill: "Slack", level: 70 },
      { skill: "Git", level: 60 },
    ],
  };

  return (
    <div className="myskill">
      <h2 className="skill-title">SKILL</h2>
      <div className="skill-container">
        {Object.entries(skillGroups).map(([group, skills]) => (
          <div key={group} className={`skill-group ${group.toLowerCase()}`}>
            <h3 className="group-title">{group}</h3>
            <div className="charts">
              {skills.map(({ skill, level }) => (
                <div key={skill} className="chart" data-num={level}>
                  <h2>0</h2>
                  <svg viewBox="0 0 220 220">
                    <circle cx="110" cy="110" r="100"></circle>
                  </svg>
                  <h3>{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
