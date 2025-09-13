import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './CodeExample.module.css';

const CodeExample = ({ language, children }) => {
    const [copyText, setCopyText] = useState('העתק');

    const handleCopy = () => {
        navigator.clipboard.writeText(children);
        setCopyText('הועתק!');
        setTimeout(() => {
            setCopyText('העתק');
        }, 2000);
    };

    return (
        <div className={styles.codeContainer}>
            <div className={styles.codeHeader}>
                <span className={styles.language}>{language}</span>
                <button onClick={handleCopy} className={styles.copyButton}>
                    {copyText}
                </button>
            </div>
            <SyntaxHighlighter 
                language={language} 
                style={vscDarkPlus} 
                customStyle={{ 
                    margin: 0, 
                    borderRadius: '0 0 var(--border-radius) var(--border-radius)',
                    border: 'none'
                }}
                codeTagProps={{
                    style: {
                        fontFamily: 'var(--font-family-monospace)'
                    }
                }}
            >
                {String(children).trim()}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeExample;
