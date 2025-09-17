import React from 'react';
import styles from './ImageFigure.module.css';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';

const ImageFigure = ({ src, imageName, alt = '', caption, width, aspectRatio, objectFit = 'contain' }) => {
  return (
    <figure className={styles.figure} style={width ? { maxWidth: width } : undefined}>
      <ResponsiveImage src={src} publicName={imageName} alt={alt} aspectRatio={aspectRatio} objectFit={objectFit} />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
};

export default ImageFigure;


