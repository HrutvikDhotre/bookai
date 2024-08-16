import React from 'react';
import CardParent from './CardParent';

const steps = [
    {
        title: 'Step 1: Obtain an API Key',
        description: 'Generate an API key using the button in the Authentication section above.'
    },
    {
        title: 'Step 2: Make a Request',
        description: 'Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.'
    },
    {
        title: 'Step 3: Handle the Response',
        description: 'The API will return a response with a job ID. You can use this ID to check the status of your book generation job.'
    },
    {
        title: 'Step 4: Retrieve the Generated Book',
        description: 'Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented.'
    }
];

const Tutorial = ({ id }) => {
    return (
        <CardParent id={id} title={'Tutorial'}>
            {steps.map((step, index) => (
                <div key={index} className='my-10'>
                    <h3 className="text-xl md:text-xl font-semibold dark:text-lightSecondary text-secondary">
                        {step.title}
                    </h3>
                    <p className="my-2 dark:text-gray-900 text-gray-300 text-sm md:text-base">
                        {step.description}
                    </p>
                </div>
            ))}
        </CardParent>
    );
};

export default Tutorial;
