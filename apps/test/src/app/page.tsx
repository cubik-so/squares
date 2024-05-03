'use client'

import { Button, useTheme } from '@squaress/ui'
import { Text, ToggleSwitch } from '@squaress/ui'

export default function Home() {
    const { toggleTheme, theme } = useTheme()
    return (
        <main className=" bg-body-surface flex min-h-screen flex-col items-center justify-center gap-8 p-24">
            <Text className="h1">alksdjfklj</Text>
            <Button>sadf</Button>
            <ToggleSwitch onChange={toggleTheme} size="sm" checked={theme === 'dark'} />
        </main>
    )
}
