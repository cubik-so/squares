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
        displayName: 'Vector',
        paths: [
            {
                d: 'M15.3378 14.3416H19.9455C21.3516 14.3416 23.5204 16.2172 21.9567 17.6737C17.4777 22.1242 10.262 22.1242 5.62329 17.5803M5.62329 17.5803V17.677C5.62329 18.2668 5.40608 18.8323 5.01945 19.2493C4.63281 19.6663 4.10843 19.9006 3.56164 19.9006C3.01486 19.9006 2.49048 19.6663 2.10384 19.2493C1.71721 18.8323 1.5 18.2668 1.5 17.677V12.118C1.50091 11.5408 1.7099 10.9865 2.0828 10.5725C2.4557 10.1584 2.96327 9.91698 3.49821 9.89922C4.03316 9.88146 4.55354 10.0888 4.94934 10.4773C5.34514 10.8658 5.58535 11.4052 5.61917 11.9813M5.62329 17.5803V12.118C5.62329 12.0735 5.62329 12.0268 5.61917 11.9813M9.74658 16.5652H14.7337C15.5212 16.5652 16.0325 15.6724 15.681 14.9131C15.4466 14.4072 15.0861 13.9817 14.64 13.6844C14.194 13.387 13.6799 13.2296 13.1555 13.2298H11.9989C11.8737 13.2296 11.7502 13.198 11.6381 13.1375C9.77716 12.1342 7.68689 11.7327 5.61917 11.9813M19.5394 2.8089C20.1337 3.25502 20.5899 3.8837 20.8485 4.61319C21.1071 5.34267 21.1562 6.13921 20.9894 6.8992C20.8226 7.65919 20.4476 8.34746 19.9133 8.8745C19.3789 9.40155 18.7099 9.74298 17.9932 9.85438M16.9623 4.8913C16.9623 5.92334 16.5822 6.91311 15.9056 7.64287C15.229 8.37263 14.3113 8.78261 13.3545 8.78261C12.3976 8.78261 11.4799 8.37263 10.8033 7.64287C10.1267 6.91311 9.74658 5.92334 9.74658 4.8913C9.74658 3.85927 10.1267 2.8695 10.8033 2.13974C11.4799 1.40998 12.3976 1 13.3545 1C14.3113 1 15.229 1.40998 15.9056 2.13974C16.5822 2.8695 16.9623 3.85927 16.9623 4.8913Z',
                fill: false,
                stroke: true,
            },
        ],
        viewBox: '0 0 24 24',
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <>{IconElement}</>
}

export const Vector = forwardRef(IconComponent)
