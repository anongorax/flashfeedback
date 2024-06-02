'use client'

import { ProvideAuth } from '@/lib/auth'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@/styles/Theme'

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={theme}>
        <ProvideAuth>
            {children}
        </ProvideAuth>
    </ChakraProvider>
}