import React, { useState } from 'react'
import CardParent from './CardParent'
import CodeBlock from './codeexamples/CodeBlock'
import { pythonCode, nodejsCode } from '../data/codedata'
import { TiClipboard } from "react-icons/ti"

const codeExamples = [
    { title: 'Node.js', code: nodejsCode, language: 'javascript' },
    { title: 'Python', code: pythonCode, language: 'python' },
];

const CodeExample = ({ id }) => {
    const [activeTab, setActiveTab] = useState(codeExamples[0].title)
    const [copied, setCopied] = useState(false)

    const handleCopyCode = (code) => {
        navigator.clipboard.writeText(code)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            })
            .catch(err => {
                console.error('Failed to copy code: ', err)
            })
    }

    return (
        <CardParent id={id} title="Code Examples">
            <div className="mb-4">
                <div className="flex border-b border-gray-300">
                    {codeExamples.map((example, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(example.title)}
                            className={`py-2 px-4 transition-colors duration-200 ${activeTab === example.title
                                    ? 'border-b-2 border-blue-500 text-primary '
                                    : 'text-gray-500 dark:text-gray-400 '
                                }`}
                        >
                            {example.title}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                {codeExamples.map((example, index) =>
                    activeTab === example.title ? (
                        <div key={index} className="mt-5 mb-2">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-xl md:text-xl font-semibold dark:text-lightSecondary text-secondary">
                                    {example.title}
                                </h4>
                                <div className="flex items-center">
                                    {copied && (
                                        <span className="bg-gray-100 px-2 py-1 rounded-md text-xs text-gray-500 dark:text-gray-900 font-bold">
                                            Copied to clipboard!
                                        </span>
                                    )}
                                    <button
                                        onClick={() => handleCopyCode(example.code)}
                                        className="text-sm dark:text-gray-900 text-gray-100 flex items-center"
                                    >
                                        <TiClipboard size={25} />
                                    </button>
                                </div>
                            </div>
                            <CodeBlock code={example.code} language={example.language} />
                        </div>
                    ) : null
                )}
            </div>
        </CardParent>
    );
};

export default CodeExample;
