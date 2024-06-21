import React from 'react'

function DashboardSkeleton() {
    const fourSkeleton = [1, 2, 3, 4];
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full h-full">
            <table className="w-full text-sm text-left rtl:text-right ">
                <thead className="text-xs  uppercase bg-slate-300 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Site
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Feedback Link
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Date Added
                        </th>

                    </tr>
                </thead>
                <tbody>{fourSkeleton.map(val => (
                    <tr key={val} className="odd:bg-white even:bg-slate-300 border-b ">
                        <th scope="row" className="px-6 py-4 text-black capitalize whitespace-nowrap">
                            <div role="status" className="animate-pulse">
                                <div
                                    className="h-2.5 bg-gray-300 rounded-full
                                 dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"/>
                            </div>
                        </th>
                        <td className="px-6 py-4 text-black">
                            <div role="status" className="animate-pulse">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto" />
                            </div>
                        </td>
                        <td className="px-6 py-4 text-black">
                            <div role="status" className="animate-pulse">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto" />
                            </div>
                        </td>
                        <td className="px-6 py-4 text-black">
                            <div role="status" className="animate-pulse">
                                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto" />
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default DashboardSkeleton