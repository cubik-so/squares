import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Website = (props: Props) =>
    CreateIcon({
        displayName: 'Website',
        paths: [
            {
                d: 'M2.61249 11H19.3875M2.61249 11C2.61249 15.6323 6.3677 19.3875 11 19.3875M2.61249 11C2.61249 6.3677 6.3677 2.61249 11 2.61249M19.3875 11C19.3875 15.6323 15.6323 19.3875 11 19.3875M19.3875 11C19.3875 6.3677 15.6323 2.61249 11 2.61249M11 2.61249C13.0979 4.90928 14.2902 7.88993 14.355 11C14.2902 14.11 13.0979 17.0907 11 19.3875M11 2.61249C8.90204 4.90928 7.70978 7.88993 7.64499 11C7.70978 14.11 8.90204 17.0907 11 19.3875',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
