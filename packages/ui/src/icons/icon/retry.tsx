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
        displayName: 'Retry',
        paths: [
            {
                d: 'M18.9281 15.9999C16.7189 19.8263 11.8262 21.1373 7.99987 18.9281C6.59927 18.1195 4.62787 15.9067 4.15789 13.5826C3.78506 11.7389 4.05722 9.75698 5.07167 7.99991C7.28081 4.17357 12.1735 2.86257 15.9999 5.07171C16.8041 5.53603 17.4972 6.11891 18.0699 6.78551M17.4999 2.47363C18.0091 3.66573 18.3614 4.91832 18.5484 6.2C18.5805 6.41989 18.4578 6.63253 18.2513 6.71469C18.191 6.7387 18.1305 6.7623 18.0699 6.78551M14.4999 7.66979C15.7224 7.5225 16.9213 7.22534 18.0699 6.78551',
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

export const Retry = forwardRef(IconComponent)
