import React, { useEffect, useState } from 'react';

const ImageAnimation = () => {

    const [position, setPosition] = useState(0);

    useEffect(() => {

        const positions = [-200, 0, 200, 0];

        let index = 0;

        const interval = setInterval(() => {
            setPosition(positions[index]);
            index = (index + 1) % positions.length;
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    return (
        <div
            style={{
                textAlign: 'center',
                overflow: 'hidden',
                padding: '20px'
            }}
        >
            <h1>Image Animation</h1>

            <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"
                alt="Animated wallpaper"
                style={{
                    width: '300px',
                    height: '300px',
                    objectFit: 'cover',
                    transform: `translateX(${position}px)`,
                    transition: 'transform 0.5s ease-in-out'
                }}
            />
        </div>
    );
};

export default ImageAnimation;