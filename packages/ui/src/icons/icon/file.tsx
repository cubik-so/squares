import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const File = (props: Props) =>
    CreateIcon({
        displayName: 'File',
        paths: [
            {
                d: 'M20 11a3 3 0 0 0-3-3h-.6c-.372 0-.557 0-.713-.025a2 2 0 0 1-1.662-1.662C14 6.157 14 5.972 14 5.6V5a3 3 0 0 0-3-3m1 13v-4m0 7.001V18m8-8v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h4a8 8 0 0 1 8 8Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
