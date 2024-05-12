import React from 'react'
import { cva } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { cn } from '@utils/cn'

// Define the props interface
interface StepBarProps {
    size?: 'sm' | 'md' | 'lg'
    currentStep: number
    totalSteps?: number
    stepsToShow?: number
    onClick?: (step: number) => void
    className?: string
}

const SizeVariants = cva([''], {
    variants: {
        size: {
            sm: 'h-[3px] w-[3px]',
            md: 'h-[6px] w-[6px]',
            lg: 'h-[6px] w-[9px]',
        },
    },
    defaultVariants: {
        size: 'md',
    },
})

export const FormStepper: React.FC<StepBarProps> = ({
    size = 'md',
    className,
    currentStep,
    totalSteps = 8,
    stepsToShow = 5,
    onClick,
}) => {
    const halfSteps = Math.floor(stepsToShow / 2)

    const stepVariants = (step: number) => {
        const distance = Math.abs(currentStep - step)
        let width = 6 // Default width for inactive steps
        let opacity = 0.3 // Default opacity for inactive steps

        if (distance === 0) {
            width = 24 // Active step
            opacity = 1
        } else if (distance === 1) {
            width = 16 // Steps adjacent to the active step
            opacity = 0.9
        } else if (distance === 2) {
            width = 10 // Steps adjacent to the active step
            opacity = 0.7
        }

        return {
            active: {
                width: width,
                opacity: opacity,
                backgroundColor: 'color-fg-info-base',
                transition: { type: 'spring', stiffness: 300, damping: 20 },
            },
            inactive: {
                width: width,
                opacity: opacity,
                backgroundColor: 'color-surface-cool-transparent',
                transition: { duration: 0.5 },
            },
        }
    }

    const shouldRenderStep = (step: number) => {
        const startStep = Math.max(1, currentStep - halfSteps)
        const endStep = Math.min(totalSteps, currentStep + halfSteps)

        return step >= startStep && step <= endStep
    }

    return (
        <div className={cn('flex w-full items-center justify-between', className)}>
            <div className="flex items-center gap-2">
                {Array.from({ length: totalSteps }, (_, i) => i + 1).map(
                    (step) =>
                        shouldRenderStep(step) && (
                            <motion.div
                                key={step}
                                onClick={() => onClick && onClick(step)}
                                className={cn(
                                    'h-[6px] cursor-pointer rounded-full',
                                    SizeVariants({ size }),
                                )}
                                variants={stepVariants(step)}
                                initial="inactive"
                                animate={currentStep === step ? 'active' : 'inactive'}
                                layout
                            />
                        ),
                )}
            </div>
        </div>
    )
}
