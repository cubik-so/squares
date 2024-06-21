import React from 'react'
import { TabNav, Theme } from '@radix-ui/themes'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import '@radix-ui/themes/styles.css'

export const TabNavRoot = ({ children }: { children: React.ReactNode }) => {
    return <TabNav.Root>{children}</TabNav.Root>
}

export const TabNavLink = ({
    linkHref,
    tabName,
    asChild,
}: {
    linkHref: string
    tabName: string
    asChild: boolean
}) => {
    const { pathname } = useRouter()
    const isActive = pathname === linkHref

    if (asChild) {
        return (
            <Theme>
                <TabNav.Link asChild active={isActive}>
                    <NextLink href={linkHref}>{tabName}</NextLink>
                </TabNav.Link>
            </Theme>
        )
    }

    return (
        <Theme>
            <TabNav.Link href={linkHref} active={isActive}>
                {tabName}
            </TabNav.Link>
        </Theme>
    )
}
