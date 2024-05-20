import React from 'react'

interface IconOptions extends React.SVGProps<SVGSVGElement> {
    displayName: string
    paths: { d: string; opacity?: number; fill: boolean; stroke: boolean }[]
    gpaths?: { d: string; opacity?: number; fill: boolean; stroke: boolean }[]
    viewBox: string
    color?: string
}

export function CreateIcon(options: IconOptions) {
    const { viewBox, paths, displayName, color, height, width, strokeWidth } = options

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
            width={width ?? '24'}
            height={height ?? '24'}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={options.fill ? color : 'none'}
            stroke={options.stroke ? color : 'none'}
            clipRule="evenodd"
            fillRule="evenodd"
            strokeWidth={strokeWidth}
            {...props}
        >
            {renderedPaths}
        </svg>
    )

    Comp.displayName = displayName

    return Comp
}
