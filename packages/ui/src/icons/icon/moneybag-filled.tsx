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
        displayName: 'MoneybagFilled',
        paths: [
            {
                d: 'M15.9008 5.12777C16.3202 4.00921 15.8951 2.7085 14.7491 2.37098C13.8951 2.11945 12.9773 2 11.9997 2C11.0221 2 10.1043 2.11945 9.25029 2.37098C8.10435 2.7085 7.67915 4.00921 8.09861 5.12777L8.70194 6.73666L8.66636 6.75H15.333L15.2975 6.73666L15.9008 5.12777ZM3.85123 19.0302C3.29425 18.1904 3.00001 17.178 3 16C3.45007 12.8495 5.52061 10.5093 7.75299 8.25H16.3521C18.4405 10.4656 20.5457 12.82 21 16C21 17.178 20.7058 18.1904 20.1488 19.0302C19.5957 19.8642 18.8228 20.469 17.9544 20.9025C16.2468 21.7548 14.0585 22 12 22C9.94146 22 7.75317 21.7548 6.04565 20.9025C5.17717 20.469 4.40435 19.8642 3.85123 19.0302Z',
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

export const MoneybagFilled = forwardRef(IconComponent)
