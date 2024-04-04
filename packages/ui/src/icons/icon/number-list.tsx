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
        displayName: 'NumberList',
        paths: [
            {
                d: 'M5 10V4.755c-.676.166-1.193.632-1.5 1.245M7 19H3.608v-.5c.882-.618 1.786-1.201 2.51-2.011.482-.541.536-1.35.015-1.895-.423-.441-1.154-.586-1.717-.367-.38.148-.597.445-.808.773M21 6H11m10 6H11m10 6H11',
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

export const NumberList = forwardRef(IconComponent)
