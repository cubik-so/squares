import React, { forwardRef } from 'react'
import { CreateIcon } from '../../utils/create-icon'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

const IconComponent: React.ForwardRefRenderFunction<SVGSVGElement, Props> = (
    { color, ...props },
    ref,
) => {
    // Assuming CreateIcon returns a ReactElement
    const IconElement = CreateIcon({
        displayName: 'Announcement',
        paths: [
            {
                d: 'M16.36 3.014A27.429 27.429 0 0 1 8.143 8.04l-4.67 1.825a5.126 5.126 0 0 0 1.7 6.34l1.631-.25m9.556-12.94c-.875.234-.824 3.262.114 6.764.938 3.501 2.408 6.15 3.283 5.915M16.36 3.014c.875-.234 2.345 2.414 3.284 5.915.938 3.502.989 6.53.113 6.765m0 0a27.428 27.428 0 0 0-8.595-.382m0 0L13.295 22H8.92l-2.116-6.044m4.358-.644c-.345.04-.69.085-1.034.138l-3.324.506',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        color,
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <IconElement />
}

export const Announcement = forwardRef(IconComponent)
