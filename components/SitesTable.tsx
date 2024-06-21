import React from 'react'
import { Site } from '@/components/Modal'
import Link from 'next/link'

function SitesTable({ sites }: { sites: Site[] }) {
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
                <tbody>
                    {sites.map((site) => (
                        <tr key={site.createdAt} className="odd:bg-white even:bg-slate-300 border-b ">
                            <th scope="row" className="px-6 py-4 text-black capitalize whitespace-nowrap">
                                {site.name}
                            </th>
                            <td className="px-6 py-4 text-black">
                                <Link target='_blank' rel="noopener noreferrer" href={site.site}>{site.site}</Link> 
                            </td>
                            <td className="px-6 py-4 text-black">
                                {site.authorId}
                            </td>
                            <td className="px-6 py-4 text-black">
                                {site.createdAt}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default SitesTable