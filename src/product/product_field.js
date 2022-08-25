import React from 'react'

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'

class ProductField extends React.Component {
  constructor (props) {
    super(props)
    this.render = this.render.bind(this)
  }
  render () {
    return (
      <Grid container spacing={2}>
        <Grid item xs='12' md={4}>
          <Typography sx={{ fontSize: 14 }} color='text.primary' gutterBottom>
            {this.props.field_name}:
          </Typography>
        </Grid>
        <Grid item xs='12' md={8}>
          <Typography sx={{ fontSize: 14 }} color='text.primary' gutterBottom>
            {this.props.field_val}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}

ProductField.propTypes = {
  field_name: PropTypes.string,
  field_val: PropTypes.any
}

ProductField.defaultProps = {
  field_name: 'Field Not Found',
  field_val: 'Field Value Not Found'
}

export default ProductField
