import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const XRay = (props: Props) =>
    CreateIcon({
        displayName: 'XRay',
        paths: [
            {
                d: 'M12.0021 5.67508C12.9016 5.67508 13.758 5.85863 14.5367 6.19006L12.2053 2.11942C12.1146 1.96019 11.8861 1.96019 11.7954 2.11942L9.46568 6.19006C10.2452 5.85805 11.1017 5.67508 12.0021 5.67508ZM5.69821 10.5656C6.15685 8.81573 7.31081 7.35213 8.84597 6.49499L4.22177 5.79198C4.04216 5.76487 3.89929 5.94444 3.96654 6.11553L5.69821 10.5656ZM2.16761 14.8429L6.87071 16.3065C6.00052 15.1902 5.48153 13.7808 5.48153 12.2494C5.48153 11.8818 5.51188 11.521 5.56896 11.1704L2.07509 14.4398C1.94256 14.5634 1.99291 14.7887 2.16761 14.8429ZM7.78108 21.6578L11.9047 18.8238V18.8221C9.95958 18.7933 8.21937 17.9056 7.0436 16.5166L7.41152 21.4782C7.42497 21.6629 7.62985 21.7611 7.78108 21.6578ZM16.5792 21.4732L16.9453 16.5369C15.7696 17.9158 14.0344 18.7967 12.0944 18.8238L16.2097 21.6527C16.3609 21.7561 16.5658 21.6561 16.5792 21.4732ZM17.1502 16.2845L21.8333 14.8277V14.826C22.0062 14.7735 22.0584 14.5482 21.924 14.4228L18.432 11.1551C18.4907 11.5109 18.5227 11.8768 18.5227 12.2494C18.5227 13.7706 18.0102 15.1716 17.1502 16.2845ZM18.3076 10.5724L20.0377 6.12399C20.1049 5.9529 19.962 5.77335 19.7824 5.80046L15.17 6.50175C16.7001 7.3623 17.8508 8.82421 18.3076 10.5724ZM10.2603 22C10.2603 21.0293 11.0396 20.2433 12.0021 20.2433H12.0037C12.9663 20.2433 13.7456 21.0293 13.7456 22H10.2603ZM18.6468 19.8351C17.8944 19.2303 17.7717 18.1242 18.3714 17.3652H18.3698C18.9693 16.6063 20.0662 16.4827 20.8188 17.0875L18.6468 19.8351ZM21.8853 11.892C20.948 12.1088 20.0124 11.5176 19.7992 10.5707V10.569C19.5841 9.62376 20.1704 8.6802 21.1093 8.46509L21.8853 11.892ZM17.8508 4.37412C17.4325 5.24991 16.3911 5.61749 15.5243 5.19569H15.526C14.6576 4.77389 14.2931 3.72363 14.7114 2.84953L17.8508 4.37412ZM9.21373 2.84953C9.63201 3.72363 9.26753 4.77389 8.40079 5.19569V5.194C7.53405 5.6158 6.49278 5.24822 6.0745 4.37412L9.21373 2.84953ZM2.93855 8.46678C3.87747 8.6819 4.46372 9.62376 4.25031 10.5707C4.03707 11.5176 3.10308 12.1088 2.16416 11.8937L2.93855 8.46678ZM5.60078 19.8351L3.42737 17.0875C4.17978 16.4827 5.27665 16.6063 5.87635 17.3652C6.47589 18.1242 6.35336 19.2303 5.60078 19.8351Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
