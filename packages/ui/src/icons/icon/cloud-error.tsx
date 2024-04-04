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
        displayName: 'CloudError',
        paths: [
            {
                d: 'M6.51 7.97a6.502 6.502 0 0 1 11.734-.515c.237.446.355.668.42.756.1.136.067.1.191.215.08.073.305.228.755.537A5.5 5.5 0 0 1 16.5 19M6.51 7.97l-.045.11m.046-.11a6.432 6.432 0 0 0-.046.11m0 0A6.518 6.518 0 0 0 6.174 12m.291-3.92c-.322.803-.483 1.204-.561 1.325-.152.235-.038.1-.244.29-.106.097-.579.39-1.525.976A4.5 4.5 0 0 0 6.5 19m5.5-2.001v-6m0 9v-.001',
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

export const CloudError = forwardRef(IconComponent)
