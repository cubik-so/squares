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
        displayName: 'Cube',
        paths: [
            {
                d: 'M12 12v9.5m0-9.5L3.34 7.388M12 12l8.66-4.612M12 21.5c.217 0 .434-.022.648-.065.483-.099.938-.35 1.846-.853l4.012-2.22c.909-.503 1.363-.755 1.693-1.106.293-.312.513-.678.648-1.077.153-.45.153-.953.153-1.959V9.78c0-1.006 0-1.509-.153-1.96a2.924 2.924 0 0 0-.187-.432M12 21.5a3.25 3.25 0 0 1-.648-.065c-.483-.099-.938-.35-1.846-.853l-4.012-2.22c-.908-.503-1.363-.755-1.693-1.106a2.962 2.962 0 0 1-.648-1.077C3 15.73 3 15.226 3 14.22V9.78c0-1.006 0-1.509.153-1.96.05-.148.113-.293.187-.432m17.32 0a2.986 2.986 0 0 0-.46-.643c-.331-.352-.785-.604-1.694-1.107l-4.012-2.22c-.909-.503-1.363-.754-1.846-.853a3.25 3.25 0 0 0-1.296 0c-.483.099-.938.35-1.846.853L7.5 4.528l-2.006 1.11c-.908.503-1.363.755-1.693 1.107a2.988 2.988 0 0 0-.461.643',
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

export const Cube = forwardRef(IconComponent)
