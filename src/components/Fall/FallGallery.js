import React from 'react';
import Gallery from './Gallery';

const FallGallery = () => {
    const folderName = 'Fall'; // Pass the folder name as a string
    return (
        <div>
            <Gallery folderName={folderName} />
        </div>
    );
};

export default FallGallery;
