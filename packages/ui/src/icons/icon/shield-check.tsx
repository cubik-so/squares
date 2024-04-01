import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const ShieldCheck = (props: Props) =>
    CreateIcon({
        displayName: 'ShieldCheck',
        paths: [
            {
                d: 'm9 12.019 2.007 2.005a12.844 12.844 0 0 1 3.906-4.231l.087-.06m-4.25-7.365L5.363 4.313a3 3 0 0 0-1.98 2.707l-.126 3.308A11 11 0 0 0 8.8 20.307l1.52.867a3 3 0 0 0 2.916.032l1.488-.806a11 11 0 0 0 5.729-10.516l-.227-2.95a3 3 0 0 0-1.973-2.592l-5.465-1.974a3 3 0 0 0-2.038 0Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
