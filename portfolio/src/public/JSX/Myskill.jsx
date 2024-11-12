import React, { useEffect, useRef } from "react";
import "../CSS/myskill.css";
import emot from "../IMG/emot.png";

export default function Myskill() {
  const chartRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const chartRef = entry.target;
            const targetNum = parseInt(chartRef.querySelector("h2").getAttribute("data-num"), 10);
            animateChart(chartRef, targetNum);
          }
        });
      },
      { threshold: 0.5 }
    );

    chartRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      chartRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const animateChart = (chartRef, targetNum) => {
    const title = chartRef.querySelector("h2");
    const circle = chartRef.querySelector("circle");
    let rate = 0;
    let currentNum = 0;
    const duration = 2000;
    const increment = targetNum / (duration / 16);
    const numberIncrement = targetNum / (duration / 16);

    function updateAnimation() {
      if (rate < targetNum) {
        rate += increment;
        currentNum += numberIncrement;

        if (rate > targetNum) rate = targetNum;
        if (currentNum > targetNum) currentNum = targetNum;

        const amount = 630 - (630 * rate) / 100;
        title.textContent = Math.floor(currentNum);
        circle.style.strokeDashoffset = amount;

        requestAnimationFrame(updateAnimation);
      }
    }

    requestAnimationFrame(updateAnimation);
  };

  const skillGroups = {
    Front: [
      { skill: "HTML", level: 90, img: emot },
      { skill: "CSS", level: 70, img: emot },
      { skill: "JavaScript", level: 80, img: emot },
      { skill: "JQuery", level: 60, img: emot },
      { skill: "React", level: 70, img: emot },
    ],
    Back: [
        { skill: "Node", level: 60, img: emot },
        { skill: "Python", level: 60, img: emot },
    ],
    Design: [
      { skill: "Photoshop", level: 70, img: emot },
      { skill: "Illustrator", level: 70, img: emot },
      { skill: "Figma", level: 80, img: emot },
    ],
    Communication: [
      { skill: "Discord", level: 80, img: emot },
      { skill: "Notion", level: 80, img: emot },
      { skill: "Slack", level: 70, img: emot },
      { skill: "Git", level: 60, img: emot },
    ],
  };

  return (
    <div className="myskill">
      <div className="container">
        <h2>SKILL</h2>
        <div className="skill-groups">
          {Object.entries(skillGroups).map(([groupName, skills], groupIndex) => (
            <div className="skill-group" key={groupIndex}>
              <h3>{groupName}</h3>
              <div className="charts">
                {skills.map((chart, index) => (
                  <div
                    key={index}
                    className="chart"
                    ref={(el) => (chartRefs.current.push(el))}
                  >
                    <h2 data-num={chart.level}>
                      <img src={chart.img} alt="icon" />
                      0
                    </h2>
                    <svg viewBox="0 0 220 220">
                      <circle cx="110" cy="110" r="100"></circle>
                    </svg>
                    <h3>{chart.skill}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
