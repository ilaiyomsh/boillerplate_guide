import React from 'react';
import styles from './ImageFigure.module.css';

const ImageFigure = ({ src, alt = '', caption, width }) => {
  return (
    <figure className={styles.figure} style={width ? { maxWidth: width } : undefined}>
      <img className={styles.image} src={src} alt={alt} />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
};

export default ImageFigure;


