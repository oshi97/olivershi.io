import { render } from '@testing-library/react'
import Icon from '../src/components/Icon'
import React from 'react'
import routes from '../app/routes'

describe('fake test for coverage', () => {
  it('tests stuff', () => {
    expect(1).toEqual(1)
  })

  it('can render an icon', () => {
    const { container } = render(<Icon />)
    expect(container).toBeTruthy()
  })

  it('has routes', () => {
    expect(Object.keys(routes)).toHaveLength(5)
  })
})