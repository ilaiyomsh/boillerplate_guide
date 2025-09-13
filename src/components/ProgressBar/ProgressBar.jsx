import React from 'react';
import { useProgress } from '../../context/ProgressContext';
import styles from './ProgressBar.module.css';

const ProgressBar = () => {
    const { progress, visitProgress, totalSections, visited, completed } = useProgress();
    const visitedCount = visited.size;
    const completedCount = completed.size;

    return (
        <div className={styles.progressBarContainer}>
            <div className={styles.progressText}>
                <div className={styles.progressLine}>
                    <strong>נצפו:</strong>
                    <span>{`${visitedCount} / ${totalSections}`}</span>
                </div>
                <div className={styles.progressLine}>
                    <strong>הושלמו:</strong>
                    <span>{`${completedCount} / ${totalSections}`}</span>
                </div>
            </div>
            
            <div className={styles.progressBars}>
                <div className={styles.progressBarRow}>
                    <span className={styles.progressLabel}>ביקור</span>
                    <div className={styles.progressBar}>
                        <div 
                            className={`${styles.progressFill} ${styles.visitFill}`}
                            style={{ width: `${visitProgress}%` }} 
                        />
                    </div>
                    <span className={styles.progressPercent}>{visitProgress}%</span>
                </div>
                
                <div className={styles.progressBarRow}>
                    <span className={styles.progressLabel}>השלמה</span>
                    <div className={styles.progressBar}>
                        <div 
                            className={`${styles.progressFill} ${styles.completeFill}`}
                            style={{ width: `${progress}%` }} 
                        />
                    </div>
                    <span className={styles.progressPercent}>{progress}%</span>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
