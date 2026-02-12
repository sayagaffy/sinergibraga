import { render, screen } from '@testing-library/react'
import { Button } from '../../components/ui/Button'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })

  it('shows loading spinner when isLoading is true', () => {
    render(<Button isLoading>Click me</Button>)
    // The spinner is from Lucide, usually renders an SVG.
    // I can search for the class 'animate-spin' which I added.
    const button = screen.getByRole('button')
    // eslint-disable-next-line testing-library/no-node-access
    const spinner = button.querySelector('.animate-spin')
    expect(spinner).toBeInTheDocument()
    // Check if the button is disabled
    expect(button).toBeDisabled()
    // Check aria-busy
    expect(button).toHaveAttribute('aria-busy', 'true')
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })
})
