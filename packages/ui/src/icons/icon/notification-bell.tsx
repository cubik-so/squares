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
        displayName: 'NotificationBell',
        paths: [
            {
                d: 'M9.15854 17.7236C7.91232 17.6641 6.66752 17.5653 5.42604 17.4274C4.42166 17.3158 3.77569 16.3065 4.09526 15.3478C4.25729 14.8617 4.42046 14.3836 4.46337 13.8687L4.81837 9.60867C5.12965 5.87324 8.25229 3 12.0007 3C15.7491 3 18.8717 5.87324 19.183 9.60867L19.5382 13.8711C19.5811 14.3856 19.7441 14.8637 19.9054 15.3497C20.2235 16.3078 19.5779 17.3156 18.5745 17.4271C17.3333 17.5651 16.0887 17.6639 14.8428 17.7235M9.15854 17.7236C11.0522 17.8141 12.9491 17.8141 14.8428 17.7235M9.15854 17.7236L9.15857 18.1579C9.15857 19.7276 10.431 21 12.0007 21C13.5703 21 14.8428 19.7276 14.8428 18.1579L14.8428 17.7235',
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

export const NotificationBell = forwardRef(IconComponent)
