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
        displayName: 'PiggyBank',
        paths: [
            {
                d: 'M1 9.972c0 1.103.945 2.005 2.1 2.005h1.085M16 11h.01m2.993-2.886c.375.365.724.755.848 1.36.144.694 1.085.498 1.624.498.29 0 .525.224.525.501v3.009c0 1.13-4.2 1.184-4.2 2.817 0 .937.576 3.701-1.05 3.701h-1.451c-.918 0-1.219-1.089-1.554-1.728-.299-.571-3.141-.571-3.44 0C9.97 18.912 9.669 20 8.75 20H7.3c-1.544 0-1.05-2.394-1.05-3.302a.517.517 0 0 0-.155-.36c-5.354-5.377 1.46-12.975 9.045-9.64.296.13.674.001.872-.245.454-.562 1.316-1.255 2.316-1.445.285-.054.522.174.522.451 0 .626-.351 2.164.153 2.655Z',
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

export const PiggyBank = forwardRef(IconComponent)
