import { Toaster, toast } from 'sonner'
import { useMediaQuery } from 'usehooks-ts'
import { Spinner } from '../spinner/spinner'

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
                    toast: 'bgtoast-primary-surface shadow-lg !w-fit md:w-auto texttoast-primary-text py-2 md:py-3 px-3 md:px-4 mx-auto rounded-xl transition-all flex flex-row gap-1 md:gap-2 items-center justify-center',
                    title: isMobile ? '!text-xs font-normal' : 'text-md font-normal',
                    description: isMobile
                        ? '!text-xs w-fit !font-light pr-3'
                        : 'text-sm w-fit !font-light pr-3',
                    actionButton:
                        'underline underline-offset-4 !bg-transparent !border-none !textcolor-fg-primary-base',
                    cancelButton: 'bg-orange-400',
                    closeButton: 'bg-lime-400',
                    loader: '!bgtoast-loading-surface !dark:bordertoast-primary-transparent !texttoast-loading-text',
                    error: '!bgtoast-error-surface !texttoast-error-text',
                    success: 'bgtoast-success-surface texttoast-success-text',
                    warning:
                        'bgtoast-warning-surface texttoast-warning-text border bordercolor-border-primary-transparent',
                    info: '!bgtoast-info-surface texttoast-info-text',
                },
            }}
        />
    )
}

export { toast, CubikToaster }
