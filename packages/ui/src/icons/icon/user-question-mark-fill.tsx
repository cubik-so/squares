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
        displayName: 'UserQuestionMarkFill',
        paths: [
            {
                d: 'M15.3545 18.3322C15.3938 18.3461 15.4333 18.3591 15.4729 18.3712C15.4575 18.7267 15.5056 19.091 15.6249 19.4487C15.6932 19.6537 15.7815 19.8463 15.8869 20.0253C15.6406 20.4608 15.5 20.964 15.5 21.5C15.5 21.6704 15.5142 21.8374 15.5415 22H6C4.34315 22 3 20.6569 3 19C3 16.2386 5.23858 14 8 14H13.7286C13.6506 14.1645 13.5809 14.3336 13.52 14.5067C12.9702 16.0697 13.7915 17.7824 15.3545 18.3322Z',
                fill: false,
                stroke: true,
            },
            {
                d: 'M12 2.25C9.37665 2.25 7.25 4.37665 7.25 7C7.25 9.62335 9.37665 11.75 12 11.75C14.6234 11.75 16.75 9.62335 16.75 7C16.75 4.37665 14.6234 2.25 12 2.25Z',
                fill: false,
                stroke: true,
            },
            {
                d: 'M18.6821 15.018C18.3915 14.9681 18.0927 15.0227 17.8385 15.1721C17.5844 15.3215 17.3913 15.556 17.2934 15.8341C17.1102 16.3551 16.5392 16.6288 16.0183 16.4456C15.4973 16.2623 15.2235 15.6914 15.4068 15.1704C15.6613 14.4467 16.1638 13.8365 16.8251 13.4478C17.4865 13.0592 18.2641 12.9171 19.0202 13.0468C19.7763 13.1764 20.462 13.5695 20.9561 14.1564C21.45 14.7431 21.7203 15.4857 21.7193 16.2526C21.7189 17.5324 20.7722 18.3551 20.1499 18.77C19.8082 18.9978 19.4736 19.1643 19.2285 19.2733C19.1044 19.3284 18.9997 19.3704 18.9236 19.3994C18.8788 19.4164 18.8339 19.433 18.7885 19.4483C18.271 19.6209 17.695 19.3341 17.5223 18.8162C17.35 18.2991 17.6376 17.7245 18.1542 17.5515C18.2207 17.5279 18.2941 17.4999 18.4162 17.4457C18.5925 17.3673 18.8201 17.2528 19.0405 17.1059C19.5422 16.7714 19.7193 16.4703 19.7193 16.2517V16.2502C19.7198 15.9554 19.6159 15.6699 19.426 15.4444C19.2362 15.2189 18.9726 15.0678 18.6821 15.018Z',
                fill: false,
                stroke: true,
            },
            {
                d: 'M17.5001 21.5C17.5001 20.9477 17.9478 20.5 18.5001 20.5H18.5101C19.0624 20.5 19.5101 20.9477 19.5101 21.5C19.5101 22.0523 19.0624 22.5 18.5101 22.5H18.5001C17.9478 22.5 17.5001 22.0523 17.5001 21.5Z',
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

export const UserQuestionMarkFill = forwardRef(IconComponent)
