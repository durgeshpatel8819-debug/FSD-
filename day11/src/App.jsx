import { useState } from "react";

const App = () => {
  const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800"
  ];

  const [index, setIndex] = useState(0);

  const left = () => {
    console.log("Left button clicked");
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const right = () => {
    console.log("Right button clicked");
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ backgroundColor: "black", color: "white" }}>
        Image Slider
      </h1>

      <img
        src={images[index]}
        alt="img-here"
        style={{
          width: "200px",
          height: "200px"
        }}
      />

      <br />

      <button onClick={left}>Left</button>
      <button onClick={right}>Right</button>
    </div>
  );
};

export default App;