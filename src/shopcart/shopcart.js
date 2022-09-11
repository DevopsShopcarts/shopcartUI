import React from 'react'
import Grid from '@mui/material/Grid'
// import {Product} from '../product/product.js'
import {ProductList} from '../product/product_list.js'
class Shopcart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: -1,
      products: []
    }
  }
  render () {
    return (
      <div>
        <Grid
          container
          spacing={2}
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Grid item xs={0} md={2}></Grid>
          <Grid item xs={12} md={8}>
            <ProductList></ProductList>
            {/* <Product
              id={1}
              name='Default Name'
              quantity={23}
              price={320}
              shopcart_id={32}
            /> */}
          </Grid>
          <Grid item xs={0} md={2}></Grid>
        </Grid>
      </div>
    )
  }
}

export default Shopcart
