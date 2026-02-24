import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/Button'
import '@testing-library/jest-dom'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('renders disabled state', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button', { name: /disabled/i })
    expect(button).toBeDisabled()
  })

  it('renders loading state', () => {
    render(<Button isLoading>Loading</Button>)
    const button = screen.getByRole('button', { name: /loading/i })

    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'true')

    // Check for spinner (Lucide icons usually render as SVGs with specific classes)
    const spinner = button.querySelector('.animate-spin')
    expect(spinner).toBeInTheDocument()
  })
})
