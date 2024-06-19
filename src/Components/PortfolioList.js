import React from "react";
import { Link } from "react-router-dom";
import uiubma from "../images/portfolio/ubma.png";
import techknowcon from "../images/portfolio/techknowcon.png";
import himalayandirt from "../images/portfolio/himalayan-dirt.png";
import curryhouse from "../images/portfolio/curryhousenc.png";
import aaspas from "../images/portfolio/aaspas.png";
import axisinfosys from "../images/portfolio/axisinfosys.png";


const imgs = [
  {
    author: "United black mothers of ameraica",
    tag: "Web development",
    technology: "WordPress: Elementor",
    link: "https://unitedblackmothersofamerica.org/",
    src: uiubma,
  }, 
  {
    author: "Techknowcon",
    tag: "Web development",
    technology: "WordPress: Elementor",
    link: "https://techknowcon.io/",
    src: techknowcon,
  },
  {
    author: "Himalayan Dirt",
    tag: "Web development",
    technology: "WordPress: Custom Theme",
    link: "https://himalayandirt.com/",
    src: himalayandirt,
  },
  {
    author: "Curry Housenc",
    tag: "Web design",
    technology: "WordPress: Custom theme",
    link: "https://www.curryhousenc.com/",
    src: curryhouse,
  },
  {
    author: "AASPAS",
    tag: "Web design",
    technology: "WordPress: Custom Theme",
    link: "https://aaspas.com.au/",
    src: aaspas,
  },
  {
    author: "Axis Infosys",
    tag: "Web development",
    technology: "WordPress: Custom Theme",
    link: "#",
    src: axisinfosys,
  },
  
];

const filters = [
  { name: "Web design", status: false },
  { name: "Web development", status: false },
];

const Filters = ({ onClickAll, all, onClick, filters }) => (
  <form>
    <ul>
      <li onClick={onClickAll}>
        <input type="checkbox" checked={all} />
        <label htmlFor="all">All</label>
      </li>
      {filters.map((filter, i) => (
        <li key={i} data-index={i} onClick={onClick}>
          <input id={filter.name} type="checkbox" checked={filter.status} />
          <label htmlFor={filter.name}>{filter.name}</label>
        </li>
      ))}
    </ul>
  </form>
);

const Cards = ({ imgs }) => (
  <ul>
    {imgs.map((img, i) => (
      <li key={i}>
        <figure>
          <img src={img.src} alt={img.author} />
          <figcaption>
            <div>{img.author} </div>
            <span>{img.technology}</span>
            <Link to={img.link} className="btn-capsule" target="_blank">Visit Site → </Link>
          </figcaption>
        </figure>
      </li>
    ))}
  </ul>
);

class PortfolioList extends React.Component {
  state = {
    imgs,
    filters,
    all: true,
  };

  setFilter = (e) => {
    e.preventDefault();
    const { filters, all } = this.state;
    const { index } = e.currentTarget.dataset;

    filters[index].status = !filters[index].status;
    this.setState({
      filters,
    });

    this.updateFilters();
    this.updateImgs();
  };

  setAll = () => {
    const { filters } = this.state;

    filters.forEach((filter) => {
      filter.status = false;
    });

    this.setState({
      all: true,
      filters,
    });
  };

  updateFilters() {
    const allFiltersTrue = filters.every((filter) => filter.status === true);
    const allFiltersFalse = filters.every((filter) => filter.status === false);

    if (allFiltersTrue || allFiltersFalse) {
      this.setAll();
    } else {
      this.setState({
        all: false,
      });
    }
  }

  updateImgs() {
    const { filters, all } = this.state;
    let newImgs = [];
    let a = 0;

    imgs.forEach((img, imgKey) => {
      filters.forEach((filter, filterKey) => {
        if (img.tag == filter.name && filter.status == true) {
          newImgs[a] = img;
          a++;
        }
      });
    });

    this.setState({
      imgs: newImgs,
    });
  }

  render() {
    const { filters, all } = this.state;
    return (
      <div className="dwk-portfolio px-5 pt-20 pb-20">
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <div className="text-center">
            <h5
              className="btn-capsule aos-init aos-animate mb-5"
              data-aos="fade-down"
            >
              Portfolio
            </h5>
            <h4 className="subtitle aos-init aos-animate" data-aos="fade-down">
              Awesome Projects
            </h4>
          </div>
        </div>
        <Filters
          onClickAll={this.setAll}
          all={all}
          onClick={this.setFilter}
          filters={filters}
        />
        {all ? <Cards imgs={imgs} /> : <Cards imgs={this.state.imgs} />}
      </div>
    );
  }
}
export default PortfolioList;
