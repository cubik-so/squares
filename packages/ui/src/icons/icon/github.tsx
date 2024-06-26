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
        displayName: 'Github',
        paths: [
            {
                d: 'M9.16667 13.7493C8.56838 14.3905 8.24009 15.2375 8.25 16.1143V19.2493M12.8333 13.7493C13.4316 14.3905 13.7599 15.2375 13.75 16.1143V19.2493M8.25 17.4618C7.43003 17.7884 6.54071 17.9019 5.665 17.7918C4.27167 17.3152 4.63833 16.0502 3.92333 15.5277C3.57974 15.282 3.172 15.1419 2.75 15.1243M17.4167 8.93683C17.4167 11.6868 15.6292 13.7493 11 13.7493C6.37083 13.7493 4.58333 11.6868 4.58333 8.93683C4.56069 7.98274 4.77485 7.03791 5.20667 6.18683C4.895 4.83933 5.01417 3.18016 5.68333 2.85016C6.3525 2.52016 7.76417 3.12516 8.92833 3.90433C9.61214 3.7823 10.3054 3.72095 11 3.721C11.6941 3.7149 12.3873 3.77011 13.0717 3.886C14.2358 3.10683 15.7117 2.52933 16.3167 2.83183C16.9217 3.13433 17.105 4.821 16.7933 6.1685C17.2281 7.02507 17.4424 7.97657 17.4167 8.93683Z',
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

export const Github = forwardRef(IconComponent)
