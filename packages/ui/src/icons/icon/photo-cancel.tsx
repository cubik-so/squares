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
        displayName: 'PhotoCancel',
        paths: [
            {
                d: 'M22 12v-1.728M13 21h-3c-.759 0-1.414 0-1.989-.01M22 10.271A11.545 11.545 0 0 0 19.5 10c-6.18 0-11.222 4.875-11.489 10.99M22 10.271c-.005-2.323-.05-3.57-.545-4.542a5 5 0 0 0-2.185-2.185C18.2 3 16.8 3 14 3h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 5.73C2 6.8 2 8.2 2 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185c.78.397 1.735.505 3.281.534M17 20.95l2.475-2.474m0 0L21.95 16m-2.475 2.475L17 16m2.475 2.475 2.475 2.475M7.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <>{IconElement}</>
}

export const PhotoCancel = forwardRef(IconComponent)
