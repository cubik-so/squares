import React, { forwardRef } from 'react'
import { iconLibrary } from '../utils/iconLibrary'
import { CreateIcon } from '../utils/create-icon'
import '../styles/global.css'

interface Props extends React.SVGProps<SVGSVGElement> {
    name: string
    color?: string
}

const IconComponent: React.ForwardRefRenderFunction<SVGSVGElement, Props> = (
    { name, color, ...props },
    ref,
) => {
    const icon = iconLibrary.find((i) => i.name === name)
    if (!icon) {
        // Ensure a ReactElement is returned, even for null cases
        return null
    }

    // Assuming CreateIcon returns a ReactElement
    const IconElement = CreateIcon({
        displayName: icon.displayName,
        paths: icon.paths,
        viewBox: icon.viewBox,
        color,
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <IconElement />
}

const Icon = forwardRef(IconComponent)

export default Icon
