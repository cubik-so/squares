// LinkComponents.tsx
import { createContext, useContext } from 'react'
import Link from 'next/link'
import type { MouseEvent, ReactNode} from 'react';
import type { LinkProps } from 'next/link';

// Create a Context with a default value of false
const LinkBoxContext = createContext<boolean>(false)

interface LinkBoxProps {
    children: ReactNode
    // Allow for any other prop using an index signature
    [x: string]: any
}

const LinkBox = ({ children, ...props }: LinkBoxProps): JSX.Element => {
    return (
        <div {...props} style={{ position: 'relative' }}>
            <LinkBoxContext.Provider value={true}>{children}</LinkBoxContext.Provider>
        </div>
    )
}

interface LinkOverlayProps extends LinkProps {
    children: ReactNode
    href: string
}

const LinkOverlay = ({ children, href, ...props }: LinkOverlayProps): JSX.Element => {
    const isInLinkBox = useContext(LinkBoxContext)

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        // Prevent the event from bubbling up to the LinkBox if inside one
        if (isInLinkBox) {
            e.stopPropagation()
        }
        // Additional onClick logic can go here
    }

    return (
        <Link href={href} onClick={handleClick} className="relative w-fit" passHref {...props}>
            {children}
        </Link>
    )
}

export { LinkBox, LinkOverlay }
