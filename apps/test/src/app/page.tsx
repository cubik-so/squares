'use client'
import { InputField, InputFieldContainer, InputLabel, InputLeftElement } from '@squares/ui'

export default function Home() {
    return (
        <main className=" flex min-h-screen flex-col items-center justify-center gap-8 p-24">
            <InputLabel
                id="address"
                isRequired
                infoText="sadklfldfasjf"
                counterValue={1}
                maxCounterValue={40}
            >
                Address
            </InputLabel>

            <InputFieldContainer size="md">
                <InputLeftElement>$</InputLeftElement>
                <InputField name="Name" placeholder="Enter Amount" onChange={() => {}} />
            </InputFieldContainer>
        </main>
    )
}
