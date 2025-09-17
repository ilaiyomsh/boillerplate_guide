import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ResponsiveImage from '../ResponsiveImage/ResponsiveImage';
import styles from './UploadImage.module.css';

export default function UploadImage({
  defaultAspect,
  mode = 'contain', // 'cover' | 'contain'
}) {
  const [fileUrl, setFileUrl] = useState(null);
  const [error, setError] = useState(null);

  const objectFit = useMemo(() => (mode === 'contain' ? 'contain' : 'cover'), [mode]);

  const onChange = useCallback((e) => {
    setError(null);
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('נא לבחור קובץ תמונה');
      return;
    }

    const url = URL.createObjectURL(file);
    setFileUrl((prev) => {
      if (prev) URL.revokeObjectURL(prev);
      return url;
    });
  }, []);

  useEffect(() => {
    return () => {
      if (fileUrl) URL.revokeObjectURL(fileUrl);
    };
  }, [fileUrl]);

  return (
    <div className={styles.wrapper}>
      <label className={styles.uploader}>
        <input className={styles.input} type="file" accept="image/*" onChange={onChange} />
        <span>בחרו תמונה להעלאה</span>
      </label>

      {error && <div className={styles.error}>{error}</div>}

      {fileUrl && (
        <div className={styles.preview}>
          <ResponsiveImage
            src={fileUrl}
            alt="תצוגה מקדימה"
            aspectRatio={defaultAspect}
            objectFit={objectFit}
            priority
          />
        </div>
      )}
    </div>
  );
}


