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
        displayName: 'FolderAdd',
        paths: [
            {
                d: 'M12 17v-3m0 0v-3m0 3H9m3 0h3M8.716 3H8.4c-2.24 0-3.36 0-4.216.436a4 4 0 0 0-1.748 1.748C2 6.04 2 7.16 2 9.4v5.2c0 2.24 0 3.36.436 4.216a4 4 0 0 0 1.748 1.748C5.04 21 6.16 21 8.4 21h7.2c2.24 0 3.36 0 4.216-.436a4 4 0 0 0 1.748-1.748C22 17.96 22 16.84 22 14.6v-2.2c0-2.24 0-3.36-.436-4.216a4 4 0 0 0-1.748-1.748C18.96 6 17.84 6 15.6 6h-2.316c-.47 0-.704 0-.917-.065a1.5 1.5 0 0 1-.517-.276c-.172-.142-.302-.337-.563-.728l-.575-.862c-.26-.391-.39-.586-.562-.728a1.5 1.5 0 0 0-.517-.276C9.42 3 9.185 3 8.716 3Z',
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

export const FolderAdd = forwardRef(IconComponent)
