import React from 'react'

const CardParent = ({ title,id, children }) => {
    return (
        <>
            <div id={id} className="bg-gray-800 dark:bg-white p-6 sm:p-8 md:p-8 lg:p-8 xl:p-8 rounded-lg shadow-custom mx-4 sm:mx-8 lg:mx-16 xl:mx-48">
                <h2 className="text-xl md:text-2xl mb-2 font-semibold dark:text-lightSecondary text-secondary">{title}</h2>
               
                {children}
            </div>
        </>
    )
}

export default CardParent