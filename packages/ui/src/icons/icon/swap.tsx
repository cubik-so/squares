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
        displayName: 'Swap',
        paths: [
            {
                d: 'M6.67938 2.80074C6.07346 3.23284 5.52925 3.73763 5.06019 4.30232C5.01996 4.35076 4.99984 4.40909 4.99984 4.46741M6.67938 6.13408C6.07346 5.70198 5.52925 5.19719 5.06019 4.6325C5.01996 4.58406 4.99984 4.52573 4.99984 4.46741M4.99984 4.46741L8.33317 4.46741M3.3203 5.30074C3.92622 5.73284 4.47042 6.23763 4.93948 6.80232C4.97972 6.85076 4.99984 6.90909 4.99984 6.96741M3.3203 8.63408C3.92622 8.20198 4.47042 7.69719 4.93948 7.1325C4.97972 7.08406 4.99984 7.02573 4.99984 6.96741M4.99984 6.96741H1.6665',
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

export const Swap = forwardRef(IconComponent)
