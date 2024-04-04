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
        displayName: 'Heart',
        paths: [
            {
                d: 'M12 21.6592C13 21.6592 22 16.636 22 9.60345C22 4.1659 15.1625 1.32083 12 6.08658C8.83207 1.31266 2 4.16098 2 9.60345C2 16.636 11 21.6592 12 21.6592Z',
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

export const Heart = forwardRef(IconComponent)
