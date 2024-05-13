'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

type Theme = 'light' | 'dark'

// Create a ThemeContext
const ThemeContext = createContext<{ theme: Theme; toggleTheme: () => void } | undefined>(undefined)

// Custom hook to manage the theme
function useTheme(): { theme: Theme; toggleTheme: () => void } {
    const context = useContext(ThemeContext)
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }
    return context
}

// ThemeProvider component
interface ThemeProviderProps {
    children: ReactNode
}

{
    /* 
-- if preferred color scheme is changed then the theme will be updated




*/
}

function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme')
            if (storedTheme) {
                return storedTheme as Theme
            } else {
                // if no theme is stored in local storage, then check for browser preference
                // const _prefersDarkMode =
                //   window.matchMedia &&
                //   window.matchMedia('(prefers-color-scheme: dark)').matches;
                const initialTheme = 'light'
                return initialTheme as Theme
            }
        } else {
            return 'light'
        }
    })

    const toggleTheme = () => {
        setTheme((currentTheme) => {
            const newTheme = currentTheme === 'light' ? 'dark' : 'light'
            // cookies.set('theme', newTheme);
            localStorage.setItem('theme', newTheme)
            return newTheme
        })
    }

    useEffect(() => {
        // here everytime the theme changes, the html element will be updated with the new theme
        if (typeof document !== 'undefined') {
            const htmlElement = document.querySelector('html')
            if (htmlElement) {
                htmlElement.className = theme
                htmlElement.setAttribute('data-theme', theme)
            }
        }
    }, [theme])

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export { useTheme, ThemeProvider }
