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
        displayName: 'Send1',
        paths: [
            {
                d: 'm9.54 14.46-5.477-2.985c-1.429-.78-1.414-2.834.025-3.574a51.43 51.43 0 0 1 12.558-4.507c1.254-.274 2.687-.83 3.739.221 1.052 1.052.495 2.485.221 3.74A51.436 51.436 0 0 1 16.1 19.911c-.74 1.44-2.794 1.454-3.574.025L9.54 14.46Zm0 0 3.308-3.308',
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

export const Send1 = forwardRef(IconComponent)
