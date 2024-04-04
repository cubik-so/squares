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
        displayName: 'TrophyFilled',
        paths: [
            {
                d: 'M8.49934 2.00006C8.04244 1.99963 7.64857 1.99925 7.29966 2.08302C6.30478 2.32187 5.50771 3.0486 5.17152 4.00013H3.6C2.16406 4.00013 1 5.16418 1 6.60013V8.00013C1 11.0495 3.27454 13.5673 6.22008 13.9498C7.30174 15.5298 9.01634 16.6454 11 16.9292V20.0001H8C7.44772 20.0001 7 20.4478 7 21.0001C7 21.5524 7.44772 22.0001 8 22.0001H16C16.5523 22.0001 17 21.5524 17 21.0001C17 20.4478 16.5523 20.0001 16 20.0001H13V16.9292C14.9837 16.6454 16.6983 15.5298 17.7799 13.9498C20.7255 13.5673 23 11.0495 23 8.00013V6.60013C23 5.16419 21.8359 4.00013 20.4 4.00013H18.8285C18.4923 3.0486 17.6952 2.32187 16.7003 2.08302C16.3514 1.99925 15.9576 1.99963 15.5007 2.00006H8.49934ZM3.6 6.00013H5V10.0001C5 10.536 5.06038 11.0584 5.17476 11.5604C3.88357 10.8971 3 9.55167 3 8.00013V6.60013C3 6.26875 3.26863 6.00013 3.6 6.00013ZM21 8.00013C21 9.55167 20.1164 10.8971 18.8252 11.5604C18.9396 11.0584 19 10.536 19 10.0001V6.00013H20.4C20.7314 6.00013 21 6.26875 21 6.60013V8.00013Z',
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

export const TrophyFilled = forwardRef(IconComponent)
