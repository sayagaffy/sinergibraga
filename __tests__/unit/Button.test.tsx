import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '../../components/ui/Button'
import '@testing-library/jest-dom'

// Mock lucide-react since it will be used in the component
jest.mock('lucide-react', () => ({
  Loader2: ({ className }: { className?: string }) => <div data-testid="loader" className={className} />
}))

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).not.toBeDisabled()
  })

  it('applies variant classes correctly', () => {
    render(<Button variant="secondary">Secondary</Button>)
    const button = screen.getByRole('button', { name: /secondary/i })
    expect(button).toHaveClass('bg-sbm-teal')
  })

  it('shows loading state when isLoading is true', () => {
    render(<Button isLoading>Submit</Button>)
    const button = screen.getByRole('button')

    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-disabled', 'true')
    expect(screen.getByTestId('loader')).toBeInTheDocument()
    // Content should be hidden or replaced? Usually spinner is added.
    // Let's assume we want to see the text still, or maybe just the spinner.
    // Common pattern is spinner alongside text or replacing it.
    // I'll update the component to show spinner alongside text.
  })
})
