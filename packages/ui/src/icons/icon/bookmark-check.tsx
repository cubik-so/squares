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
        displayName: 'BookmarkCheck',
        paths: [
            {
                d: 'M9.10345 11.0257L11.0345 12.9713L15.8621 8.10723M19 20.0256V4.94561C19 3.87108 18.1355 3 17.069 3H6.93103C5.86455 3 5 3.87108 5 4.94561V20.0256C5 20.8045 5.86331 21.2675 6.50465 20.8325L10.9217 17.837C11.5736 17.3949 12.4264 17.3949 13.0783 17.837L17.4953 20.8325C18.1367 21.2676 19 20.8045 19 20.0256Z',
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

export const BookmarkCheck = forwardRef(IconComponent)
