import React, { useEffect } from 'react';
import Prism from 'prismjs';
// import 'prismjs/themes/prism.css';
import '../../styles/prismjs.css'

const CodeBlock = ({ code, language }) => {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return (
        <pre>
            <code className={`language-${language}`}>
                {code}
            </code>
        </pre>
    );
};

export default CodeBlock;
