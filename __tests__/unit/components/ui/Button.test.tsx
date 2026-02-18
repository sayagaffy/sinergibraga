import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/Button'
import '@testing-library/jest-dom'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    button: React.forwardRef(({ children, whileHover, whileTap, ...props }: any, ref: any) => (
      <button ref={ref} {...props}>
        {children}
      </button>
    )),
  },
}))

// Mock lucide-react to avoid icon rendering issues
jest.mock('lucide-react', () => ({
  Loader2: ({ className }: { className?: string }) => <div data-testid="loader" className={className} />,
}))

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('applies variant classes correctly', () => {
    render(<Button variant="secondary">Secondary Button</Button>)
    const button = screen.getByRole('button', { name: /secondary button/i })
    expect(button).toHaveClass('bg-sbm-teal')
  })

  it('applies size classes correctly', () => {
    render(<Button size="lg">Large Button</Button>)
    const button = screen.getByRole('button', { name: /large button/i })
    expect(button).toHaveClass('h-14')
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByRole('button', { name: /disabled button/i })
    expect(button).toBeDisabled()
  })

  it('shows loading spinner and is disabled when isLoading is true', () => {
    render(<Button isLoading>Loading Button</Button>)
    const button = screen.getByRole('button', { name: /loading button/i })

    expect(button).toBeDisabled()
    expect(screen.getByTestId('loader')).toBeInTheDocument()
    expect(screen.getByTestId('loader')).toHaveClass('animate-spin')
  })
})
