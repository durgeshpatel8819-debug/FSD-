import React, { useEffect, useState } from 'react'

const ImagesSlider = () => {
    const [index, setIndex] = useState(0);

    const images = [
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 1000);

        return () => clearInterval(interval);
    }, [])

    return (
        <div>
            <h1>Image Slider</h1>

            <img
                src={images[index]}
                alt="img-here"
                style={{ height: "200px", width: "200px" }}
            />
        </div>
    )
}

export default ImagesSlider