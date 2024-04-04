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
        displayName: 'LinkSlant',
        paths: [
            {
                d: 'M14.121 9.879 9.88 14.12m.707-7.778.707-.707a5 5 0 0 1 7.071 7.071l-.707.707M6.343 10.586l-.707.707a5 5 0 1 0 7.071 7.071l.707-.707',
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

export const LinkSlant = forwardRef(IconComponent)
