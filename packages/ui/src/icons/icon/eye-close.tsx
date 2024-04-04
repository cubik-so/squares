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
        displayName: 'EyeClose',
        paths: [
            {
                d: 'M3 14c0-2.188 2.7-7 9-7 1.623 0 3.008.32 4.169.831M13 14.829A3.009 3.009 0 0 0 14.83 13M9.88 14.12L6.707 17.293m10.172-10.172L17.293 6.707m0 0a3 3 0 1 0-4.243 4.243m4.243-4.243L9.88 14.12m0 0-3.172 3.172M11 18.944c.325.037.659.056 1 .056 5.5 0 9-5 9-7 0-.623-.34-1.537-.973-2.5M17.293 6.707C15.867 5.712 14.076 5 12 5c-5.5 0-9 5-9 7 0 1.245 1.356 3.653 3.707 5.293',
                fill: false,
                stroke: true,
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

export const EyeClose = forwardRef(IconComponent)
