import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";

const cards = [
  {
    id: 1,
    title: "SpaceX",
    image: image1,
    url: "https://www.spacex.com/",
  },
  {
    id: 2,
    title: "Nasa",
    image: image1,
    url: "https://www.nasa.gov/",
  },
  {
    id: 3,
    title: "Boeing",
    image: image1,
    url: "https://www.boeing.com/",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
