import React from 'react'
import DashboardShell from './DashboardShell'

function FreePlanEmptyState() {
    return (
        <DashboardShell>
            <h4 className='text-2xl font-bold'>Get Feedback on your site instantly.</h4>
            <p>Start today, the grow with us 🌱</p>
            <button className='mt-3 bg-black text-white py-4 px-3
                rounded-lg border-1'>Upgrade to Starter</button>
        </DashboardShell>
    )
}

export default FreePlanEmptyState