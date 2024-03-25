import React, { forwardRef } from 'react'

interface IconOptions extends React.SVGProps<SVGSVGElement> {
    name: string
    displayName: string
    paths: { d: string; opacity?: number; fill: boolean; stroke: boolean }[]
    gpaths?: { d: string; opacity?: number; fill: boolean; stroke: boolean }[]
    viewBox: string
}

export function CreateIcon(options: IconOptions) {
    const { viewBox, paths, name, displayName } = options

    const renderedPaths = paths.map((value, index) => (
        <path
            key={index}
            // fillRule="evenodd"
            // clipRule="evenodd"
            d={value.d}
            fill={value.fill || 'none'} // default to 'none' if fill is not true
            stroke={value.stroke || 'none'} // default to 'none' if stroke is not true
            opacity={value.opacity || 1}
        />
    ))

    const Comp = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>((props, ref) => (
        <svg ref={ref} width="24" height="24" viewBox={viewBox} fill="none" {...props}>
            {renderedPaths}
        </svg>
    ))

    Comp.displayName = displayName

    return Comp
}
