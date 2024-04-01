import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const DoubleChevron = (props: Props) =>
    CreateIcon({
        displayName: 'DoubleChevron',
        paths: [
            {
                d: 'M13 8C14.4619 9.06206 15.7713 10.3071 16.8942 11.7021C17.0353 11.8774 17.0353 12.1226 16.8942 12.2979C15.7713 13.6929 14.4619 14.9379 13 16M7 8C8.46188 9.06206 9.77128 10.3071 10.8942 11.7021C11.0353 11.8774 11.0353 12.1226 10.8942 12.2979C9.77128 13.6929 8.46188 14.9379 7 16',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
