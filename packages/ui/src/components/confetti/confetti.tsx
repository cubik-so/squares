import React, { useEffect, useRef, useState } from 'react'
import Confetti from 'react-confetti'
import type { IConfettiOptions } from 'react-confetti/dist/types/Confetti'

interface ConfettiProps {
    height: number
    width: number
}

export const MyConfetti = ({ height, width, ...props }: ConfettiProps) => {
    const confettiRef = useRef<HTMLCanvasElement>(null)
    const [runConfetti, setRunConfetti] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setRunConfetti(false)
        }, 3000)
    }, [])

    return (
        <Confetti
            ref={confettiRef}
            height={height}
            width={width}
            recycle={runConfetti}
            tweenDuration={3000}
            colors={['#00EB52', '#DDDDDD', '#393939', '#EEBE00']}
            {...props}
        />
    )
}
