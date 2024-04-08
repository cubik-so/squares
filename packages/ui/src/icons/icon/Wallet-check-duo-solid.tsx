import React, { forwardRef } from 'react'
import { CreateIcon } from '../../utils/create-icon'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

const IconComponent: React.ForwardRefRenderFunction<SVGSVGElement, Props> = (
    { color, ...props },
    ref,
) => {
    // Assuming CreateIcon returns a ReactElement
    const IconElement = CreateIcon({
        displayName: 'WalletCheckDuoSolid',
        paths: [
            {
                d: 'M18.9935 6.34419C18.9774 5.61628 18.9188 5.00823 18.6956 4.46927C18.2896 3.48916 17.5109 2.71046 16.5308 2.30448C16.113 2.13142 15.6789 2.06289 15.2096 2.03087C14.757 1.99999 14.2041 1.99999 13.5344 2H9.95631C8.59328 1.99999 7.50923 1.99999 6.63464 2.07144C5.73904 2.14462 4.97537 2.29768 4.27612 2.65396C3.14715 3.2292 2.22927 4.14709 1.65403 5.27606C1.29774 5.97531 1.14468 6.73898 1.07151 7.63458C1.00005 8.50917 1.00006 9.5932 1.00007 10.9562L1.00003 14.6216C0.99953 15.852 0.998983 17.1909 1.45679 18.2961C2.06575 19.7663 3.2338 20.9343 4.70397 21.5433C5.30555 21.7925 5.94802 21.8991 6.69622 21.9501C7.42765 22 8.32966 22 9.46376 22H14.5364C14.5579 22 14.5793 22 14.6007 22L13.5898 20.9902C12.4176 19.8193 12.4166 17.9198 13.5875 16.7476C14.6504 15.6835 16.3137 15.5845 17.4883 16.4511C18.3319 15.5417 19.277 14.7265 20.3079 14.0225C21.1287 13.4621 22.1287 13.3644 22.9993 13.6712C22.9971 12.898 22.9879 12.2484 22.9502 11.6962C22.8991 10.948 22.7925 10.3055 22.5433 9.7039C21.9344 8.23373 20.7663 7.06569 19.2962 6.45672C19.1964 6.41542 19.0957 6.37804 18.9935 6.34419ZM15.0735 4.02623C14.697 4.00054 14.2127 4 13.5001 4H10.0001C8.58343 4 7.5811 4.00078 6.79751 4.0648C6.02559 4.12787 5.55442 4.24729 5.1841 4.43598C4.43146 4.81947 3.81953 5.43139 3.43604 6.18404C3.27841 6.49341 3.16912 6.87318 3.10064 7.4399C3.57572 7.03363 4.11566 6.70041 4.70397 6.45672C5.30555 6.20754 5.94802 6.10095 6.69622 6.0499C7.42765 5.99999 8.32967 6 9.46377 6L14.6008 6C15.5318 5.99996 16.3124 5.99993 16.9796 6.03157C16.9583 5.61721 16.918 5.40396 16.8478 5.23464C16.6448 4.74458 16.2555 4.35523 15.7654 4.15224C15.6319 4.09695 15.4409 4.0513 15.0735 4.02623Z',
                fill: false,
                stroke: true,
            },
            {
                d: 'M15.71 18.8677L17.8445 21C18.8711 19.2048 20.2919 17.6662 21.9997 16.5M14 12H17',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        color,
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <IconElement />
}

export const WalletCheckDuoSolid = forwardRef(IconComponent)