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
        displayName: 'DonationFilled',
        paths: [
            {
                d: 'M9 5.5C9 3.01472 11.0147 1 13.5 1C15.9853 1 18 3.01472 18 5.5C18 7.98528 15.9853 10 13.5 10C11.0147 10 9 7.98528 9 5.5Z',
                fill: true,
                stroke: false,
            },
            {
                d: 'M18.6798 3.05525C18.9958 2.60227 19.6191 2.4912 20.0721 2.80716C21.2355 3.61863 22 4.96996 22 6.5C22 8.76788 20.3233 10.6424 18.1416 10.9545C17.5949 11.0327 17.0883 10.6529 17.0101 10.1062C16.9319 9.55943 17.3117 9.05283 17.8584 8.97463C19.069 8.80147 20 7.75859 20 6.5C20 5.6513 19.578 4.901 18.9279 4.44753C18.4749 4.13157 18.3639 3.50822 18.6798 3.05525Z',
                fill: true,
                stroke: false,
            },
            {
                d: 'M1 12C1 10.3431 2.34315 9 4 9C5.23766 9 6.29988 9.74914 6.75846 10.819C8.64872 10.7538 10.5313 11.1572 12.2358 12H13.3075C14.2679 12 15.1724 12.368 15.8526 13H19.8946C20.9039 13 22.0353 13.5777 22.7063 14.3528C23.0554 14.7562 23.3622 15.3077 23.3721 15.961C23.3825 16.6482 23.0623 17.2619 22.5115 17.7426C18.1487 21.752 11.3746 22.052 6.52712 18.6174C5.9938 19.4489 5.06125 20 4 20C2.34315 20 1 18.6569 1 17V12ZM7 16.4587C11.1318 19.9171 17.3161 19.8098 21.1674 16.2615C21.1754 16.2542 21.1834 16.247 21.1916 16.24C21.298 16.1481 21.3406 16.0808 21.3569 16.0479C21.3714 16.0185 21.3725 16.0026 21.3723 15.9913C21.3718 15.9598 21.3518 15.8439 21.1941 15.6618C21.0413 15.4853 20.8116 15.311 20.5487 15.1824C20.2811 15.0516 20.045 15 19.8946 15H16.8677C16.853 16.0526 16.0031 17 14.8384 17H10C9.44772 17 9 16.5523 9 16C9 15.4477 9.44772 15 10 15H14.8384C14.8456 15 14.8494 14.999 14.8494 14.999L14.8511 14.9983C14.8511 14.9983 14.857 14.9942 14.8613 14.9872C14.8656 14.9802 14.8666 14.9731 14.8666 14.9731L14.8665 14.9714C14.8665 14.9714 14.8657 14.9675 14.8625 14.961C14.568 14.372 13.966 14 13.3075 14H12.1853C11.9082 14 11.6349 13.9355 11.3871 13.8116C10.0217 13.1289 8.5163 12.7888 7 12.8135V16.4587Z',
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

export const DonationFilled = forwardRef(IconComponent)
