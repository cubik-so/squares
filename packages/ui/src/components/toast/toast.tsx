import { Toaster, toast } from 'sonner'
import { useMediaQuery } from 'usehooks-ts'

import { Spinner } from '../spinner'

const CubikToaster = () => {
    const isMobile = useMediaQuery('(max-width: 768px)')
    return (
        <Toaster
            position={isMobile ? 'bottom-center' : 'bottom-center'}
            loadingIcon={<Spinner size="sm" />}
            className="flex items-center w-fit max-w-[90%] md:!max-w-[100%] md:w-full justify-center"
            toastOptions={{
                unstyled: true,
                classNames: {
                    toast: 'bg-[var(--toast-primary-surface)] shadow-lg !w-fit md:w-auto text-[var(--toast-primary-text)] py-2 md:py-3 px-3 md:px-4 mx-auto rounded-xl transition-all flex flex-row gap-1 md:gap-2 items-center justify-center',
                    title: isMobile ? '!text-xs font-normal' : 'text-md font-normal',
                    description: isMobile
                        ? '!text-xs w-fit !font-light pr-3'
                        : 'text-sm w-fit !font-light pr-3',
                    actionButton:
                        'underline underline-offset-4 !bg-transparent !border-none !text-[var(--color-fg-primary-base)]',
                    cancelButton: 'bg-orange-400',
                    closeButton: 'bg-lime-400',
                    loader: '!bg-[var(--toast-loading-surface)] !dark:border-[var(--toast-primary-transparent)] !text-[var(--toast-loading-text)]',
                    error: '!bg-[var(--toast-error-surface)] !text-[var(--toast-error-text)]',
                    success: 'bg-[var(--toast-success-surface)] text-[var(--toast-success-text)]',
                    warning:
                        'bg-[var(--toast-warning-surface)] text-[var(--toast-warning-text)] border border-[var(--color-border-primary-transparent)]',
                    info: '!bg-[var(--toast-info-surface)] text-[var(--toast-info-text)]',
                },
            }}
        />
    )
}

export { toast, CubikToaster }
