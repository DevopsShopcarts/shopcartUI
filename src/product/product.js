import React from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
// import InboxIcon from '@mui/icons-material/MoveToInbox'
// import DraftsIcon from '@mui/icons-material/Drafts'
// import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
// import StarBorder from '@mui/icons-material/StarBorder'
import ListItem from '@mui/material/ListItem'
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import InventoryIcon from '@mui/icons-material/Inventory'
// import Typography from '@mui/material/Typography'
// import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'

import ProductField from './product_field'

class Product extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: -1,
      name: '',
      quantity: -1,
      price: -1,
      shopcart_id: -1,
      open: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.render = this.render.bind(this)
  }
  handleClick () {
    console.log(this.state)
    this.setState((state, _) => {
      return { open: !state.open }
    })
  }

  render () {
    return (
      <div>
        <List
          sx={{ width: '100%', maxWidth: 360, minWidth: 320, bgcolor: 'background.paper' }}
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
              Shopcart Search Result
            </ListSubheader>
          }
        >
          <ListItemButton onClick={this.handleClick}>
            <ListItemIcon>
              <InventoryIcon />
            </ListItemIcon>
            <ListItemText primary={`Product: ${this.state.id}`} />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={this.state.open} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem>
                <Card sx={{ minWidth: 320 }}>
                  <CardContent>
                    <ProductField field_name='ID' field_val={this.state.id} />
                    <ProductField
                      field_name='Shopcart ID'
                      field_val={this.state.shopcart_id}
                    />
                    <ProductField
                      field_name='Name'
                      field_val={this.state.name}
                    />
                    <ProductField
                      field_name='Price'
                      field_val={this.state.price}
                    />
                    <ProductField
                      field_name='Quantity'
                      field_val={this.state.quantity}
                    />
                  </CardContent>
                  <CardActions>
                    <Button size='small'>Learn More</Button>
                  </CardActions>
                </Card>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    )
  }
}

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  quantity: PropTypes.number,
  price: PropTypes.number,
  shopcart_id: PropTypes.number
}

Product.defaultProps ={
  id: -1,
  name: "Default",
  quantity: -1,
  price: -1,
  shopcart_id: -1
}

export default Product
