import React, { useCallback, useMemo, useState } from 'react';
import styles from './ResponsiveImage.module.css';

export default function ResponsiveImage({
  src,
  publicName,
  alt,
  aspectRatio,
  objectFit = 'contain',
  objectPosition = 'center',
  loading = 'lazy',
  srcSet,
  sizes,
  sources = [],
  width,
  height,
  priority = false,
}) {
  const resolvedSrc = useMemo(() => {
    if (publicName) {
      const base = process.env.PUBLIC_URL || '';
      return `${base}/images/${publicName}`;
    }
    return src;
  }, [publicName, src]);
  const [computedRatio, setComputedRatio] = useState(aspectRatio);

  const shouldReserveSpace = useMemo(() => {
    if (computedRatio) return true;
    if (aspectRatio) return true;
    if (width && height) return true;
    return false;
  }, [computedRatio, aspectRatio, width, height]);

  const containerStyle = useMemo(() => {
    if (computedRatio) return { aspectRatio: computedRatio };
    if (aspectRatio) return { aspectRatio };
    if (width && height) return { aspectRatio: `${width} / ${height}` };
    return undefined;
  }, [computedRatio, aspectRatio, width, height]);

  const handleLoad = useCallback((e) => {
    if (!aspectRatio && !width && !height) {
      const img = e.currentTarget;
      if (img.naturalWidth && img.naturalHeight) {
        setComputedRatio(`${img.naturalWidth} / ${img.naturalHeight}`);
      }
    }
  }, [aspectRatio, width, height]);

  const imgLoading = priority ? 'eager' : loading;

  return (
    <div className={styles.container} style={containerStyle}>
      <picture>
        {sources.map((s, i) => (
          <source key={i} type={s.type} srcSet={s.srcSet} sizes={s.sizes} />
        ))}
        <img
          className={shouldReserveSpace ? styles.img : styles.imgAuto}
          src={resolvedSrc}
          alt={alt}
          width={width}
          height={height}
          loading={imgLoading}
          srcSet={srcSet}
          sizes={sizes}
          style={{ objectFit, objectPosition }}
          onLoad={handleLoad}
        />
      </picture>
    </div>
  );
}


