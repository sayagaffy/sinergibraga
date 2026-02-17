import { render, screen } from '@testing-library/react'
import { Button } from '../../components/ui/Button'
import React from 'react'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('applies variant classes', () => {
    render(<Button variant="outline">Outline</Button>)
    const button = screen.getByRole('button', { name: /outline/i })
    expect(button).toHaveClass('border-2')
  })

  it('shows loading state when isLoading is true', () => {
    render(<Button isLoading>Loading...</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()

    // Check for the spinner.
    // Since we mock lucide-react globally, it renders a div with data-testid.
    // Loader2 -> data-testid="icon-loader2"
    // However, regex might be tricky with numbers.
    // Let's debug if needed, but 'loader2' seems likely based on my mental model of the regex.
    // If it fails, I'll check the failure message.
    const spinner = screen.getByTestId('icon-loader2')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('animate-spin')
  })
})
