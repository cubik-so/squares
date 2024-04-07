import React from 'react'

/**
 * A LoadingIcon component that renders a SVG loading indicator.
 * This component displays a circular icon intended to depict a loading state in the UI.
 *
 * The SVG consists of two main parts:
 * 1. A greyed-out circle that serves as a background.
 * 2. A semi-circle that visually represents progress or loading activity.
 *
 * The icon uses `currentColor` for its stroke to inherit the color from its parent's text color,
 * making it flexible for use in various places across an interface.
 *
 * Props:
 * - None
 *
 * Example Usage:
 * ```jsx
 * <LoadingIcon />
 * ```
 */
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
