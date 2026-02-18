import { render, screen } from '@testing-library/react'
import Home from '../../app/page'

// Mock next/dynamic
jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => <div data-testid="dynamic-component">DynamicComponent</div>
  DynamicComponent.displayName = 'LoadableComponent'
  return DynamicComponent
})

// Mock icons - using simple divs to avoid complexity
jest.mock('lucide-react', () => ({
  ArrowRight: () => <div data-testid="icon-arrow-right" />,
  Car: () => <div data-testid="icon-car" />,
  Droplets: () => <div data-testid="icon-droplets" />,
  FileText: () => <div data-testid="icon-file-text" />,
  Waves: () => <div data-testid="icon-waves" />,
  Trophy: () => <div data-testid="icon-trophy" />,
  Scale: () => <div data-testid="icon-scale" />,
  Quote: () => <div data-testid="icon-quote" />,
  ShieldCheck: () => <div data-testid="icon-shield-check" />,
  CheckCircle2: () => <div data-testid="icon-check-circle-2" />,
  Leaf: () => <div data-testid="icon-leaf" />
}))

// Mock Components that might cause issues in integration tests
// Note: We are NOT mocking Hero here because we want to test its content if possible,
// OR if we mock it, we must ensure it doesn't break the page render.
// The previous test file mocked `HeroSection` but `app/page.tsx` uses `Hero`.
jest.mock('../../components/home/Hero', () => ({ Hero: () => <div data-testid="hero-section">Hero Content</div> }))
jest.mock('../../components/home/TrustBar', () => ({ TrustBar: () => <div>TrustBar</div> }))
jest.mock('../../components/home/ServiceCard', () => ({ ServiceCard: ({ title, href }: any) => <a href={href}>{title}</a> }))
jest.mock('../../components/geo/GeoFactSheet', () => ({ __esModule: true, default: () => <div>GeoFactSheet</div> }))
jest.mock('../../components/ui/Button', () => ({ Button: ({ children }: any) => <button>{children}</button> }))

describe('Navigation Flow', () => {
  it('Homepage renders links to key services', () => {
    render(<Home />)

    // Check for Service Links
    expect(screen.getByRole('link', { name: /studi lingkungan/i })).toHaveAttribute('href', '/services/amdal-ukl-upl')
    expect(screen.getByRole('link', { name: /ipal \/ wwtp/i })).toHaveAttribute('href', '/services/ipal-wwtp')
    expect(screen.getByRole('link', { name: /andalalin/i })).toHaveAttribute('href', '/services/andalalin')

    // Check for Contact CTA
    expect(screen.getByRole('link', { name: /mulai konsultasi/i })).toHaveAttribute('href', '/contact')
  })
})
