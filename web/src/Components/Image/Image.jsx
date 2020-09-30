import React from "react";

export default function Image({ image, alt }) {
  return <img src={image} alt={alt || "image"} loading='lazy' width='300px' height='300px' />;
}
