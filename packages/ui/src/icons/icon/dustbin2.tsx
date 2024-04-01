import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Dustbin2 = (props: Props) =>
    CreateIcon({
        displayName: 'Dustbin2',
        paths: [
            {
                d: 'M16 6.65918L14.8944 4.44803C14.3463 3.35171 13.2257 2.65918 12 2.65918C10.7743 2.65918 9.65374 3.35171 9.10557 4.44803L8 6.65918M4 6.65918H20M10 11.6592V16.6592M14 11.6592V16.6592M6 6.65918H18V15.6592C18 17.5229 18 18.4548 17.6955 19.1899C17.2895 20.17 16.5108 20.9487 15.5307 21.3547C14.7956 21.6592 13.8638 21.6592 12 21.6592C10.1362 21.6592 9.20435 21.6592 8.46927 21.3547C7.48915 20.9487 6.71046 20.17 6.30448 19.1899C6 18.4548 6 17.5229 6 15.6592V6.65918Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
