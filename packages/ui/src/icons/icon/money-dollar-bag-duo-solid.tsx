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
        displayName: 'MoneyDollarBagDuoSolid',
        paths: [
            {
                d: 'M21.5888 14.6451C21.1664 11.4151 19.1982 7.94141 16.1823 6.44178L17.5928 2.91567C17.6913 2.66942 17.6879 2.39413 17.5835 2.15036C17.479 1.90659 17.2819 1.7143 17.0357 1.6158L16.3857 1.35581C14.8648 0.747444 13.1419 0.926842 11.7789 1.83549C11.1225 2.27309 10.3191 2.43201 9.54558 2.27729L8.56876 2.08193C8.20226 2.00863 7.82548 2.14583 7.59193 2.43763C7.35837 2.72942 7.30704 3.12711 7.45883 3.46865L8.62654 6.096C5.31414 7.27359 3.08999 10.8037 2.49268 14.1241C2.15185 16.0188 2.30166 18.0052 3.18668 19.6281C4.09585 21.2952 5.72285 22.4665 8.06836 22.7572C10.6796 23.0809 13.3209 23.0809 15.9321 22.7572C18.1673 22.4801 19.7554 21.4028 20.6884 19.8473C21.5991 18.3289 21.8258 16.4584 21.5888 14.6451ZM12.8883 3.49959C13.6194 3.01215 14.5238 2.87568 15.3588 3.11542L14.2835 5.80372C13.8791 5.72929 13.4629 5.69011 13.0367 5.69011H10.9638C10.8546 5.69011 10.7461 5.69268 10.6382 5.69776L10.0321 4.33414C11.0401 4.35375 12.0379 4.06651 12.8883 3.49959Z',
                opacity: 0.28,
                fill: true,
                stroke: false,
            },
            {
                d: 'M12.0005 10.303V11.1321M12.0005 11.1321H11.2328C10.3847 11.1321 9.69727 11.8746 9.69727 12.7905C9.69727 13.7063 10.3847 14.4488 11.2328 14.4488L12.7683 14.4488C13.6163 14.4488 14.3037 15.1913 14.3037 16.1071C14.3037 17.023 13.6163 17.7655 12.7683 17.7655H12.0005M12.0005 11.1321H12.8166C13.3444 11.1321 13.81 11.4197 14.0864 11.8577M12.0005 17.7655V18.5946M12.0005 17.7655H11.1844C10.6566 17.7655 10.191 17.4779 9.91466 17.04',
                stroke: true,
                fill: false,
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

export const MoneyDollarBagDuoSolid = forwardRef(IconComponent)
