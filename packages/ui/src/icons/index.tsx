import React, { forwardRef } from 'react'
import { iconLibrary } from '../utils/iconLibrary'
import { CreateIcon } from '../utils/create-icon'
import type { IconName } from '../utils/iconLibrary'
import '../styles/global.css'

interface Props extends React.SVGProps<SVGSVGElement> {
    name: string
    color?: string
    className?: string
}

const IconComponent: React.ForwardRefRenderFunction<SVGSVGElement, Props> = ({
    name,
    color,
    className,
    ...props
}) => {
    const icon = iconLibrary.find((i) => i.name === name)
    if (!icon) {
        return null
    }

    // Assuming CreateIcon returns a ReactElement
    const IconElement = CreateIcon({
        displayName: icon.displayName,
        paths: icon.paths,
        viewBox: icon.viewBox,
        // Pass color and className as props
        color,
        className,
        ...props,
    })

    return <IconElement />
}

const Icon = forwardRef(IconComponent)

export default Icon
