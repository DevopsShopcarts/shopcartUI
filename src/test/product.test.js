import React from 'react'
import { Product } from '../product/product'
// import { render, unmountComponentAtNode } from "react-dom";
import ReactDOM from 'react-dom/client'
import { act } from 'react-dom/test-utils'

// import {createRoot} from "react-dom/client";
// import { act } from 'react-dom/test-utils'

let container
beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('renders product data', () => {
  const fakeProduct = {
    product_id: 1,
    name: 'Hello World',
    quantity: 10029,
    price: 2039,
    shopcart_id: 1
  }
  // render the product element
  act(() => {
    ReactDOM.createRoot(container).render(
      <Product product={fakeProduct}></Product>
    )
  })
  expect(
    container.querySelector(`[product-text-id="${fakeProduct.product_id}"]`)
      .textContent
  ).toEqual(`Product: ${fakeProduct.product_id}`)
  // before clicking the button the element should be null
  expect(container.querySelector("[product-field-name='product_id']")).toEqual(
    null
  )
  const button = container.querySelector(
    `[product-button-id="${fakeProduct.product_id}"]`
  )
  expect(button).toBeVisible()
  act(() => {
    button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })
  // product id
  expect(
    container.querySelector(`[product-field-name='product_id']`).textContent
  ).toEqual('Product ID:')
  expect(
    container.querySelector("[product-field-val='product_id']").textContent
  ).toEqual(fakeProduct.product_id.toString())
  // name
  expect(
    container.querySelector(`[product-field-name='name']`).textContent
  ).toEqual('Name:')
  expect(
    container.querySelector("[product-field-val='name']").textContent
  ).toEqual(fakeProduct.name.toString())
  // quantity
  expect(
    container.querySelector("[product-field-name='quantity']").textContent
  ).toEqual('Quantity:')
  expect(
    container.querySelector("[product-field-val='quantity']").textContent
  ).toEqual(fakeProduct.quantity.toString())
  // price
  expect(
    container.querySelector("[product-field-name='price']").textContent
  ).toEqual('Price:')
  expect(
    container.querySelector("[product-field-val='price']").textContent
  ).toEqual(fakeProduct.price.toString())
  // shopcart id
  expect(
    container.querySelector("[product-field-name='shopcart_id']").textContent
  ).toEqual('Shopcart ID:')
  expect(
    container.querySelector("[product-field-val='shopcart_id']").textContent
  ).toEqual(fakeProduct.shopcart_id.toString())
})
