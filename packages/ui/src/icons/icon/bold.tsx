import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Bold = (props: Props) =>
    CreateIcon({
        displayName: 'Bold',
        paths: [
            {
                d: 'M7 12h5a3.5 3.5 0 1 0 0-7H7.773c-.255 0-.382 0-.48.045a.5.5 0 0 0-.248.247C7 5.392 7 5.518 7 5.772V12Zm0 0h6.5a3.5 3.5 0 1 1 0 7H7.8c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C7 18.62 7 18.48 7 18.2V12Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
