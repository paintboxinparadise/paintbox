import React, { useEffect, useState } from 'react';

const Gallery = ({ category }) => {
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const username = 'paintboxinparadise';
        const repo = 'paintbox';
        const branch = 'master';

        fetch(`https://api.github.com/repos/${username}/${repo}/contents/src/Assets/Images/${category}?ref=${branch}`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    const imageUrls = data
                        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name))
                        .map(file => file.download_url);
                    setImages(imageUrls);
                } else {
                    console.warn(`Category "${category}" not found or empty.`);
                    setImages([]);
                }
            })
            .catch(err => console.error('Error loading images:', err));
    }, [category]);

    const openImage = (url) => setSelectedImage(url);
    const closeImage = () => setSelectedImage(null);

    return (
        <div className="gallery-container">
            {images.length > 0 ? (
                <div className="gallery-grid">
                    {images.map((url, index) => (
                        <div key={index} className="gallery-item" onClick={() => openImage(url)}>
                            <img src={url} className="gallery-thumbnail" alt={`${category} ${index + 1}`} />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No images found for the category "{category}".</p>
            )}

            {selectedImage && (
                <div className="modal" onClick={closeImage}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} className="modal-image" />
                        <button className="close-button" onClick={closeImage}>&times;</button>
                    </div>
                </div>
            )}

            <style jsx>{`
                .gallery-container {
                    padding: 30px;
                    background-color: #f8f9fa;
                    display: flex;
                    justify-content: center;
                }

                .gallery-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                    gap: 20px;
                    max-width: 1200px;
                    width: 100%;
                }

                .gallery-item {
                    position: relative;
                    overflow: hidden;
                    border-radius: 12px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }

                .gallery-item:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
                }

                .gallery-thumbnail {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.3s ease;
                }

                .gallery-item:hover .gallery-thumbnail {
                    transform: scale(1.1);
                }

                .modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.9);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    animation: fadeIn 0.3s ease-in-out;
                }

                .modal-content {
                    position: relative;
                    background: #fff;
                    padding: 30px;
                    border-radius: 16px;
                    max-width: 800px;
                    width: 100%;
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                }

                .modal-image {
                    width: auto;
                    max-width: 100%;
                    max-height: 80vh;
                    display: block;
                    margin: 0 auto;
                    object-fit: contain;
                }

                .close-button {
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: #e74c3c;
                    color: #fff;
                    border: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    font-size: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
                    transition: background 0.3s ease;
                }

                .close-button:hover {
                    background: #c0392b;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default Gallery;