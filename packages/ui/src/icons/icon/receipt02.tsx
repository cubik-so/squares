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
        displayName: 'Receipt02',
        paths: [
            {
                d: 'M14 12.25H28M14 19.25H28M14 26.25H21M35 34.1726L35 14.7C35 10.7796 35 8.81945 34.2371 7.32207C33.5659 6.00493 32.4951 4.93407 31.1779 4.26296C29.6806 3.5 27.7204 3.5 23.8 3.5L18.2 3.5C14.2796 3.5 12.3195 3.5 10.8221 4.26295C9.50493 4.93407 8.43407 6.00493 7.76296 7.32207C7 8.81945 7 10.7796 7 14.7L7 34.1726C7 35.4911 7 36.1503 7.24666 36.5643C7.53885 37.0546 8.05182 37.3716 8.62107 37.4137C9.10163 37.4492 9.69128 37.1544 10.8706 36.5647C11.9331 36.0334 12.4644 35.7678 13.0196 35.6282C13.6801 35.462 14.3665 35.426 15.0408 35.5221C15.6076 35.6028 16.1637 35.8114 17.276 36.2285L18.0506 36.519C19.142 36.9283 19.6877 37.1329 20.2492 37.214C20.7471 37.286 21.2529 37.286 21.7508 37.214C22.3123 37.1329 22.858 36.9283 23.9494 36.519L24.724 36.2285C25.8363 35.8114 26.3925 35.6028 26.9592 35.5221C27.6335 35.426 28.3199 35.462 28.9804 35.6282C29.5356 35.7678 30.0669 36.0334 31.1294 36.5647C32.3087 37.1544 32.8984 37.4492 33.3789 37.4137C33.9482 37.3716 34.4612 37.0546 34.7533 36.5643C35 36.1503 35 35.4911 35 34.1726Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 42 42',
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <>{IconElement}</>
}

export const Receipt02 = forwardRef(IconComponent)
