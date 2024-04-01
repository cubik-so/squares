import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Poll = (props: Props) =>
    CreateIcon({
        displayName: 'Poll',
        paths: [
            {
                d: 'M17.3125 9.4375H27.8125M8.125 9.4375H8.13812M17.3125 22.5625H27.8125M12.0625 9.4375C12.0625 11.6121 10.2996 13.375 8.125 13.375C5.95038 13.375 4.1875 11.6121 4.1875 9.4375C4.1875 7.26288 5.95038 5.5 8.125 5.5C10.2996 5.5 12.0625 7.26288 12.0625 9.4375ZM12.0625 22.5625C12.0625 24.7371 10.2996 26.5 8.125 26.5C5.95038 26.5 4.1875 24.7371 4.1875 22.5625C4.1875 20.3879 5.95038 18.625 8.125 18.625C10.2996 18.625 12.0625 20.3879 12.0625 22.5625Z',
                opacity: 0.28,
                fill: true,
                stroke: false,
            },
        ],
        viewBox: '0 0 32 32',
        ...props,
    })
