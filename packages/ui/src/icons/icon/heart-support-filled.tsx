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
        displayName: 'HeartSupportFilled',
        paths: [
            {
                d: 'M11.2372 3.16566C9.48763 1.86375 7.32948 1.71154 5.45831 2.41913C2.99559 3.35044 1 5.77559 1 8.94408C1 12.8875 3.50811 16.1521 5.95649 18.3529C7.19833 19.4692 8.47187 20.3553 9.50746 20.9664C10.0249 21.2716 10.4936 21.5146 10.8789 21.6849C11.0707 21.7697 11.2537 21.8418 11.4193 21.8945C11.5596 21.9392 11.7757 21.9999 12 21.9999C12.2987 21.9999 12.6163 21.8886 12.827 21.8072C13.0854 21.7074 13.389 21.5673 13.7213 21.395C14.3879 21.0492 15.2148 20.5498 16.0959 19.9175C17.4497 18.9458 18.9728 17.6305 20.2433 16.0339C20.0639 15.9926 19.8852 15.9469 19.7074 15.8968C17.6701 15.3225 15.824 14.2001 14.3815 12.6723L14.029 13.0751C12.4429 14.8878 9.65494 14.9828 7.94918 13.2821C6.45078 11.7882 6.30937 9.40869 7.62029 7.74783L11.2372 3.16566Z',
                fill: true,
                stroke: false,
            },
            {
                d: 'M21.4811 14.2314C22.3856 12.6732 23 10.8916 23 8.94408C23 5.77702 21.002 3.35443 18.5394 2.42395C17.2476 1.93586 15.8188 1.85676 14.4823 2.28253L9.19018 8.98696C8.50829 9.8509 8.58184 11.0887 9.36127 11.8658C10.2486 12.7504 11.6988 12.701 12.5239 11.7581L13.6392 10.4835C13.8368 10.2576 14.1255 10.1324 14.4254 10.1425C14.7254 10.1526 15.0049 10.2969 15.1869 10.5356C16.4484 12.1898 18.2368 13.4044 20.25 13.9718C20.6555 14.0861 21.067 14.1726 21.4811 14.2314Z',
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

export const HeartSupportFilled = forwardRef(IconComponent)
