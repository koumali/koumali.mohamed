import React from "react";

const AwardContnet = [
  {
    img: "a1",
    awardName: "Learn Angular",
    awardFor: "Bright Coding",
    delayAnimation: "0",
  },
  {
    img: "a2",
    awardName: "Javascript Assessment",
    awardFor: "Linkedin",
    delayAnimation: "400",
  },
  {
    img: "a1",
    awardName: "LEARN VUEJS 3",
    awardFor: "Bright Coding",
    delayAnimation: "200",
  },
  {
    img: "a3",
    awardName: "PCAP: Programming Essentials in Python",
    awardFor: "Cisco Networking Academy",
    delayAnimation: "600",
  },
];

const Awards = () => {
  return (
    <>
      <div className="row">
        {AwardContnet.map((val, i) => (
          <div
            className="col-lg-4 m-15px-tb"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-02 d-flex align-items-center">
              <div className="icon">
                <img src={`img/award/${val.img}.png`} alt="award" />
              </div>
              <div className="media-body">
                <h6>{val.awardName}</h6>
                <p>{val.awardFor}</p>
              </div>
            </div>
          </div>
          // End .col
        ))}
      </div>
      {/* End .row */}
    </>
  );
};

export default Awards;
