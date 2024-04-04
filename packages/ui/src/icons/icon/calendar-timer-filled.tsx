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
        displayName: 'CalendarTimerFilled',
        paths: [
            {
                d: 'M8 1C8.55228 1 9 1.44772 9 2V3.03923C9.8048 2.99996 10.7588 2.99998 11.916 3H12.084C13.2412 2.99998 14.1952 2.99996 15 3.03923V2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V3.30517C17.2333 3.3668 17.4586 3.44164 17.6788 3.53284C19.394 4.2433 20.7567 5.60602 21.4672 7.32122C21.7853 8.08933 21.906 8.92567 21.9584 9.94891C22 10.7623 22 11.7511 22 12.974V13.0369C22 14.4035 22 15.4801 21.9406 16.351C21.88 17.2387 21.7544 17.9853 21.4672 18.6788C20.7567 20.394 19.394 21.7567 17.6788 22.4672C16.9853 22.7544 16.2387 22.88 15.351 22.9406C14.4801 23 13.4035 23 12.0369 23H11.9631C10.5965 23 9.51986 23 8.649 22.9406C7.76134 22.88 7.01469 22.7544 6.32122 22.4672C4.60602 21.7567 3.2433 20.394 2.53284 18.6788C2.2456 17.9853 2.11997 17.2387 2.05941 16.351C1.99999 15.4801 2 14.4035 2 13.0369V12.974C2 11.7512 2 10.7623 2.04161 9.94891C2.09395 8.92567 2.21468 8.08933 2.53284 7.32122C3.2433 5.60602 4.60602 4.2433 6.32122 3.53284C6.5414 3.44164 6.76667 3.3668 7 3.30517V2C7 1.44772 7.44772 1 8 1ZM13 10.8954C13 10.3431 12.5523 9.89539 12 9.89539C11.4477 9.89539 11 10.3431 11 10.8954V15C11 15.3788 11.214 15.7251 11.5528 15.8944L13.67 16.9529C14.164 17.1999 14.7647 16.9996 15.0116 16.5057C15.2586 16.0117 15.0584 15.411 14.5644 15.164L13 14.3819V10.8954Z',
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

export const CalendarTimerFilled = forwardRef(IconComponent)
