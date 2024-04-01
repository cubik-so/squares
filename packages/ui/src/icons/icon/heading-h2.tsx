import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const HeadingH2 = (props: Props) =>
    CreateIcon({
        displayName: 'HeadingH2',
        paths: [
            {
                d: 'M4 12h8m-8 6V6m8 12V6m9.568 12H16v-.82c1.448-1.015 2.932-1.973 4.119-3.302.793-.888.88-2.217.026-3.11-.694-.725-1.894-.962-2.82-.602-.624.243-.98.73-1.325 1.268',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
