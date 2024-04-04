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
        displayName: 'USDC',
        paths: [
            {
                d: 'M8.50012 20.4568C5.18329 19.0825 2.8501 15.8137 2.8501 12C2.8501 8.1863 5.18329 4.91754 8.50012 3.54327M15.5001 3.54327C18.8169 4.91754 21.1501 8.1863 21.1501 12C21.1501 15.8137 18.8169 19.0825 15.5001 20.4568M12.0001 6.00001V7.20001M12.0001 7.20001V12M12.0001 7.20001H10.8889C9.66165 7.20001 8.66673 8.27453 8.66673 9.60001C8.66673 10.9255 9.66165 12 10.8889 12H12.0001M12.0001 7.20001H13.1812C14.2166 7.20001 15.0867 7.96488 15.3334 9.00001M12.0001 12V16.8M12.0001 12L13.1112 12C14.3385 12 15.3334 13.0745 15.3334 14.4C15.3334 15.7255 14.3385 16.8 13.1112 16.8H12.0001M12.0001 16.8V18M12.0001 16.8H10.8189C9.78347 16.8 8.91342 16.0351 8.66673 15',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <>{IconElement}</>
}

export const USDC = forwardRef(IconComponent)
