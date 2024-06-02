'use client'
import { ProvideAuth } from '@/lib/auth'

export function Providers({ children }: { children: React.ReactNode }) {
    return <ProvideAuth>
        {children}
    </ProvideAuth>
}