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
        displayName: 'CheckTickCircleFilled',
        paths: [
            {
                d: 'M1.8501 12.0001C1.8501 6.39441 6.39441 1.8501 12.0001 1.8501C17.6058 1.8501 22.1501 6.39441 22.1501 12.0001C22.1501 17.6058 17.6058 22.1501 12.0001 22.1501C6.39441 22.1501 1.8501 17.6058 1.8501 12.0001ZM16.0639 10.672C16.52 10.3606 16.6373 9.73836 16.3258 9.28227C16.0144 8.82618 15.3922 8.70892 14.9361 9.02036L14.8348 9.08953C13.1939 10.21 11.7795 11.6244 10.6609 13.2575L9.20673 11.8049C8.816 11.4146 8.18283 11.4149 7.79252 11.8056C7.4022 12.1964 7.40254 12.8295 7.79327 13.2198L10.1345 15.5585C10.3549 15.7787 10.6653 15.8836 10.974 15.8422C11.2828 15.8008 11.5546 15.6179 11.7093 15.3475C12.7601 13.5099 14.2145 11.9349 15.9626 10.7412L16.0639 10.672Z',
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

export const CheckTickCircleFilled = forwardRef(IconComponent)
