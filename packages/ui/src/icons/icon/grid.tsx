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
        displayName: 'Grid',
        paths: [
            {
                d: 'M5.16667 17.5C4.23325 17.5 3.76654 17.5 3.41002 17.3183C3.09641 17.1586 2.84145 16.9036 2.68166 16.59C2.5 16.2335 2.5 15.7668 2.5 14.8333L2.5 14.3333C2.5 13.3999 2.5 12.9332 2.68166 12.5767C2.84145 12.2631 3.09641 12.0081 3.41002 11.8483C3.76654 11.6667 4.23325 11.6667 5.16667 11.6667H14.8333C15.7668 11.6667 16.2335 11.6667 16.59 11.8483C16.9036 12.0081 17.1586 12.2631 17.3183 12.5767C17.5 12.9332 17.5 13.3999 17.5 14.3333V14.8333C17.5 15.7668 17.5 16.2335 17.3183 16.59C17.1586 16.9036 16.9036 17.1586 16.59 17.3183C16.2335 17.5 15.7668 17.5 14.8333 17.5H5.16667ZM11.6667 14.3333V3.66667C11.6667 2.73325 11.6667 2.26654 11.8483 1.91002C12.0081 1.59641 12.2631 1.34145 12.5767 1.18166C12.9332 1 13.3999 1 14.3333 1H14.8333C15.7668 1 16.2335 1 16.59 1.18166C16.9036 1.34145 17.1586 1.59641 17.3183 1.91002C17.5 2.26654 17.5 2.73325 17.5 3.66667V14.3333C17.5 15.2668 17.5 15.7335 17.3183 16.09C17.1586 16.4036 16.9036 16.6586 16.59 16.8183C16.2335 17 15.7668 17 14.8333 17H14.3333C13.3999 17 12.9332 17 12.5767 16.8183C12.2631 16.6586 12.0081 16.4036 11.8483 16.09C11.6667 15.7335 11.6667 15.2668 11.6667 14.3333Z',
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

export const Grid = forwardRef(IconComponent)
