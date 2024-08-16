import React from 'react'
import CardParent from './CardParent'
import { endPointTableData } from '../data/endpointtabledata'


const Endpoints = ({id}) => {
    return (
        <CardParent id={id} title={'Endpoints'}>
            <div className="mt-3 mb-1">
                <h2 className="text-xl font-semibold text-secondary dark:text-lightSecondary">Generate Book</h2>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-2 mb-6">
                <span className="bg-buttonColor text-gray-900 dark:text-white font-medium py-1 px-4 rounded">
                    POST
                </span>
                <span className="bg-primary text-white font-bold text-sm py-3 px-4 rounded">/api/generate-book</span>
            </div>

            <div className="mt-5 mb-2">
                <h2 className="text-md font-semibold text-secondary dark:text-lightSecondary">Request Body</h2>
            </div>

            <div className="mb-8 rounded-lg  overflow-x-auto">
                <table className="min-w-full dark:text-gray-900 text-gray-300 rounded-md border border-gray-700 dark:border-slate-300">
                    <thead className='bg-primary'>
                        <tr>
                            <th className="text-left text-gray-300 dark:text-white text-sm font-semibold px-4 py-2 sm:py-4">PARAMETER</th>
                            <th className="text-left text-gray-300 dark:text-white text-sm font-semibold px-4 py-2 sm:py-4">TYPE</th>
                            <th className="text-left text-gray-300 dark:text-white text-sm font-semibold px-4 py-2 sm:py-4">DESCRIPTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {endPointTableData.map((row, index) => (
                            <tr key={index} className="border-gray-700">
                                <td className="px-4 py-2 sm:py-4 text-hoverColor">{row.parameter}</td>
                                <td className="px-4 py-2 sm:py-4">{row.type}</td>
                                <td className="px-4 py-2 sm:py-4">{row.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-5 mb-2">
                <h2 className="text-md font-semibold text-secondary dark:text-lightSecondary">Response</h2>
            </div>
            <div>
                <pre className="bg-gray-700 dark:bg-gray-100 p-4 rounded-lg shadow-inner text-sm text-white dark:text-gray-900">
                    <code>
                        {`{
  "status": "Generation started",
  "job_id": "unique-job-identifier"
}`}
                    </code>
                </pre>
            </div>
        </CardParent>
    )
}

export default Endpoints
