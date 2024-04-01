import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const HeartSupport = (props: Props) =>
    CreateIcon({
        displayName: 'HeartSupport',
        paths: [
            {
                d: 'M12 5.4274C8.83207 0.653479 2 3.5018 2 8.94428C2 15.9768 11 21 12 21C12.7369 21 17.8174 18.2726 20.4402 14.0237M12 5.4274C15.1625 0.66165 22 3.50672 22 8.94427C22 10.7948 21.3768 12.5063 20.4402 14.0237M12 5.4274L9.19014 8.98733C8.50823 9.85127 8.58179 11.0891 9.36123 11.8661C10.2485 12.7508 11.6988 12.7014 12.5238 11.7585L14.5 9.5C15.7789 11.7381 17.9453 13.3755 20.4402 14.0237',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
