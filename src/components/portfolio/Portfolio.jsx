import React from 'react';
import IMG1 from '../../assets/booki.png';
import IMG2 from '../../assets/GameOn.png';
import IMG3 from '../../assets/freelance.png';
import IMG4 from '../../assets/OhmyFood.png';
import IMG5 from '../../assets/Capture d’écran 2023-04-29 à 16.25.11.png';
import IMG6 from '../../assets/landing.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Booki',
      img: IMG1,
      description:
        'The company wants to develop a website that allows users to find accommodation and activities in the city of their choice.',
      technologies: 'HTML | CSS3 | FLEXBOX ',
      link: 'https://alaodriss.github.io/Booki-travel-Html-Css-p2',
      github: 'https://github.com/alaodriss/Booki-travel-Html-Css-p2',
    },
    {
      id: 2,
      title: 'OhmyFood',
      img: IMG4,
      description:
        'Ohmyfood! is a young startup that would like to impose itself on the catering market. The goal is to develop a 100% mobile site that lists the menus of gourmet restaurants',
      technologies: 'Structuration CSS with la norme BEM | SCSS  | Animations',
      link: 'https://alaodriss.github.io/OhmyFood-Html-Scss-responsive-p3/ ',
      github: 'https://github.com/alaodriss/OhmyFood-Html-Scss-responsive-p3',
    },
    {
      id: 3,
      title: 'GameOn',
      img: IMG2,
      description: "work on a forked GitHub repo use separate files for HTML /CSS/ and JavaScript; always comment your code (describe each function and each class as well as the parts of the code that require more detail) manually test functionality form inputs and responsive display.",
      technologies: 'JavaScript | CSS | HTML |  Mobile First',
      link: 'https://alaodriss.github.io/GameOn-HTML5-CSS-Javascript-p4/',
      github: 'https://github.com/alaodriss/GameOn-HTML5-CSS-Javascript-p4',
    },
    {
      id: 4,
      title: 'Patmos',
      img: IMG3,
      description:
        'Fully responsive interactive website built based on Figma design "Freelance"',
      technologies: 'JavaScript | SCSS | HTML ',
      link: 'https://github.com/alaodriss/Patmos/tree/master',
      github: 'https://github.com/Meri-MG/shelter',
    },
    {
      id: 5,
      title: 'Meteo',
      img: IMG5,
      description:
        'Build a React JS weather app using the OpenWeatherMap API. We will be using axios to connect with our API.',
      technologies: 'Reactjs | CSS | API' ,
      link: 'https://meteo-reactjs.vercel.app/',
      github: 'https://github.com/alaodriss/myMeteo-Reactjs',
    },
    {
      id: 6,
      title: 'Time Now',
      img: IMG6,
      description:
        'Langing Page with Reactjs ',
      technologies: 'Reactjs | Style Compoenets ',
      link: 'https://timenow-landing-page-reactjs.vercel.app/',
      github: 'https://github.com/alaodriss/time-now-landing-page-reactjs',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
