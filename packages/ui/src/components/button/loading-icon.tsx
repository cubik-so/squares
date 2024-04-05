import React from 'react'

const LoadingIcon = () => {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="9"
                cy="9"
                r="7"
                stroke="currentColor"
                strokeOpacity="0.1"
                strokeWidth="2.5"
            />
            <path
                d="M16 9C16 5.13401 12.866 2 9 2"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
        </svg>
    )
}

export default LoadingIcon
