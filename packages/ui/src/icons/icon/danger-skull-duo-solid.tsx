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
        displayName: 'DangerSkullDuoSolid',
        paths: [
            {
                d: 'M22.5001 4.30835C14.4625 4.30835 7.94678 10.8241 7.94678 18.8617V26.9003C7.94678 29.4011 9.547 31.6212 11.9194 32.4121C12.8062 32.7076 13.4043 33.5375 13.4043 34.4722V34.6437C13.4043 37.9839 16.112 40.6917 19.4522 40.6917H25.548C28.8882 40.6917 31.5959 37.9839 31.5959 34.6437V34.4722C31.5959 33.5375 32.1941 32.7076 33.0808 32.4121C35.4532 31.6212 37.0534 29.4011 37.0534 26.9003V18.8617C37.0534 10.8241 30.5377 4.30835 22.5001 4.30835Z',
                opacity: 0.28,
                fill: true,
                stroke: false,
            },
            {
                d: 'M19.4074 20.6809C19.4074 21.6856 18.5929 22.5 17.5882 22.5C16.5835 22.5 15.769 21.6856 15.769 20.6809C15.769 19.6762 16.5835 18.8617 17.5882 18.8617C18.5929 18.8617 19.4074 19.6762 19.4074 20.6809Z',
                stroke: true,
                fill: false,
            },
            {
                d: 'M29.2309 20.6809C29.2309 21.6856 28.4164 22.5 27.4117 22.5C26.407 22.5 25.5925 21.6856 25.5925 20.6809C25.5925 19.6762 26.407 18.8617 27.4117 18.8617C28.4164 18.8617 29.2309 19.6762 29.2309 20.6809Z',
                stroke: true,
                fill: false,
            },
        ],
        viewBox: '0 0 45 45',
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <>{IconElement}</>
}

export const DangerSkullDuoSolid = forwardRef(IconComponent)
