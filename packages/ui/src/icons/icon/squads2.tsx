import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const Squads2 = (props: Props) =>
    CreateIcon({
        displayName: 'Squads2',
        paths: [
            {
                d: 'M21 9.24264C21 8.44699 20.6839 7.68393 20.1213 7.12132L16.8787 3.87868C16.3161 3.31607 15.553 3 14.7574 3H9.24264C8.44699 3 7.68393 3.31607 7.12132 3.87868L3.87868 7.12132C3.31607 7.68393 3 8.44699 3 9.24264V14.7574C3 15.553 3.31607 16.3161 3.87868 16.8787L7.12132 20.1213C7.68393 20.6839 8.44699 21 9.24264 21H14.7574C15.553 21 16.3161 20.6839 16.8787 20.1213L20.1213 16.8787C20.6839 16.3161 21 15.553 21 14.7574V9.24264ZM17 8C17 6.89543 16.1046 6 15 6H9C7.89543 6 7 6.89543 7 8V16C7 17.1046 7.89543 18 9 18H15C16.1046 18 17 17.1046 17 16V8Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
