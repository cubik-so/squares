import React from 'react'
import { iconLibrary } from '../utils/iconLibrary'
import { CreateIcon } from '../utils/create-icon'

interface Props extends React.SVGProps<SVGSVGElement> {
    name: string
    color?: string
}
const Icon = ({ name, color, ...props }: Props) => {
    const icon = iconLibrary.find((i) => i.name === name)
    if (!icon) {
        return <></>
    }
    return CreateIcon({
        displayName: icon.displayName,
        paths: icon.paths,
        viewBox: icon.viewBox,
        color,
        ...props,
    })
}

/*
 * Generic icon component that renders an icon based on the name prop.
 */
export default Icon

/*
 * Export all icons for easy import.
 */
export * from './icon'
