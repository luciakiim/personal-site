/* eslint-disable */
import React from 'react';
import Gallery from 'react-grid-gallery';
import { IMAGES } from '../../data/about/images';

const PhotoGrid = () => (
    <>
        <Gallery images={IMAGES}/>
    </>
);

export default PhotoGrid;