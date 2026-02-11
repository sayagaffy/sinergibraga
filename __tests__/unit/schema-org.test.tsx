import { render } from '@testing-library/react'
import { SchemaOrg } from '@/components/seo/SchemaOrg'

// Mock next/script
jest.mock('next/script', () => {
  return function MockScript({ children, id, type }: any) {
    return (
      <div data-testid={id} data-type={type}>
        {children}
      </div>
    )
  }
})

describe('SchemaOrg Component', () => {
  it('renders default Organization schema correctly', () => {
    const { getByTestId } = render(<SchemaOrg />)
    const scriptEl = getByTestId('schema-org')

    expect(scriptEl).toBeInTheDocument()
    expect(scriptEl).toHaveAttribute('data-type', 'application/ld+json')

    const json = JSON.parse(scriptEl.textContent || '{}')
    expect(json['@graph'][0]['@type']).toBe('Organization')
    expect(json['@graph'][0].name).toBe('PT Sinergi Braga Mandiri')
  })

  it('renders Service schema with features and expert', () => {
    const mockData = {
      title: 'Test Service',
      description: 'Test Desc',
      features: ['Feature 1', 'Feature 2'],
      expert: {
        id: 'expert-1',
        name: 'Dr. Expert',
        role: 'Chief Expert',
        photoUrl: '/expert.jpg',
        linkedinUrl: 'https://linkedin.com/expert'
      },
      faqs: [
        { question: 'Q1', answer: 'A1' }
      ]
    }

    const { getByTestId } = render(<SchemaOrg type="Service" data={mockData} />)
    const scriptEl = getByTestId('schema-org')
    const json = JSON.parse(scriptEl.textContent || '{}')

    const types = json['@graph'].map((item: any) => item['@type'])
    expect(types).toContain('Organization')
    expect(types).toContain('Service')
    expect(types).toContain('Person')
    expect(types).toContain('FAQPage')

    const service = json['@graph'].find((item: any) => item['@type'] === 'Service')
    expect(service.name).toBe('Test Service')
    expect(service.hasOfferCatalog.itemListElement).toHaveLength(2)
  })
})
