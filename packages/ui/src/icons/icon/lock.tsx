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
        displayName: 'Lock',
        paths: [
            {
                d: 'M12 17v-2m0 0c.513 0 .929-.448.929-1s-.416-1-.929-1c-.513 0-.929.448-.929 1s.416 1 .929 1Zm5.573-5.761V9c0-3.314-2.495-6-5.573-6-3.078 0-5.573 2.686-5.573 6v.239m11.146 0C16.887 9 15.965 9 14.303 9H9.697c-1.662 0-2.584 0-3.146.239M12 17c-3.078 0-5.573 2.686-5.573 6v1.239c0 .825.55 1.536 1.399 1.839.853.306 1.969.478 4.174.478 2.208 0 3.324-.172 4.177-.478.849-.303 1.399-1.014 1.399-1.839V23c0-3.314-2.495-6-5.573-6Z',
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

export const Lock = forwardRef(IconComponent)
