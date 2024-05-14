import React from 'react'
import { ThemeProvider } from '@/hooks/useTheme'

/**
 * SquaresProvider is a layout component that sets up a consistent environment for managing portals used in the application.
 * This provider component encapsulates children components and predefined portal targets for modals, drawers, and popovers.
 *
 * It ensures that there are dedicated DOM nodes (`div` elements) for different UI layers to render things like drawers, dialogs,
 * and popovers in an isolated part of the DOM tree. This helps avoid z-index and overflow issues common with deeply nested components.
 *
 * Props:
 * - `children`: ReactNode. The child components that will be wrapped by the environment setup. Typically, these would be components
 *   that make up the main part of the application's UI.
 *
 * Example Usage:
 * ```jsx
 * <SquaresProvider>
 *   <App />
 * </SquaresProvider>
 * ```
 */
interface Props {
    children: React.ReactNode
}
export const SquaresProvider = ({ children }: Props) => {
    return (
        <body>
            <ThemeProvider>
                <div className="min-h-screen">{children}</div>
                <div id={'drawer-portal'} className="relative "></div>
                <div id={'dialog-portal'} className="relative"></div>
                <div id={'popover-portal'} className="relative"></div>
            </ThemeProvider>
        </body>
    )
}
