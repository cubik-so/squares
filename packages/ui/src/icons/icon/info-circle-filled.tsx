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
        displayName: 'InfoCircleFilled',
        paths: [
            {
                d: 'M2 12.8955C2 7.37266 6.47715 2.89551 12 2.89551C17.5228 2.89551 22 7.37266 22 12.8955C22 18.4184 17.5228 22.8955 12 22.8955C6.47715 22.8955 2 18.4184 2 12.8955ZM13 9.51941C13 8.96712 12.5523 8.51941 12 8.51941C11.4477 8.51941 11 8.96712 11 9.51941V9.52053C11 10.0728 11.4477 10.5205 12 10.5205C12.5523 10.5205 13 10.0728 13 9.52053V9.51941ZM13 12.8955C13 12.3433 12.5523 11.8955 12 11.8955C11.4477 11.8955 11 12.3433 11 12.8955V16.8955C11 17.4478 11.4477 17.8955 12 17.8955C12.5523 17.8955 13 17.4478 13 16.8955V12.8955Z',
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

export const InfoCircleFilled = forwardRef(IconComponent)
