import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const UserSecurity = (props: Props) =>
    CreateIcon({
        displayName: 'UserSecurity',
        paths: [
            {
                d: 'M10 15H7a4 4 0 0 0-4 4 2 2 0 0 0 2 2h6.5M15 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm2.113 7.055-2.306.73a1.088 1.088 0 0 0-.776.979l-.027.617c-.079 1.805.943 3.49 2.626 4.332l.327.163c.323.162.71.165 1.037.01l.284-.135c1.801-.855 2.872-2.665 2.705-4.57l-.04-.452a1.09 1.09 0 0 0-.773-.933l-2.338-.74a1.192 1.192 0 0 0-.719 0Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
