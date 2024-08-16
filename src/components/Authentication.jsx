import React, { useState } from 'react'
import CardParent from './CardParent'
import { TiClipboard } from "react-icons/ti"

const Authentication = ({ id }) => {
    const [apiKey, setApiKey] = useState(null)
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

    const generateApiKey = () => {
        const newApiKey = `key-${Math.random().toString(36).substring(2, 15)}-${Math.random().toString(36).substring(2, 15)}`;
        setApiKey(newApiKey);
    };

    return (
        <CardParent id={id} title={'Authentication'}>
            <p className="mt-2 text-gray-300 dark:text-gray-900">
                To use the API, you need to include your API key in the header of each request:
            </p>
            <div className="bg-gray-700 dark:bg-gray-100 dark:font-bold mt-2 p-4 rounded-lg shadow-inner">
                <code className="text-lg text-blue-400">X-API-Key: YOUR_API_KEY</code>
            </div>
            <p className="mt-2 text-gray-300 dark:text-gray-900">
                You can generate an API key by clicking the button below:
            </p>
            <div className="my-4">
                <button
                    onClick={generateApiKey}
                    className={`bg-buttonColor text-gray-900 dark:text-white font-medium pt-2 pb-2 px-4 rounded transition-transform duration-200 transform ${apiKey ? 'cursor-not-allowed opacity-50' : 'hover:-translate-y-0.5'
                        }`}
                    disabled={apiKey}
                >
                    Generate API Key
                </button>

            </div>

            <div className={`mt-4 bg-gray-700 dark:bg-gray-100 dark:font-bold p-4 rounded-lg shadow-inner ${!apiKey ? 'py-7' : ''}`}>
                {apiKey && <div className="relative">
                    <div className="absolute top-1 right-0">
                        <button
                            onClick={() => handleCopyCode(apiKey)}
                            className="text-sm dark:text-gray-900 text-gray-100 float-right"
                        >
                            <TiClipboard size={20} />
                        </button>
                        {copied && (
                            <span className="px-2 py-1 rounded-md text-xs text-gray-100 dark:text-gray-900 ml-2 float-right mb-1">
                                Copied!
                            </span>
                        )}
                    </div>
                </div>}
                <code className="text-lg text-blue-400  block">
                    {apiKey && `YOUR API Key: ${apiKey}`}
                </code>
            </div>



        </CardParent>
    );
};

export default Authentication;
