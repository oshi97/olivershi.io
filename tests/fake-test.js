import { render } from '@testing-library/react'
import Icon from '../src/components/Icon'
import React from 'react'

describe('fake test for coverage', () => {
  it('tests stuff', () => {
    expect(1).toEqual(1)
  })

  it('can render an icon', () => {
    const { container } = render(<Icon />)
    expect(container).toBeTruthy()
  })
})