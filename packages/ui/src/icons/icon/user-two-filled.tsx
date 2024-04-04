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
        displayName: 'UserTwoFilled',
        paths: [
            {
                d: 'M10 1.99976C7.23858 1.99976 5 4.23833 5 6.99976C5 9.76118 7.23858 11.9998 10 11.9998C12.7614 11.9998 15 9.76118 15 6.99976C15 4.23833 12.7614 1.99976 10 1.99976Z',
                fill: true,
                stroke: false,
            },
            {
                d: 'M17.5007 2.6693C17.0227 2.39276 16.4109 2.55613 16.1344 3.03419C15.8579 3.51225 16.0212 4.12398 16.4993 4.40052C17.3986 4.92074 18 5.89062 18 6.9998C18 8.10897 17.3986 9.07885 16.4993 9.59907C16.0212 9.87561 15.8579 10.4873 16.1344 10.9654C16.4109 11.4435 17.0227 11.6068 17.5007 11.3303C18.9926 10.4673 20 8.85177 20 6.9998C20 5.14782 18.9926 3.53231 17.5007 2.6693Z',
                fill: true,
                stroke: false,
            },
            {
                d: 'M6 13.9998C3.23858 13.9998 1 16.2383 1 18.9998C1 20.6566 2.34315 21.9998 4 21.9998H16C17.6569 21.9998 19 20.6566 19 18.9998C19 16.2383 16.7614 13.9998 14 13.9998H6Z',
                fill: true,
                stroke: false,
            },
            {
                d: 'M20.5007 14.6693C20.0227 14.3928 19.4109 14.5561 19.1344 15.0342C18.8579 15.5122 19.0212 16.124 19.4993 16.4005C20.3986 16.9207 21 17.8906 21 18.9998C21 19.3687 20.8008 19.6922 20.4993 19.8666C20.0212 20.1432 19.8578 20.7549 20.1344 21.2329C20.4109 21.711 21.0227 21.8744 21.5007 21.5978C22.3948 21.0806 23 20.1115 23 18.9998C23 17.1478 21.9926 15.5323 20.5007 14.6693Z',
                fill: true,
                stroke: false,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <>{IconElement}</>
}

export const UserTwoFilled = forwardRef(IconComponent)
