import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    Image: IMG1,
    title: "TOC Cleaning Website",
    github: "#contact",
    demo: "https://www.toccleaningservice.com/",
  },
  {
    id: 2,
    Image: IMG2,
    title: "Musician's Website",
    github: "#contact",
    demo: "https://www.redouaneaouameur.com/",
  },
  {
    id: 3,
    Image: IMG3,
    title: "Interior Design Website",
    github: "#contact",
    demo: "https://www.lizandcompanydesigns.com/",
  },
  {
    id: 4,
    Image: IMG4,
    title: "Blog",
    github: "#contact",
    demo: "https://www.everylifeonpurpose.com/",
  },
  {
    id: 5,
    Image: IMG5,
    title: "Ecommerce Website",
    github: "#contact",
    demo: "https://www.kamp-swag.com/",
  },
  {
    id: 6,
    Image: IMG6,
    title: "Game Development Project",
    github: "#contact",
    demo: "https://drive.google.com/file/d/1LFmAOOlOKU8b9AcRh8lLdGbv19K4A-5z/view?usp=sharing",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, Image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={Image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Hire Me
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
