import { render, screen } from '@testing-library/react'
import Home from '../../app/page'

// Mock next/dynamic
jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => <div data-testid="dynamic-component">DynamicComponent</div>
  DynamicComponent.displayName = 'LoadableComponent'
  return DynamicComponent
})

// Mock Components
// We remove the explicit lucide-react mock because we have a global manual mock now that handles ALL icons.
// jest.mock('lucide-react', ...)

jest.mock('../../components/home/HeroSection', () => ({ HeroSection: () => <div>HeroSection</div> }))
jest.mock('../../components/home/TrustBar', () => ({ TrustBar: () => <div>TrustBar</div> }))
jest.mock('../../components/home/ServiceCard', () => ({ ServiceCard: ({ title, href }: any) => <a href={href}>{title}</a> }))
jest.mock('../../components/geo/GeoFactSheet', () => ({ __esModule: true, default: () => <div>GeoFactSheet</div> }))
// Using the real Button component (which is mocked via framer-motion/lucide-react global mocks) or keep this simple mock?
// The global mocks are robust now, so we could remove this mock too, but let's keep it simple for this integration test.
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
