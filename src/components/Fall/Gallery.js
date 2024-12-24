import React, { useState } from 'react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    let images = [];
    try {
        // Dynamically import images from the given folder
        const imagesContext = require.context('../../Assets/Images/Fall', false, /\.(jpg|jpeg|png|gif)$/);

        images = imagesContext.keys().map((key) => ({
            src: imagesContext(key),
            name: key.replace('./', ''),
        }));
    } catch (error) {
        console.error(`Error loading images from folder: Fall`, error);
    }

    const openImage = (image) => setSelectedImage(image);
    const closeImage = () => setSelectedImage(null);

    return (
        <div className="gallery-container">
            {images.length > 0 ? (
                <div className="gallery-grid">
                    {images.map((image, index) => (
                        <div key={index} className="gallery-item" onClick={() => openImage(image)}>
                            <img src={image.src} className="gallery-thumbnail"/>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No images found for the folder "Fall".</p>
            )}

            {selectedImage && (
                <div className="modal" onClick={closeImage}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.src} className="modal-image"/>
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

                .gallery-caption {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    padding: 10px;
                    background: rgba(0, 0, 0, 0.6);
                    color: #fff;
                    text-align: center;
                    font-size: 16px;
                    font-weight: 500;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .gallery-item:hover .gallery-caption {
                    opacity: 1;
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
                    max-width: 100%; /* Ensures the image doesn't exceed the modal's width */
                    max-height: 80vh; /* Limits the image's height to 80% of the viewport height */
                    display: block;
                    margin: 0 auto;
                    object-fit: contain; /* Ensures the image scales nicely without distortion */
                }

                .modal-caption {
                    font-size: 20px;
                    font-weight: 600;
                    color: #333;
                    text-align: center;
                    margin-bottom: 10px;
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
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default Gallery;
