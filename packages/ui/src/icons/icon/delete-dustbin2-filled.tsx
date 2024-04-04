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
        displayName: 'DeleteDustbin2Filled',
        paths: [
            {
                d: 'M8.71115 3.34164C9.4287 1.90653 10.8955 1 12.5 1C14.1045 1 15.5713 1.90653 16.2889 3.34164L17.118 5H20.5C21.0523 5 21.5 5.44772 21.5 6C21.5 6.55229 21.0523 7 20.5 7H19.5V15.0355C19.5 15.9373 19.5 16.6647 19.4596 17.2567C19.4181 17.8654 19.3305 18.4037 19.1194 18.9134C18.6119 20.1386 17.6386 21.1119 16.4134 21.6194C15.9037 21.8305 15.3654 21.9181 14.7567 21.9596C14.1647 22 13.4373 22 12.5355 22H12.4645C11.5627 22 10.8353 22 10.2433 21.9596C9.63456 21.9181 9.09628 21.8305 8.58658 21.6194C7.36144 21.1119 6.38807 20.1386 5.8806 18.9134C5.66948 18.4037 5.58191 17.8654 5.54038 17.2567C5.49999 16.6647 5.49999 15.9373 5.5 15.0355L5.5 7H4.5C3.94772 7 3.5 6.55229 3.5 6C3.5 5.44772 3.94772 5 4.5 5H7.88197L8.71115 3.34164ZM10.118 5L10.5 4.23607C10.8788 3.47852 11.653 3 12.5 3C13.347 3 14.1212 3.47852 14.5 4.23607L14.882 5H10.118ZM11.5 11C11.5 10.4477 11.0523 10 10.5 10C9.94772 10 9.5 10.4477 9.5 11V16C9.5 16.5523 9.94772 17 10.5 17C11.0523 17 11.5 16.5523 11.5 16V11ZM15.5 11C15.5 10.4477 15.0523 10 14.5 10C13.9477 10 13.5 10.4477 13.5 11V16C13.5 16.5523 13.9477 17 14.5 17C15.0523 17 15.5 16.5523 15.5 16V11Z',
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

export const DeleteDustbin2Filled = forwardRef(IconComponent)
