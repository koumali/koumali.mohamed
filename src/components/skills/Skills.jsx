import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  {
    name: "Angular",
    numberPercent: "80",
    startCount: "0",
    endCount: "80",
  },
  {
    name: "React JS",
    numberPercent: "70",
    startCount: "0",
    endCount: "70",
  },
  {
    name: "Vue Js",
    numberPercent: "70",
    startCount: "0",
    endCount: "70",
  },
  {
    name: "Laravel",
    numberPercent: "78",
    startCount: "0",
    endCount: "78",
  },
  {
    name: "Asp .Net Core",
    numberPercent: "87",
    startCount: "0",
    endCount: "87",
  },
  {
    name: "Java",
    numberPercent: "75",
    startCount: "0",
    endCount: "75",
  },
  {
    name: "Ui/Ux",
    numberPercent: "85",
    startCount: "0",
    endCount: "85",
  },
];

const Skills = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="skill-wrapper">
        {skillContent.map((skill, i) => (
          <div className="skill-lt" key={i}>
            <h6>{skill.name}</h6>
            <span className="count-inner">
              <CountUp
                start={focus ? skill.startCount : null}
                end={skill.endCount}
                duration={1}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              %
            </span>
            <div className="skill-bar">
              <div
                className="skill-bar-in"
                style={{ width: skill.numberPercent + "%" }}
              ></div>
            </div>
          </div>
          // End skill-lt
        ))}
      </div>
    </>
  );
};

export default Skills;
