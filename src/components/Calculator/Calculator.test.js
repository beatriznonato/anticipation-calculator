import React from 'react'

import { render, screen } from '@testing-library/react'

import Calculator from './Calculator'

describe('Tests for Calculator component', () => {
  it('Should initial value when first render', () => {
    render(
      <Calculator />
    )
    expect(screen.getByText('Simule sua Antecipação'))
  })
})
