'use client'

import { SquaresProvider } from '@squares/ui'
import type { Metadata } from 'next'
import './globals.css'

import '@squares/ui/styles.css'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <SquaresProvider>
                <body>{children}</body>
            </SquaresProvider>
        </html>
    )
}
