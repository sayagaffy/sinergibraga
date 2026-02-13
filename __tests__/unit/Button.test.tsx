import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../../components/ui/Button'
import React from 'react'

// Mock Lucide icons
jest.mock('lucide-react', () => ({
  Loader2: () => <div data-testid="loader">Loading...</div>,
}))

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('shows loader when isLoading is true', () => {
    render(<Button isLoading>Click me</Button>)
    expect(screen.getByTestId('loader')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('does not show loader when isLoading is false', () => {
    render(<Button>Click me</Button>)
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
    expect(screen.getByRole('button')).not.toBeDisabled()
  })

  it('calls onClick when clicked and not loading', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByText('Click me'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when loading', () => {
    const handleClick = jest.fn()
    render(<Button isLoading onClick={handleClick}>Click me</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })
})
