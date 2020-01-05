import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };
  static getDerivedStateFromProps({ media }) {
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ medium }) => medium);
    }

    return { photos };
  }

  handleIndexClick = event => {
    this.setState({
      active: +event.target.dataset.index
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="Animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              src={photo}
              alt="animal thumbnail"
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
