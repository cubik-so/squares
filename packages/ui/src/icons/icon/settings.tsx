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
        displayName: 'Settings',
        paths: [
            {
                d: 'M10.2 4.12c.632-.618.947-.927 1.31-1.043.319-.103.661-.103.98 0 .363.116.678.425 1.31 1.043l.303.297c.273.267.409.4.567.497.14.085.293.148.453.187.18.044.37.046.752.05l.425.005c.883.009 1.325.013 1.663.188.298.153.54.395.694.693.174.338.178.78.187 1.663l.005.425c.004.382.006.573.05.752.039.16.102.313.187.453.096.158.23.295.497.567l.297.304c.618.63.927.946 1.043 1.309.103.319.103.661 0 .98-.116.363-.425.678-1.043 1.31l-.297.303c-.267.273-.4.409-.497.567-.085.14-.148.293-.187.453-.044.18-.046.37-.05.752l-.005.425c-.009.883-.013 1.325-.188 1.663-.153.298-.395.54-.693.694-.338.174-.78.178-1.663.187l-.425.005c-.382.004-.573.006-.752.05-.16.039-.313.102-.453.187-.158.096-.294.23-.567.497l-.304.297Z',
                fill: false,
                stroke: true,
            },
            {
                d: 'M10.991 12c0-.552.457-1 1.01-1 .552 0 1.008.448 1.008 1s-.457 1-1.009 1c-.552 0-1.009-.448-1.009-1Z',
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

export const Settings = forwardRef(IconComponent)
