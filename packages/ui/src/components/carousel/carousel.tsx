import * as React from 'react'
import useEmblaCarousel, {
    type EmblaCarouselType as CarouselApi,
    type EmblaOptionsType as CarouselOptions,
    type EmblaPluginType as CarouselPlugin,
} from 'embla-carousel-react'
import { cn } from '@utils/cn'
import Icon from '@/icons'
import { FormStepper } from '@components/form-stepper/form-stepper'
import type { Button } from '../button/button'

export type { CarouselApi }

type CarouselProps = {
    opts?: CarouselOptions
    plugins?: CarouselPlugin[]
    orientation?: 'horizontal' | 'vertical'
    setApi?: (api: CarouselApi) => void
    allowOverflow?: boolean
}

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0]
    api: ReturnType<typeof useEmblaCarousel>[1]
    scrollPrev: () => void
    scrollNext: () => void
    canScrollPrev: boolean
    canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
    const context = React.useContext(CarouselContext)

    if (!context) {
        throw new Error('useCarousel must be used within a <Carousel />')
    }

    return context
}

export const Carousel = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
    (
        {
            orientation = 'horizontal',
            opts,
            setApi,
            plugins,
            allowOverflow = false,
            className,
            children,
            ...props
        },
        ref,
    ) => {
        const [carouselRef, api] = useEmblaCarousel(
            {
                ...opts,
                axis: orientation === 'horizontal' ? 'x' : 'y',
            },
            plugins,
        )
        const [canScrollPrev, setCanScrollPrev] = React.useState(false)
        const [canScrollNext, setCanScrollNext] = React.useState(false)

        const onSelect = React.useCallback((_api: CarouselApi) => {
            if (!_api) {
                return
            }

            setCanScrollPrev(_api.canScrollPrev())
            setCanScrollNext(_api.canScrollNext())
        }, [])

        const scrollPrev = React.useCallback(() => {
            api?.scrollPrev()
        }, [api])

        const scrollNext = React.useCallback(() => {
            api?.scrollNext()
        }, [api])

        const handleKeyDown = React.useCallback(
            (event: React.KeyboardEvent<HTMLDivElement>) => {
                if (event.key === 'ArrowLeft') {
                    event.preventDefault()
                    scrollPrev()
                } else if (event.key === 'ArrowRight') {
                    event.preventDefault()
                    scrollNext()
                }
            },
            [scrollPrev, scrollNext],
        )

        React.useEffect(() => {
            if (!api || !setApi) {
                return
            }

            setApi(api)
        }, [api, setApi])

        React.useEffect(() => {
            if (!api) {
                return
            }

            onSelect(api)
            api.on('reInit', onSelect)
            api.on('select', onSelect)

            return () => {
                api?.off('select', onSelect)
            }
        }, [api, onSelect])

        return (
            <CarouselContext.Provider
                value={{
                    carouselRef,
                    api: api,
                    opts,
                    orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
                    allowOverflow,
                    scrollPrev,
                    scrollNext,
                    canScrollPrev,
                    canScrollNext,
                }}
            >
                <div
                    ref={ref}
                    onKeyDownCapture={handleKeyDown}
                    className={cn('relative', className)}
                    role="region"
                    aria-roledescription="carousel"
                    {...props}
                >
                    {children}
                </div>
            </CarouselContext.Provider>
        )
    },
)
Carousel.displayName = 'Carousel'

export const CarouselContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { carouselRef, orientation, allowOverflow } = useCarousel()

    return (
        <div ref={carouselRef} className={allowOverflow ? 'overflow-visible' : 'overflow-auto'}>
            <div
                ref={ref}
                className={cn(
                    'flex',
                    allowOverflow ? '' : 'gap-4',
                    orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
                    className,
                )}
                {...props}
            />
        </div>
    )
})
CarouselContent.displayName = 'CarouselContent'

export const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => {
        const { orientation } = useCarousel()

        return (
            <div
                ref={ref}
                role="group"
                aria-roledescription="slide"
                className={cn(
                    'min-w-0 shrink-0 grow-0 basis-auto',
                    orientation === 'horizontal' ? 'pl-4' : 'pt-4',
                    className,
                )}
                {...props}
            />
        )
    },
)
CarouselItem.displayName = 'CarouselItem'

export const CarouselPrevious = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel()

    return (
        <button
            ref={ref}
            className={cn(
                'absolute cursor-pointer bg-color-surface-primary-base border border-color-border-primary-subdued p-1 rounded-lg',
                orientation === 'horizontal'
                    ? '-left-4 top-1/2 -translate-y-1/2'
                    : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
                className,
            )}
            disabled={!canScrollPrev}
            onClick={(e) => {
                e.preventDefault()
                scrollPrev()
            }}
            {...props}
        >
            {' '}
            <Icon
                name={'chevron-left'}
                width={18}
                height={18}
                strokeWidth={2}
                color="var(--color-fg-primary-base)"
            />
        </button>
    )
})
CarouselPrevious.displayName = 'CarouselPrevious'

export const CarouselNext = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel()

    return (
        <button
            ref={ref}
            className={cn(
                'absolute cursor-pointer bg-color-surface-primary-base border border-color-border-primary-subdued p-1 rounded-lg',
                orientation === 'horizontal'
                    ? '-right-4 top-1/2 -translate-y-1/2'
                    : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
                className,
            )}
            disabled={!canScrollNext}
            onClick={(e) => {
                e.preventDefault()
                scrollNext()
            }}
            {...props}
        >
            <Icon
                name={'chevron-right'}
                width={18}
                height={18}
                strokeWidth={2}
                color="var(--color-fg-primary-base)"
            />
        </button>
    )
})
CarouselNext.displayName = 'CarouselNext'

export const CarouselStepper = ({ className }: any) => {
    const { api } = useCarousel() // Use the useCarousel hook to access the Embla API
    const [totalSteps, setTotalSteps] = React.useState(0)

    React.useEffect(() => {
        // Initialize totalSteps once the API is available and after any reinitialization
        if (api) {
            setTotalSteps(api.scrollSnapList().length)
        }
    }, [api])

    const handleStepClick = (stepIndex: number) => {
        // Ensure the clicked step corresponds to the carousel slide
        api && api.scrollTo(stepIndex - 1) // Adjust if your steps are 1-indexed
    }

    if (!api) {
        // Optionally handle the case where the API is not yet available
        return null
    }

    return (
        <div className={cn(' flex items-center justify-center pt-2', className)}>
            <FormStepper
                className="w-fit"
                size="lg"
                currentStep={api.selectedScrollSnap() + 1} // Convert from 0-indexed to 1-indexed if necessary
                totalSteps={totalSteps}
                onClick={handleStepClick}
            />
        </div>
    )
}

CarouselStepper.displayName = 'CarouselStepper'
