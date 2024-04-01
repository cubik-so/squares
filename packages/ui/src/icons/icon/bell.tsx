import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Bell = (props: Props) =>
    CreateIcon({
        displayName: 'Bell',
        paths: [
            {
                d: 'M9 18.542a62.872 62.872 0 0 1-3.94-.313 1.676 1.676 0 0 1-1.404-2.195c.171-.513.343-1.018.389-1.561l.375-4.497a7.608 7.608 0 0 1 15.162 0l.375 4.499c.045.543.217 1.048.388 1.56a1.675 1.675 0 0 1-1.405 2.194c-1.31.145-2.624.25-3.94.313m-6 0V19a3 3 0 1 0 6 0v-.459m-6 0a62.83 62.83 0 0 0 6 0',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
