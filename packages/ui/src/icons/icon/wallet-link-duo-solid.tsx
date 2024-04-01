import { CreateIcon } from '../../utils/create-icon'
import type React from 'react'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

export const WalletLinkDuoSolid = (props: Props) =>
    CreateIcon({
        displayName: 'WalletLinkDuoSolid',
        paths: [
            {
                d: 'M18.9935 6.34419C18.9774 5.61628 18.9188 5.00822 18.6956 4.46927C18.2896 3.48916 17.5109 2.71046 16.5308 2.30448C16.113 2.13142 15.6789 2.06288 15.2096 2.03087C14.757 1.99999 14.2041 1.99999 13.5344 2H9.95631C8.59328 1.99999 7.50923 1.99999 6.63464 2.07144C5.73904 2.14462 4.97537 2.29768 4.27612 2.65396C3.14715 3.2292 2.22927 4.14709 1.65403 5.27606C1.29774 5.97531 1.14468 6.73898 1.07151 7.63458C1.00005 8.50917 1.00006 9.5932 1.00007 10.9562L1.00003 14.6216C0.99953 15.852 0.998983 17.1909 1.45679 18.2961C2.06575 19.7663 3.2338 20.9343 4.70397 21.5433C5.30555 21.7925 5.94802 21.8991 6.69622 21.9501C7.40114 21.9982 8.2645 21.9999 9.34136 22C9.12028 21.3743 9 20.7011 9 20C9 16.6884 11.6832 14 14.9978 14H19.0022C20.5357 14 21.9341 14.5755 22.9941 15.5218C23.0003 15.2187 23.0002 14.917 23.0001 14.6216L23.0001 14.4637C23.0001 13.3296 23.0001 12.4276 22.9502 11.6962C22.8991 10.948 22.7925 10.3055 22.5433 9.7039C21.9344 8.23373 20.7663 7.06569 19.2962 6.45672C19.1964 6.41542 19.0957 6.37804 18.9935 6.34419ZM15.0735 4.02623C14.697 4.00054 14.2127 4 13.5001 4H10.0001C8.58343 4 7.5811 4.00078 6.79751 4.0648C6.02559 4.12787 5.55442 4.24729 5.1841 4.43598C4.43146 4.81947 3.81953 5.43139 3.43604 6.18404C3.27841 6.49341 3.16912 6.87318 3.10064 7.4399C3.57572 7.03363 4.11566 6.70041 4.70397 6.45672C5.30555 6.20754 5.94802 6.10095 6.69622 6.0499C7.42765 5.99999 8.32967 6 9.46377 6L14.6008 6C15.5318 5.99996 16.3124 5.99993 16.9796 6.03157C16.9583 5.61721 16.918 5.40396 16.8478 5.23463C16.6448 4.74458 16.2555 4.35523 15.7654 4.15224C15.6319 4.09694 15.4409 4.0513 15.0735 4.02623Z',
                fill: true,
                stroke: false,
            },
            {
                d: 'M18.9648 17H19.0022C20.6579 17 22 18.3431 22 20C22 21.6569 20.6579 23 19.0022 23H18.9648M15.0352 17H14.9978C13.3421 17 12 18.3431 12 20C12 21.6569 13.3421 23 14.9978 23H15.0352M15.9971 20H17.9956',
                fill: false,
                stroke: true,
            },
            { d: 'M14 12H17', fill: false, stroke: true },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })
