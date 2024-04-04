import React from 'react'

interface IconOptions extends React.SVGProps<SVGSVGElement> {
    displayName: string
    paths: { d: string; opacity?: number; fill: boolean; stroke: boolean }[]
    gpaths?: { d: string; opacity?: number; fill: boolean; stroke: boolean }[]
    viewBox: string
    color?: string
}

export function CreateIcon(options: IconOptions) {
    const { viewBox, paths, displayName, color } = options

    console.log('color', color)

    const renderedPaths = paths.map((value, index) => (
        <path
            key={index}
            d={value.d}
            fill={value.fill ? color : 'none'}
            stroke={value.stroke ? color : 'none'}
            opacity={value.opacity || 1}
        />
    ))

    const Comp = (props: any) => (
        <svg
            width="24"
            height="24"
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            clipRule="evenodd"
            fillRule="evenodd"
            {...props}
        >
            {renderedPaths}
        </svg>
    )

    Comp.displayName = displayName

    return Comp
}
