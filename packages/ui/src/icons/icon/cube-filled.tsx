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
        displayName: 'CubeFilled',
        paths: [
            {
                d: 'M11.1521 1.58569C11.7113 1.47176 12.2888 1.47176 12.8479 1.58569C13.4842 1.71535 14.0667 2.03817 14.8558 2.47548L19.1173 4.83402C19.902 5.26774 20.488 5.59161 20.9281 6.06014C20.939 6.07172 20.9498 6.08336 20.9605 6.09506L11.9999 10.8672L3.03946 6.0951C3.0502 6.08339 3.06102 6.07173 3.07191 6.06014C3.51198 5.59161 4.09801 5.26773 4.88278 4.83401L9.14419 2.47548C9.9333 2.03817 10.5158 1.71535 11.1521 1.58569Z',
                fill: true,
                stroke: false,
            },
            {
                d: 'M2.10661 7.86425C1.99905 8.37575 1.99945 8.93979 1.99994 9.63523V14.3653C1.99933 15.2295 1.99886 15.8907 2.20552 16.5005C2.38715 17.0363 2.68322 17.5265 3.07191 17.9403C3.51198 18.4089 4.09801 18.7328 4.88279 19.1665L9.1442 21.525C9.87 21.9272 10.4211 22.2326 11 22.3799L10.9999 12.6006L2.10661 7.86425Z',
                fill: true,
                stroke: false,
            },
            {
                d: 'M13 22.3799C13.5789 22.2327 14.13 21.9273 14.8558 21.525L19.1172 19.1665C19.902 18.7328 20.488 18.4089 20.9281 17.9403C21.3168 17.5265 21.6129 17.0363 21.7945 16.5005C22.0012 15.8907 22.0007 15.2294 22.0001 14.3652V9.63524C22.0006 8.93977 22.001 8.37571 21.8934 7.86418L12.9999 12.6006L13 22.3799Z',
                fill: true,
                stroke: false,
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

export const CubeFilled = forwardRef(IconComponent)
