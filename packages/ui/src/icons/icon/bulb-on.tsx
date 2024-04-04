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
        displayName: 'BulbOn',
        paths: [
            {
                d: 'M10.379 21h3.242M6.312 10.468c0-3.023 2.547-5.474 5.688-5.474 3.141 0 5.688 2.451 5.688 5.474 0 1.657-.766 3.142-1.974 4.146-.511.424-.95.95-1.117 1.593l-.227.875c-.14.537-.625.912-1.18.912h-2.38c-.555 0-1.04-.375-1.18-.912l-.227-.875c-.167-.643-.606-1.169-1.117-1.593-1.208-1.004-1.973-2.489-1.973-4.146Z',
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

export const BulbOn = forwardRef(IconComponent)
