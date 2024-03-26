import React from 'react'
import { CreateIcon } from './components/create-icon'
import { iconLibrary } from './iconLibrary'

interface Props extends React.SVGProps<SVGSVGElement> {
    name: string
    color?: string
}
export const Icon = ({ name, color, ...props }: Props) => {
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
