import React from 'react'
import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/home/Hero'

describe('Hero Component', () => {
  it('renders the hero image with correct optimization props', () => {
    render(<Hero />)

    const image = screen.getByAltText('Modern Architecture and Nature')

    // This assertion checks if the sizes prop is present and correct
    expect(image).toHaveAttribute('sizes', '(max-width: 1023px) 1px, 50vw')
  })
})
