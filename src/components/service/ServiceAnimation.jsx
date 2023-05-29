import React from "react";

const ServiceContent = [
  {
    icon: "icon-desktop",
    title: "Full-Stack Development",
    descriptions: `I specialize in full-stack development, creating robust and scalable web applications that meet your unique business needs. From front-end design to back-end implementation, I handle the entire development process. With expertise in multiple programming languages and frameworks, I ensure seamless integration and a user-friendly experience. Let me bring your ideas to life with my comprehensive full-stack development services.`,
    delayAnimation: "",
  },
  {
    icon: "icon-mobile",
    title: "Web Design",
    descriptions: `As a skilled UI/UX designer, I craft captivating and intuitive user interfaces that enhance the overall user experience. From wireframing and prototyping to visual design and interaction, I focus on creating beautiful, functional designs that engage your target audience. By blending aesthetics and usability, I deliver interfaces that not only look stunning but also drive user satisfaction and business success.`,
    delayAnimation: "200",
  },
  
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-6 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
