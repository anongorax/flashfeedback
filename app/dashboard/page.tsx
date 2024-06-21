'use client'
import DashboardSkeleton from '@/components/Dashboard.skeleton';
import DashboardShell from '@/components/DashboardShell';
import EmptyState from '@/components/EmptyState';
import { useAuth } from '@/lib/auth'
import useSWR from 'swr';
import { fetcher } from '../../utils/fetcher';
import SitesTable from '@/components/SitesTable';

function page() {
    const auth = useAuth();
    const { data, error, isLoading } = useSWR('/api/sites', fetcher)

    if (isLoading) {
        return <DashboardShell>
            <DashboardSkeleton />
        </DashboardShell>
    }
    if(!auth?.user){
        return <DashboardShell>
            <DashboardSkeleton />
        </DashboardShell>
    }
    return (
        <DashboardShell>
            {data?.sites.length > 0  ? <SitesTable sites={data?.sites} /> : <EmptyState />}
        </DashboardShell>
    )
}

export default page