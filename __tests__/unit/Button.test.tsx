import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/Button'
import React from 'react'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('shows loading spinner when isLoading is true', () => {
    render(<Button isLoading>Click me</Button>)
    expect(screen.getByRole('button')).toHaveAttribute('aria-busy', 'true')
    expect(screen.getByRole('button')).toBeDisabled()
    // Verify spinner is present by checking for the animate-spin class or similar
    // We can't easily query the SVG without an accessible name, but presence inside the button is implied by not throwing
    // We can check if the button contains an element with class 'animate-spin'
    const button = screen.getByRole('button')
    const spinner = button.querySelector('.animate-spin')
    expect(spinner).toBeInTheDocument()
  })

  it('is disabled when isLoading is true', () => {
    render(<Button isLoading>Click me</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('is not disabled by default', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).not.toBeDisabled()
  })
})
