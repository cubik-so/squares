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
        displayName: 'Upload',
        paths: [
            {
                d: 'M3 15a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5M9 6.812a15.001 15.001 0 0 1 2.556-2.655A.703.703 0 0 1 12 4m3 2.812a15 15 0 0 0-2.556-2.655A.703.703 0 0 0 12 4m0 0v11',
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

export const Upload = forwardRef(IconComponent)
