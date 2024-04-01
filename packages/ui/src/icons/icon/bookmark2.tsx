import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Bookmark2 = (props: Props) =>
    CreateIcon({
        displayName: 'Bookmark2',
        paths: [
            {
                d: 'M19 20.0256V4.94561C19 3.87108 18.1355 3 17.069 3H6.93103C5.86455 3 5 3.87108 5 4.94561V20.0256C5 20.8045 5.86331 21.2675 6.50465 20.8325L10.9217 17.837C11.5736 17.3949 12.4264 17.3949 13.0783 17.837L17.4953 20.8325C18.1367 21.2676 19 20.8045 19 20.0256Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
