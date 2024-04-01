import React from 'react'

interface Props {
    children: React.ReactNode
}
export const SquaresProvider = ({ children }: Props) => {
    return (
        <>
            <div className="min-h-screen"> {children}</div>
            <div id={'drawer-portal'} className="relative "></div>
            <div id={'dialog-portal'} className="relative"></div>
            <div id={'popover-portal'} className="relative"></div>
        </>
    )
}
