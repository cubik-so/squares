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
        displayName: 'UserLove',
        paths: [
            {
                d: 'M9 15H7C4.79086 15 3 16.7909 3 19C3 20.1046 3.89543 21 5 21H11M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7ZM17 21C16.6 21 13 19.0556 13 16.3335C13 14.9724 14.2 14.0003 15.4 14.0003C15.9896 14.0003 16.6 14.1947 17 14.778C17.4 14.1947 18 13.9918 18.6 14.0003C19.8 14.0171 21 14.9724 21 16.3335C21 19.0556 17.4 21 17 21Z',
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

export const UserLove = forwardRef(IconComponent)
