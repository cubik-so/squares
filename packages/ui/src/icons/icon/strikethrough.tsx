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
        displayName: 'Strikethrough',
        paths: [
            {
                d: 'M12.5 12C14.7712 12 17.5 12.4351 17.5 15.8679C17.5 20.9381 8.83063 21.3742 7.64564 17M12.5 12L21.5 12M12.5 12L3.5 12M7.5 8.13207C7.5 3.06192 16.1694 2.62579 17.3544 7',
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

export const Strikethrough = forwardRef(IconComponent)
