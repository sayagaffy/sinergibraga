import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactPage from '../../app/contact/page'

// Mock icons to avoid render issues and focus on logic
jest.mock('lucide-react', () => ({
  MapPin: () => <div data-testid="icon-map-pin" />,
  Phone: () => <div data-testid="icon-phone" />,
  Mail: () => <div data-testid="icon-mail" />,
  Clock: () => <div data-testid="icon-clock" />,
  Instagram: () => <div data-testid="icon-instagram" />
}))

// Mock components
jest.mock('../../components/ui/Section', () => ({
  Section: ({ children }: any) => <div>{children}</div>
}))
jest.mock('../../components/ui/Card', () => ({
  Card: ({ children, className }: any) => <div className={className}>{children}</div>
}))
jest.mock('../../components/ui/Button', () => ({
  Button: ({ isLoading, ...props }: any) => <button {...props}>{props.children}</button>
}))

describe('ContactPage Integration', () => {
  it('validates empty form inputs', async () => {
    render(<ContactPage />)

    // Click submit without filling form
    const submitBtn = screen.getByRole('button', { name: /kirim pesan/i })
    fireEvent.click(submitBtn)

    // Expect error messages
    expect(screen.getByText('Nama wajib diisi')).toBeInTheDocument()
    expect(screen.getByText('Email wajib diisi')).toBeInTheDocument()
    expect(screen.getByText('Pesan wajib diisi')).toBeInTheDocument()
  })

  it('validates invalid email format', async () => {
    const user = userEvent.setup()
    render(<ContactPage />)

    await user.type(screen.getByLabelText(/nama lengkap/i), 'Test User')
    await user.type(screen.getByLabelText(/email/i), 'invalid-email')
    await user.type(screen.getByLabelText(/pesan/i), 'Test Message')

    const submitBtn = screen.getByRole('button', { name: /kirim pesan/i })
    await user.click(submitBtn)

    expect(screen.getByText('Format email tidak valid')).toBeInTheDocument()
  })

  it('submits form successfully with valid data', async () => {
    const user = userEvent.setup()
    render(<ContactPage />)

    await user.type(screen.getByLabelText(/nama lengkap/i), 'Test User')
    await user.type(screen.getByLabelText(/email/i), 'test@example.com')
    await user.type(screen.getByLabelText(/pesan/i), 'Test Message')

    const submitBtn = screen.getByRole('button', { name: /kirim pesan/i })
    await user.click(submitBtn)

    expect(await screen.findByText(/pesan terkirim/i, {}, { timeout: 4000 })).toBeInTheDocument()
  })
})
