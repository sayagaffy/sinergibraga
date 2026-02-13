import { render, screen } from '@testing-library/react'
import Home from '../../app/page'

// Mock next/dynamic
jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => <div data-testid="dynamic-component">DynamicComponent</div>
  DynamicComponent.displayName = 'LoadableComponent'
  return DynamicComponent
})

// Mock icons
jest.mock('lucide-react', () => ({
  ArrowRight: () => <div data-testid="icon-arrow-right" />,
  Car: () => <div data-testid="icon-car" />,
  Droplets: () => <div data-testid="icon-droplets" />,
  FileText: () => <div data-testid="icon-file-text" />,
  Waves: () => <div data-testid="icon-waves" />,
  Trophy: () => <div data-testid="icon-trophy" />,
  Scale: () => <div data-testid="icon-scale" />,
  Quote: () => <div data-testid="icon-quote" />
}))

// Mock Components
jest.mock('../../components/home/Hero', () => ({ Hero: () => <div>HeroSection</div> }))
jest.mock('../../components/home/TrustBar', () => ({ TrustBar: () => <div>TrustBar</div> }))
jest.mock('../../components/home/ServiceCard', () => ({ ServiceCard: ({ title, href }: any) => <a href={href}>{title}</a> }))
// We don't need to mock GeoFactSheet explicitly if dynamic is mocked, but for safety:
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
