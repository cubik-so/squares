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
        displayName: 'Twitter',
        paths: [
            {
                d: 'M18.1495 2.75L12.4505 9.26316M3.71198 19.25L9.79092 12.3026M12.4505 9.26316L8.49457 3.67836C8.25378 3.33844 8.13339 3.16847 7.9778 3.04567C7.84001 2.93692 7.68269 2.85557 7.51431 2.80599C7.32416 2.75 7.11588 2.75 6.69931 2.75H5.15164C4.46385 2.75 4.11996 2.75 3.93454 2.89275C3.77311 3.01705 3.67511 3.20654 3.667 3.41012C3.65768 3.64394 3.85646 3.92456 4.25401 4.48582L9.79092 12.3026M12.4505 9.26316L18.2949 17.5142C18.6925 18.0754 18.8913 18.3561 18.882 18.5899C18.8738 18.7935 18.7758 18.983 18.6144 19.1072C18.429 19.25 18.0851 19.25 17.3973 19.25H15.8496C15.4331 19.25 15.2248 19.25 15.0346 19.194C14.8663 19.1444 14.7089 19.0631 14.5712 18.9543C14.4156 18.8315 14.2952 18.6616 14.0544 18.3216L9.79092 12.3026',
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

export const Twitter = forwardRef(IconComponent)
