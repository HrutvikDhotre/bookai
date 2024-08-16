import React from 'react'
import CardParent from './CardParent'

const Overview = ({id}) => {
    return (

        <CardParent id={id} title={'Overview'}>
            <p className="mt-2 dark:text-gray-900 text-gray-300 text-sm md:text-base">
                The Book Generator API allows you to generate books on various topics using different language models. This documentation provides details on how to use the API, including authentication, available endpoints, and code examples.
            </p>
        </CardParent>
    )
}

export default Overview
