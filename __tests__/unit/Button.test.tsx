import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/Button'

describe('Button', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('shows loading spinner when isLoading is true', () => {
    render(<Button isLoading>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(screen.getByTestId('icon-Loader2')).toBeInTheDocument()
  })

  it('is disabled when isLoading is true', () => {
    render(<Button isLoading>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('does not show spinner when isLoading is false', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).not.toBeDisabled()
    expect(screen.queryByTestId('icon-Loader2')).not.toBeInTheDocument()
  })

  it('respects disabled prop even if isLoading is false', () => {
    render(<Button disabled>Click me</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })
})
