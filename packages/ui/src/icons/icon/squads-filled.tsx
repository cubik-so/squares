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
        displayName: 'SquadsFilled',
        paths: [
            {
                d: 'M21 9.24264C21 8.44699 20.6839 7.68393 20.1213 7.12132L16.8787 3.87868C16.3161 3.31607 15.553 3 14.7574 3H9.24264C8.44699 3 7.68393 3.31607 7.12132 3.87868L3.87868 7.12132C3.31607 7.68393 3 8.44699 3 9.24264V14.7574C3 15.553 3.31607 16.3161 3.87868 16.8787L7.12132 20.1213C7.68393 20.6839 8.44699 21 9.24264 21H14.7574C15.553 21 16.3161 20.6839 16.8787 20.1213L20.1213 16.8787C20.6839 16.3161 21 15.553 21 14.7574V9.24264ZM18 7C18 5.89543 17.1046 5 16 5H8C6.89543 5 6 5.89543 6 7V17C6 18.1046 6.89543 19 8 19H16C17.1046 19 18 18.1046 18 17V7Z',
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

export const SquadsFilled = forwardRef(IconComponent)
