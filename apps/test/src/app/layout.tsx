'use client'

import { SquaresProvider } from '@squaress/ui'
import type { Metadata } from 'next'
import './globals.css'

import '@squaress/ui/styles.css'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <SquaresProvider>{children}</SquaresProvider>
        </html>
    )
}
