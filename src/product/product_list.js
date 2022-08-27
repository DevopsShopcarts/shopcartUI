import PropTypes from 'prop-types'
import React from 'react'
import {productType, Product} from './product.js'

class ProductList extends React.Component {
  constructor (props) {
    super(props)
    this.render = this.render.bind(this)
  }

  render () {
    return (
      <div>
        {this.props.products.map((product, index) => (
          <Product product={product}></Product>
        ))}
      </div>
    )
  }
}

ProductList.protoTypes = {
  productList: PropTypes.arrayOf(productType)
}

ProductList.defaultProps = {
    "products": [
    {
        product_id: 1,
        name: "Apple Watch",
        quantity: 2,
        price: 200,
        shopcart_id:1
    },
    {
        product_id: 2,
        name: "The Best Phone Ever in the World",
        quantity: 20392,
        price: 20,
        shopcart_id:1
    },
]
}

export {ProductList}
