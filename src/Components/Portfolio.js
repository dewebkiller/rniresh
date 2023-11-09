import React from "react";
const imgs = [
  {
    author: "The Lazy Artist Gallery",
    tag: "Web development",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/1.jpg?raw=true",
  },
  {
    author: "Daria Shevtsova",
    tag: "Web design",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/2.jpg?raw=true",
  },
  {
    author: "Kasuma",
    tag: "Graphic design",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/3.jpg?raw=true",
  },
  {
    author: "Dominika Roseclay",
    tag: "Web development",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/4.jpg?raw=true",
  },
  {
    author: "Scott Webb",
    tag: "Graphic design",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/5.jpg?raw=true",
  },
  {
    author: "Jeffrey Czum",
    tag: "Web development",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/6.jpg?raw=true",
  },
  {
    author: "Dominika Roseclay",
    tag: "Web design",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/7.jpg?raw=true",
  },
  {
    author: "Valeria Boltneva",
    tag: "Web development",
    src: "https://github.com/OlgaKoplik/CodePen/blob/master/filterGallery/8.jpg?raw=true",
  },
];

const filters = [
  { name: "Web design", status: false },
  { name: "Graphic design", status: false },
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
            <span>{img.tag}</span>
          </figcaption>
        </figure>
      </li>
    ))}
  </ul>
);

class Portfolio extends React.Component {
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
      <div className="dwk-portfolio px-5 pt-20">
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <div className="text-center">
            <h2 className="title" data-aos="fade-down">
              Portfolio
            </h2>
            <h4 className="subtitle" data-aos="fade-down">
              My Amazing Projects
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
export default Portfolio;
