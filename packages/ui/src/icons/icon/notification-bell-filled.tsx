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
        displayName: 'NotificationBellFilled',
        paths: [
            {
                d: 'M3.82177 9.52563C4.17625 5.2719 7.73215 2 12.0006 2C16.2691 2 19.825 5.2719 20.1795 9.52563L20.5347 13.788C20.5658 14.1618 20.6845 14.5228 20.8544 15.0345C21.373 16.5965 20.3206 18.2392 18.6849 18.421C17.7279 18.5274 16.7688 18.6109 15.8087 18.6714C15.5577 20.5506 13.9484 22 12.0006 22C10.0529 22 8.44364 20.5507 8.19256 18.6716C7.23218 18.6111 6.2729 18.5276 5.31556 18.4213C3.67861 18.2394 2.62556 16.5944 3.14653 15.0315C3.31689 14.5205 3.43563 14.1593 3.46677 13.7856L3.82177 9.52563ZM10.2614 18.7665C10.5128 19.4848 11.1965 20 12.0006 20C12.8048 20 13.4885 19.4848 13.7399 18.7664C13.6419 18.7692 13.5439 18.7718 13.4459 18.7742C12.3845 18.7995 11.3227 18.797 10.2614 18.7665Z',
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

export const NotificationBellFilled = forwardRef(IconComponent)
