import React from "react"
import { unmountComponentAtNode } from "react-dom"
import {Product} from "../product/product"
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

let container = null
beforeEach(
    () => {
        container = document.createElement("div")
        document.body.appendChild.apply(container)
    }
)

afterEach(
    () => {
        unmountComponentAtNode(container)
        container.remove()
        container = null
    }
)

it("renders product data", () =>{
    const fakeProduct = {
        product_id: 1,
        name: "Hello World",
        quantity: 10029,
        price: 2039,
        shopcart_id: 1,
    }
    act(() => {
        render(
            <Product product={fakeProduct}></Product>
        )
        expect(container.querySelector())
    })
}
)
