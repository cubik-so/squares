// import React from 'react'
// import { render } from '@testing-library/react'
// import { Text } from './Text'

// describe('Text component', () => {
//     test('renders with default props', () => {
//         const { getByText } = render(<Text>Hello, World!</Text>)
//         const textElement = getByText('Hello, World!')
//         expect(textElement).toBeInTheDocument()
//         expect(textElement).toHaveClass('text-color-fg-primary-depth') // Default color class
//     })

//     test('renders with specified color and variant', () => {
//         const { getByText } = render(
//             <Text color="secondary" variant="h2">
//                 Heading
//             </Text>,
//         )
//         const textElement = getByText('Heading')
//         expect(textElement).toBeInTheDocument()
//         expect(textElement).toHaveClass('text-color-fg-primary-base') // Specified color class
//         expect(textElement).toHaveClass('h2') // Specified variant class
//     })

//     test('renders with specified color only', () => {
//         const { getByText } = render(<Text color="info">Information</Text>)
//         const textElement = getByText('Information')
//         expect(textElement).toBeInTheDocument()
//         expect(textElement).toHaveClass('text-color-fg-info-base') // Specified color class
//     })

//     test('renders with specified variant only', () => {
//         const { getByText } = render(<Text variant="l3">Large Text</Text>)
//         const textElement = getByText('Large Text')
//         expect(textElement).toBeInTheDocument()
//         expect(textElement).toHaveClass('l3') // Specified variant class
//     })
// })
