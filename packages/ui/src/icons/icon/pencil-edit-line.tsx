import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const PencilEditLine = (props: Props) =>
    CreateIcon({
        displayName: 'PencilEditLine',
        paths: [
            {
                d: 'M13 21.6592H21M3 21.6547L5.72665 21.659C6.11608 21.6597 6.31079 21.66 6.49406 21.616C6.65654 21.577 6.81188 21.5125 6.95435 21.4249C7.11505 21.3261 7.25274 21.1878 7.52811 20.9113L20.5014 7.88095C21.0315 7.34859 21.1632 6.52549 20.7594 5.875C20.2713 5.08866 19.6037 4.41249 18.8267 3.91049C18.204 3.50814 17.3862 3.59626 16.8626 4.12214L3.8099 17.2322C3.54444 17.4988 3.41171 17.6321 3.31544 17.7873C3.23007 17.9249 3.16608 18.0748 3.12568 18.2318C3.08011 18.4088 3.07546 18.5973 3.06616 18.9743L3 21.6547Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
