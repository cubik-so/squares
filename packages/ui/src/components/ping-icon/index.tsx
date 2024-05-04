import React from 'react'

const PingIcon = () => {
    return (
        <span className="relative flex h-2 w-2 md:h-3 md:w-3 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-color-fg-positive-base opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-color-fg-positive-base"></span>
        </span>
    )
}

export { PingIcon }
