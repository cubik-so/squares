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
        displayName: 'ServerFilled',
        paths: [
            {
                d: 'M2 6.4C2 4.52223 3.52223 3 5.4 3H18.6C20.4778 3 22 4.52223 22 6.4V7.6C22 9.47777 20.4778 11 18.6 11H5.4C3.52223 11 2 9.47777 2 7.6V6.4ZM14 6C13.4477 6 13 6.44772 13 7C13 7.55228 13.4477 8 14 8C14.5523 8 15 7.55228 15 7C15 6.44772 14.5523 6 14 6ZM18 6C17.4477 6 17 6.44772 17 7C17 7.55228 17.4477 8 18 8C18.5523 8 19 7.55228 19 7C19 6.44772 18.5523 6 18 6Z',
                fill: true,
                stroke: false,
            },
            {
                d: 'M2 16.4C2 14.5222 3.52223 13 5.4 13H18.6C20.4778 13 22 14.5222 22 16.4V17.6C22 19.4778 20.4778 21 18.6 21H5.4C3.52223 21 2 19.4778 2 17.6V16.4ZM14 16C13.4477 16 13 16.4477 13 17C13 17.5523 13.4477 18 14 18C14.5523 18 15 17.5523 15 17C15 16.4477 14.5523 16 14 16ZM18 16C17.4477 16 17 16.4477 17 17C17 17.5523 17.4477 18 18 18C18.5523 18 19 17.5523 19 17C19 16.4477 18.5523 16 18 16Z',
                fill: true,
                stroke: false,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <>{IconElement}</>
}

export const ServerFilled = forwardRef(IconComponent)
