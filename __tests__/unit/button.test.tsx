import { render, screen } from '@testing-library/react'
import { Button } from '../../components/ui/Button'
import '@testing-library/jest-dom'

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    // Filter out framer-motion props to avoid React warnings on DOM elements
    button: ({ children, whileHover, whileTap, ...props }: any) => <button {...props}>{children}</button>,
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('shows loading state when isLoading is true', () => {
    render(<Button isLoading>Submit</Button>)

    const button = screen.getByRole('button')
    expect(button).toBeDisabled()

    // We expect the button to still contain the text
    expect(screen.getByText('Submit')).toBeInTheDocument()
  })
})
