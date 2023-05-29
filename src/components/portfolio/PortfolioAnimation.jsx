import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "Order Mission", "Cncours Maroc", "ASAFAR", "Cabinet Medicale", "BRICO", "Circuit Scientifique", "E-Commerce"];
const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/img/portfolio/my-portfolio-2.png",
        width: 1500,
        height: 1000,
        title: "Service Financier ENSAS",
        subTitle: "Figma Shoot",
        alterText: "ASAFAR",
        delayAnimation: "",
        portfolioLink: "",
      },
      {
        img: "/img/portfolio/my-portfolio-1.png",
        width: 2000,
        height: 1600,
        title: "ASAFAR App",
        subTitle: "Figma Shoot",
        alterText: "ASAFAR",
        delayAnimation: "",
        portfolioLink: "",
      },
      {
        img: "/img/portfolio/concour/MAROC.png",
        width: 1080,
        height: 1920,
        title: "Concour Maroc",
        subTitle: "Nuna ios App",
        alterText: "Illustration",
        delayAnimation: "100",
        portfolioLink: "",
      },
      {
        img: "/img/portfolio/my-portfolio-3.png",
        width: 2000,
        height: 1600,
        title: "Cabinet Medicale",
        subTitle: "Themeforest Marke",
        alterText: "Business Mockup",
        delayAnimation: "200",
        portfolioLink: "",
      },
      {
        img: "/img/portfolio/brico/b1.png",
        width: 1920,
        height: 1080,
        title: "BRICO",
        subTitle: "Free Recruitment Site In Morocco",
        alterText: "E-Cosmetics",
        delayAnimation: "0",
        portfolioLink: "",
      },
      {
        img: "/img/portfolio/science/s1.jpg",
        width: 1600,
        height: 900,
        title: "Circuit Scientifique",
        subTitle: "Explorer l'univers de la recherche",
        alterText: "Bottle Illustration",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
      {
        img: "/img/portfolio/ecommerce/e1.png",
        width: 1148,
        height: 555,
        title: "Minna",
        subTitle: "E-Commerce App",
        delayAnimation: "200",
        portfolioLink: "",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/my-portfolio-2.png",
        width: 1500,
        height: 1000,
        title: "Service Financier ENSAS",
        subTitle: "Gestion des orders de mission",
        alterText: "ASAFAR",
        delayAnimation: "",
        portfolioLink: "",
      },
      {
        img: "/img/portfolio/order/o6.png",
        width: 879,
        height: 347,
        delayAnimation: "",
      },
      {
        img: "/img/portfolio/order/o.png",
        width: 1296,
        height: 919,
        delayAnimation: "",
      },
      {
        img: "/img/portfolio/order/o1.png",
        width: 1186,
        height: 743,
        delayAnimation: "",
      },
      {
        img: "/img/portfolio/order/o2.png",
        width: 1185,
        height: 712,
        delayAnimation: "",
      },
      {
        img: "/img/portfolio/order/o3.png",
        width: 702,
        height: 880,
        delayAnimation: "",
      },
      {
        img: "/img/portfolio/order/o4.png",
        width: 701,
        height: 598,
        delayAnimation: "",
      },
      {
        img: "/img/portfolio/order/o5.png",
        width: 1336,
        height: 502,
        delayAnimation: "",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/concour/MAROC.png",
        width: 1080,
        height: 1920,
        title: "E-Learning App",
        subTitle: "Nuna ios App",
        alterText: "Illustration",
        delayAnimation: "",
        portfolioLink:
          "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
      },

      {
        img: "/img/portfolio/concour/r.png",
        width: 506,
        height: 640,
        alterText: "Bottle Illustration",
        delayAnimation: "100",
        portfolioLink:
          "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
      },
      {
        img: "/img/portfolio/concour/r2.png",
        width: 1067,
        height: 552,
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/concour/r3.png",
        width: 1038,
        height: 525,
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/concour/r4.png",
        width: 997,
        height: 782,
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
      {
        img: "/img/portfolio/concour/r5.png",
        width: 795,
        height: 618,
        alterText: "Web Application",
        delayAnimation: "200",
        portfolioLink:
          "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/asafar/a.png",
        width: 2000,
        height: 1600,
        delayAnimation: "",
        portfolioLink: "",
      },
      {
        img: "/img/portfolio/asafar/a2.png",
        width: 422,
        height: 926,
        title: "ASAFAR App",
        subTitle: "Figma Shoot",
        alterText: "ASAFAR",
        delayAnimation: "100",
      },
      {
        img: "/img/portfolio/asafar/a1.png",
        width: 2000,
        height: 1600,
        delayAnimation: "100",
      },

      {
        img: "/img/portfolio/asafar/a3.png",
        width: 424,
        height: 923,
        delayAnimation: "100",
      },
      {
        img: "/img/portfolio/asafar/a4.png",
        width: 424,
        height: 923,
        delayAnimation: "100",
      },
      {
        img: "/img/portfolio/asafar/a5.png",
        width: 424,
        height: 923,
        delayAnimation: "100",
      },
      {
        img: "/img/portfolio/asafar/a6.png",
        width: 424,
        height: 923,
        delayAnimation: "100",
      },
      {
        img: "/img/portfolio/asafar/a7.png",
        width: 424,
        height: 923,
        delayAnimation: "100",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/my-portfolio-3.png",
        width: 2000,
        height: 1600,
        title: "E-Learning App",
        subTitle: "Nuna ios App",
        alterText: "Illustration",
        delayAnimation: "",
        portfolioLink: "",
      },
      {
        img: "/img/portfolio/cabinet/c1.png",
        width: 384,
        height: 352,
      },
      {
        img: "/img/portfolio/cabinet/c2.png",
        width: 597,
        height: 353,
      },
      {
        img: "/img/portfolio/cabinet/c3.png",
        width: 594,
        height: 133,
      },
      {
        img: "/img/portfolio/cabinet/c4.png",
        width: 589,
        height: 222,
      },
      {
        img: "/img/portfolio/cabinet/c5.png",
        width: 597,
        height: 307,
      },
      {
        img: "/img/portfolio/cabinet/c6.png",
        width: 417,
        height: 427,
      },
      {
        img: "/img/portfolio/cabinet/c7.png",
        width: 459,
        height: 580,
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/brico/b1.png",
        width: 1920,
        height: 1080,
        title: "BRICO",
        subTitle: "Free Recruitment Site In Morocco",
        alterText: "Illustration",
        delayAnimation: "",
        portfolioLink: "",
      },
      {
        img: "/img/portfolio/brico/b2.png",
        width: 671,
        height: 910,
      },
      {
        img: "/img/portfolio/brico/b3.png",
        width: 562,
        height: 609,
      },
      {
        img: "/img/portfolio/brico/b4.png",
        width: 705,
        height: 792,
      },
      {
        img: "/img/portfolio/brico/b5.png",
        width: 565,
        height: 725,
      },
      {
        img: "/img/portfolio/brico/b6.png",
        width: 519,
        height: 697,
      },
      {
        img: "/img/portfolio/brico/b7.png",
        width: 624,
        height: 747,
      },
      {
        img: "/img/portfolio/brico/b8.png",
        width: 424,
        height: 634,
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/science/s1.jpg",
        width: 1600,
        height: 900,
        title: "Circuit Scientifique",
        subTitle: "Explorer l'univers de la recherche",
        alterText: "Illustration",
        delayAnimation: "",
        portfolioLink: "",
      },
      {
        img: "/img/portfolio/science/s2.jpg",
        width: 1600,
        height: 900,
      },
      {
        img: "/img/portfolio/science/s4.jpg",
        width: 1600,
        height: 900,
      },
      {
        img: "/img/portfolio/science/s5.jpg",
        width: 1600,
        height: 900,
      },
      {
        img: "/img/portfolio/science/s6.jpg",
        width: 1600,
        height: 900,
      },
      {
        img: "/img/portfolio/science/s7.jpg",
        width: 1600,
        height: 900,
      },
      {
        img: "/img/portfolio/science/s8.jpg",
        width: 1600,
        height: 900,
      }, {
        img: "/img/portfolio/science/s9.jpg",
        width: 1600,
        height: 900,
      },
      {
        img: "/img/portfolio/science/s10.jpg",
        width: 1600,
        height: 900,
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/ecommerce/e1.png",
        width: 1148,
        height: 555,
        title: "E-Commerce",
        subTitle: "E-Commerce App",
        delayAnimation: "",
        portfolioLink: "",
      },
      {
        img: "/img/portfolio/ecommerce/e2.png",
        width: 1233,
        height: 583,
      },
      {
        img: "/img/portfolio/ecommerce/e3.png",
        width: 1233,
        height: 588,
      },
      {
        img: "/img/portfolio/ecommerce/e4.png",
        width: 658,
        height: 493,
      },
      {
        img: "/img/portfolio/ecommerce/e5.png",
        width: 454,
        height: 347,
      },
      {
        img: "/img/portfolio/ecommerce/e6.png",
        width: 447,
        height: 441,
      },
      {
        img: "/img/portfolio/ecommerce/e7.png",
        width: 1108,
        height: 497,
      }, {
        img: "/img/portfolio/ecommerce/e8.png",
        width: 652,
        height: 257,
      },
      {
        img: "/img/portfolio/ecommerce/e9.png",
        width: 1234,
        height: 448,
      },
    ],
  },
];

const PortfolioAnimation = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {tabContent.porftoliItems.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt="Childhood"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            </div>
                          )}
                        </Item>

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          ))}
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  );
};

export default PortfolioAnimation;
