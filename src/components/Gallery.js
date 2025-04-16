import React, { useEffect, useState } from 'react';

const Gallery = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/<username>/<repo>/main/gallery.json')
            .then(res => res.json())
            .then(data => {
                if (data[category]) {
                    const sortedImages = data[category].sort((a, b) => a.order - b.order);
                    setImages(sortedImages);
                } else {
                    console.warn(`Category "${category}" not found.`);
                    setImages([]);
                }
            })
            .catch(err => console.error('Error loading images:', err));
    }, [category]);

    return (
        <div className="gallery">
            {images.map((img, index) => (
                <img
                    key={index}
                    src={`https://raw.githubusercontent.com/<username>/<repo>/main/images/${img.url}`}
                    alt={`${category} ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default Gallery;
