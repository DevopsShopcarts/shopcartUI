import React from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
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
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

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
    this.setState((state, props) => {
      return { open: !state.open }
    })
  }

  render () {
    return (
      <div>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader component='div' id='nested-list-subheader'>
              Nested List Items
            </ListSubheader>
          }
        >
          <ListItemButton onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary='Inbox' />
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={this.state.open} timeout='auto' unmountOnExit>
            <List component='div' disablePadding>
              <ListItem>
                <Card sx={{ minWidth: 320 }}>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs="12" md={4}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color='text.secondary'
                          gutterBottom
                        >
                          Quantity:
                        </Typography>
                      </Grid>
                      <Grid item xs="12" md={8}>
                        <Typography
                          sx={{ fontSize: 14 }}
                          color='text.secondary'
                          gutterBottom
                        >
                          200
                        </Typography>
                      </Grid>
                    </Grid>
                    
                  </CardContent>
                  <CardActions>
                    <Button size='small'>Learn More</Button>
                  </CardActions>
                </Card>
                {/* <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary='Name' secondary="Newbee"/>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary='Name' secondary="Newbee"/> */}
              </ListItem>
            </List>
          </Collapse>
        </List>
      </div>
    )
  }
}
export default Product
