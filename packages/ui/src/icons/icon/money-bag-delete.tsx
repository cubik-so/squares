import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const MoneyBagDelete = (props: Props) =>
    CreateIcon({
        displayName: 'MoneyBagDelete',
        paths: [
            {
                d: 'M9.32258 8.01395H14.1613M9.32258 8.01395C9.32258 8.01395 3.99996 11.0223 4 16.0363C4.00003 19.5635 6.94732 20.7566 10.2903 21M9.32258 8.01395L8.41024 5.49294C8.09441 4.62021 8.41531 3.64302 9.27572 3.37119C9.91039 3.17067 10.7438 3 11.7419 3C12.7401 3 13.5735 3.17067 14.2081 3.37119C15.0685 3.64302 15.3895 4.62021 15.0736 5.49294L14.1613 8.01395M14.1613 8.01395C14.1613 8.01395 16.0617 9.08805 17.5913 11.0223M19 14.5321L16.5816 17.039M16.5816 17.039L14.1058 19.546M16.5816 17.039L14.1058 14.5321M16.5816 17.039L19 19.546',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
