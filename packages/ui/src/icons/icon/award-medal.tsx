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
        displayName: 'AwardMedal',
        paths: [
            {
                d: 'M16.735 14.156a7 7 0 1 0-9.211.226m9.211-.226A6.975 6.975 0 0 1 12 16a6.972 6.972 0 0 1-4.476-1.618m9.211-.226L18.5 22l-.359-.22A11.255 11.255 0 0 0 6 22l1.524-7.618',
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

export const AwardMedal = forwardRef(IconComponent)
