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
        displayName: 'User3',
        paths: [
            {
                d: 'M19 3c1.725.458 3 2.076 3 4s-1.275 3.541-3 4M5 3c-1.725.458-3 2.076-3 4s1.275 3.541 3 4m17.153 5.376c.53.646.847 1.473.847 2.374 0 .712-.33 1.347-.847 1.76M1.847 16A3.735 3.735 0 0 0 1 18.374c0 .712.33 1.347.847 1.76M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM7.25 21h9.5A2.25 2.25 0 0 0 19 18.75 3.75 3.75 0 0 0 15.25 15h-6.5A3.75 3.75 0 0 0 5 18.75 2.25 2.25 0 0 0 7.25 21Z',
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

export const User3 = forwardRef(IconComponent)
