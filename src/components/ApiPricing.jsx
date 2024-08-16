import React from 'react'
import CardParent from './CardParent'
import { apiPricingTableData } from '../data/apipricing'


const ApiPricing = ({id}) => {
    return (
        <CardParent id={id} title={'API Pricing'}>
            <p className="my-2 dark:text-gray-900 text-gray-300 text-sm md:text-base">
                Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
            </p>

            <div className="mb-8 rounded-lg  overflow-x-auto">
                <table className="min-w-full dark:text-gray-900 text-gray-300 rounded-md border border-gray-700 dark:border-slate-300">
                    <thead className='bg-primary'>
                        <tr>
                            <th className="text-left text-gray-300 dark:text-white text-sm font-semibold px-4 py-2 sm:py-4">API</th>
                            <th className="text-left text-gray-300 dark:text-white text-sm font-semibold px-4 py-2 sm:py-4">MODEL</th>
                            <th className="text-left text-gray-300 dark:text-white text-sm font-semibold px-4 py-2 sm:py-4">Price Per 1K Token</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apiPricingTableData.map((row, index) => (
                            <tr key={index} className="border-gray-700">
                                <td className="px-4 py-2 sm:py-4">{row.api}</td>
                                <td className="px-4 py-2 sm:py-4">{row.model}</td>
                                <td className="px-4 py-2 sm:py-4">{row.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                <h3 className="text-xl md:text-xl font-semibold dark:text-lightSecondary text-secondary">Token Estimation</h3>
                <p className="my-2 dark:text-gray-900 text-gray-300 text-sm md:text-base">On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.</p>
            </div>

            <div>
                <h4 className="text-xl md:text-xl font-semibold dark:text-lightSecondary text-secondary">Billing</h4>
                <p className="my-2 dark:text-gray-900 text-gray-300 text-sm md:text-base">You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.</p>
            </div>

        </CardParent>
    )
}

export default ApiPricing
