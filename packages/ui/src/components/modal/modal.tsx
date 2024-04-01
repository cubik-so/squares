import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'
// import { cn } from '@utils/cn'
import { cn } from '@utils/cn'
import type { ClassValue } from 'clsx'

export const DialogSize = {
    sm: `w-[410px] top-[15%] w-fit rounded-[12px] dark:shadow-lg `,
    md: 'w-[500px] top-[15%] rounded-[12px] dark:shadow-lg',
    lg: 'w-[600px] top-[15%] rounded-[16px] dark:shadow-xl',
    xl: 'xl:w-[980px] 2xl:w-[1152px] top-[10%] rounded-[24px] shadow-2xl dark:shadow-black',
}

export type ModalSizeType = keyof typeof DialogSize

interface Props {
    children: React.ReactNode
    open: boolean
    size: ModalSizeType
    className: ClassValue
    onClose: () => void
}
export const Modal = ({ size, open, onClose, className, children }: Props) => {
    return (
        <Dialog.Root open={open}>
            <AnimatePresence>
                {/*
           Portal to render component
        */}
                <Dialog.Portal key={'dialog portal'} forceMount>
                    {/* Modal Overlay background  */}
                    <Dialog.Overlay asChild>
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
                    <Dialog.Content asChild className="h-fit">
                        <motion.div
                            layout
                            initial={{
                                opacity: 0,
                                scale: 0.95,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.95,
                                transition: {
                                    opacity: {
                                        duration: 0.3,
                                    },
                                },
                            }}
                            transition={{
                                opacity: {
                                    duration: 0.2,
                                },
                                scale: {
                                    duration: 0.2,
                                },
                                type: 'spring',
                                stiffness: 250,
                                damping: 20,
                            }}
                            className={cn(
                                `fixed mx-auto bottom-[70%] right-0 left-0 h-fit max-h-[90vh] bg-modal-body-surface focus:outline-none `,
                                DialogSize[size || 'md'],
                                className,
                            )}
                        >
                            {children}
                        </motion.div>
                    </Dialog.Content>
                </Dialog.Portal>
            </AnimatePresence>
        </Dialog.Root>
    )
}
