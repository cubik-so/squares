import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const SearchDefaultFilled = (props: Props) =>
    CreateIcon({
        displayName: 'SearchDefaultFilled',
        paths: [
            {
                d: 'M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C11.8483 18 13.5513 17.3723 14.9056 16.3198L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L16.3198 14.9056C17.3723 13.5513 18 11.8483 18 10C18 5.58172 14.4183 2 10 2Z',
                fill: true,
                stroke: false,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
