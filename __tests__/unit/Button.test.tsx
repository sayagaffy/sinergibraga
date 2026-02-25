
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/Button'

// Mock framer-motion to avoid animation issues in tests
jest.mock('framer-motion', () => ({
  motion: {
    button: ({ children, className, disabled, ...props }: any) => (
      <button className={className} disabled={disabled} {...props}>
        {children}
      </button>
    ),
  },
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

  it('renders loading state correctly', () => {
    render(<Button isLoading>Loading</Button>)
    const button = screen.getByRole('button') // Name might be different if spinner is added

    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'true')

    // Check for spinner (assuming implementation adds a spinner with specific class or role)
    // Since we haven't implemented it yet, this test is expected to fail or need adjustment based on implementation
    // For TDD, we expect failure first.
  })
})
