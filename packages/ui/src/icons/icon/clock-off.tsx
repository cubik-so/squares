import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const ClockOff = (props: Props) =>
    CreateIcon({
        displayName: 'ClockOff',
        paths: [
            {
                d: 'M12 8V12M15 15L14.7884 14.8654M22 2L18.4701 5.52991M2 22L5.53003 18.47M12 12L18.4701 5.52991M12 12L5.53003 18.47M18.4701 5.52991C16.8143 3.87411 14.5268 2.84998 12.0001 2.84998C6.94669 2.84998 2.8501 6.94657 2.8501 12C2.8501 14.5267 3.87423 16.8141 5.53003 18.47M9.00521 20.6486C9.94357 20.9735 10.9512 21.15 12.0001 21.15C17.0535 21.15 21.1501 17.0534 21.1501 12C21.1501 10.9511 20.9736 9.94345 20.6487 9.00508',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
