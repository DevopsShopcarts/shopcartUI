import React from 'react'
import { ProductList } from '../product/product_list'
import ReactDOM from 'react-dom/client'
import { act } from 'react-dom/test-utils'

let container
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('renders product list data', () => {
  const fakeProductList = [
    {
      product_id: 1,
      name: 'Hello World',
      quantity: 10029,
      price: 2039,
      shopcart_id: 1
    },
    {
      product_id: 2,
      name: 'Apple Watch',
      quantity: 1039,
      price: 203,
      shopcart_id: 1
    },
    {
      product_id: 3,
      name: 'Air Pods Pro',
      quantity: 10,
      price: 20,
      shopcart_id: 1
    }
  ]

  act(() => {
    ReactDOM.createRoot(container).render(
      <ProductList products={fakeProductList}></ProductList>
    )
  })
  expect(
    container.querySelector(
      `[product-text-id="${fakeProductList[0].product_id}"]`
    ).textContent
  ).toEqual(`Product: ${fakeProductList[0].product_id}`)
})
