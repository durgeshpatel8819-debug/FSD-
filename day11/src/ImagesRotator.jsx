import { useState } from "react";

const App = () => {
  const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"
  ];

  const [rotate, setRotate] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Image Slider</h1>

      <img
        src={images[0]}
        alt="img-here"
        style={{
          width: "200px",
          height: "200px",
          transform: `rotate(${rotate}deg)`
        }}
      />

      <br />

      <button onClick={() => setRotate(rotate - 90)}>
        Left
      </button>

      <button onClick={() => setRotate(rotate + 90)}>
        Right
      </button>
    </div>
  );
};

export default App;