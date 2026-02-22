import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/Button'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('shows loading spinner and is disabled when isLoading is true', () => {
    render(<Button isLoading>Click me</Button>)

    // Check for spinner
    // In our mock, Loader2 renders as <svg data-testid="icon-Loader2" />
    expect(screen.getByTestId('icon-Loader2')).toBeInTheDocument()

    // Check for disabled attribute
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeDisabled()
  })

  it('does not show spinner when isLoading is false', () => {
    render(<Button>Click me</Button>)
    expect(screen.queryByTestId('icon-Loader2')).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: /click me/i })).not.toBeDisabled()
  })
})
