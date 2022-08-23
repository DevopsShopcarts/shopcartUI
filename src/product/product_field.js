import React from 'react'

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

class Product_Field {
  constructor (props) {
    super(props)
    this.render = this.render.bind(this)
  }
  render () {
    return (
      <Grid container spacing={2}>
        <Grid item xs='12' md={4}>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {this.props.field_name}
          </Typography>
        </Grid>
        <Grid item xs='12' md={8}>
          <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
            {this.props.field_val}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}
