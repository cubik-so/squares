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
        displayName: 'DeleteDustbin2DuoSolid',
        paths: [
            {
                d: 'M6.5 5C5.94772 5 5.5 5.44772 5.5 6V15.0355C5.49999 15.9373 5.49999 16.6647 5.54038 17.2567C5.58191 17.8654 5.66948 18.4037 5.8806 18.9134C6.38807 20.1386 7.36144 21.1119 8.58658 21.6194C9.09628 21.8305 9.63456 21.9181 10.2433 21.9596C10.8353 22 11.5627 22 12.4645 22H12.5355C13.4373 22 14.1647 22 14.7567 21.9596C15.3654 21.9181 15.9037 21.8305 16.4134 21.6194C17.6386 21.1119 18.6119 20.1386 19.1194 18.9134C19.3305 18.4037 19.4181 17.8654 19.4596 17.2567C19.5 16.6647 19.5 15.9373 19.5 15.0355V6C19.5 5.44772 19.0523 5 18.5 5H6.5Z',
                opacity: 0.28,
                fill: true,
                stroke: false,
            },
            {
                d: 'M16.5 6L15.3944 3.78885C14.8463 2.69253 13.7257 2 12.5 2C11.2743 2 10.1537 2.69253 9.60557 3.78885L8.5 6M4.5 6H20.5',
                stroke: true,
                fill: false,
            },
            { d: 'M10.5 11V16M14.5 11V16', stroke: true, fill: false },
        ],
        viewBox: '0 0 45 45',
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <>{IconElement}</>
}

export const DeleteDustbin2DuoSolid = forwardRef(IconComponent)
