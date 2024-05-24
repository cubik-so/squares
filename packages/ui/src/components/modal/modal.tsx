import React from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { cva } from 'class-variance-authority'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@utils/cn'
import type { ReactNode } from 'react'

export const DialogSize = {
    sm: 'w-[410px] w-fit rounded-[12px] dark:shadow-lg p-4',
    md: 'w-[500px] rounded-[12px] dark:shadow-lg p-4 md:p-6',
    lg: 'w-[600px] rounded-[16px] dark:shadow-xl p-6',
    xl: 'xl:w-[980px] 2xl:w-[1152px]  rounded-[24px] shadow-2xl dark:shadow-black p-6',
}

const modalContentVariants = cva('', {
    variants: {
        dialogSize: DialogSize,
    },
    defaultVariants: {
        dialogSize: 'sm',
    },
})

interface Props {
    open: boolean
    onClose: () => void
    dialogSize: 'sm' | 'md' | 'lg' | 'xl'
    children: ReactNode | React.JSX.Element
    className?: string
    disableBackdropClick?: boolean
}

export const Modal = ({
    open,
    onClose,
    dialogSize = 'sm',
    children,
    className,
    disableBackdropClick = false,
}: Props) => {
    return (
        <Dialog.Root open={open}>
            <AnimatePresence>
                {open && (
                    <Dialog.Portal
                        key={'dialog portal'}
                        container={document.getElementById('dialog-portal')}
                        forceMount
                    >
                        <Dialog.Overlay
                            className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0"
                            onClick={() => {
                                if (disableBackdropClick) return
                                onClose()
                            }}
                        >
                            <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                exit={{
                                    opacity: 0,
                                }}
                                className="z-0 pointer-events-auto bg-[#48484825] dark:bg-[#27272705] backdrop-blur-[8px] fixed inset-0"
                                onClick={onClose}
                            />
                        </Dialog.Overlay>
                        <Dialog.Content
                            className={cn(
                                `fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] bg-modal-body-surface translate-x-[-50%] translate-y-[-50%] focus:outline-none overflow-scroll no-scrollbar`,
                                modalContentVariants({ dialogSize }),
                                className,
                            )}
                        >
                            {children}
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </AnimatePresence>
        </Dialog.Root>
    )
}
