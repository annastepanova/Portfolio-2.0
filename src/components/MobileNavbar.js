import React from 'react'
import { Link } from 'react-scroll'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SMLinks from './shared/SocialLinks'
import useScroll from '../hooks/useScroll'

const styles = {
  toolbar: {
    height: 70,
    display: 'flex', 
    justifyContent: 'flex-end'
  },
  appbarTransparent: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  },
  appbarColored: {
    backgroundColor: '#4e525d'
  },
  wrapper: {
    width: 'min(60vw, 300px)',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#343a40'
  },
  linkList: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '50%',
    flexDirection: 'column',
    textAlign: 'center',
    color: '#FFF',
    fontSize: '19px'
  }
}

const Drawer = () => {
  const [open, setOpen] = React.useState(false)
  const trigger = useScrollTrigger({
    threshold: 0
  })
  const scroll = useScroll()

  const links = () => (
    <Box
      sx={styles.wrapper}
      role='presentation'
      onClick={() => setOpen(false)}
    >
      <Grid container flexDirection='column' alignItems='flex-start' sx={{ width: '55%' }}>
        <List sx={styles.linkList}>
          {['about', 'skills', 'projects', 'contact'].map((link, index) => (
            <ListItem  disablePadding key={index} sx={{ margin: '0px auto 16px' }}>
              <Link to={link} smooth={true} duration={500} onClick={() => setOpen(false)}>
                {link.toUpperCase()}
              </Link>
            </ListItem>
          ))}
        </List>
        <SMLinks/>
      </Grid>
    </Box>
  )

  return (
    <Slide in={!trigger}>
      <AppBar open={open} sx={scroll ? styles.appbarColored : styles.appbarTransparent}>
        <Toolbar sx={styles.toolbar}>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={() => setOpen(true)}
            sx={{ mr: 1, ...(open && { display: 'none' }) }}
          >
            <MenuIcon fontSize='large'/>
          </IconButton>
        </Toolbar>
        <SwipeableDrawer
          transitionDuration={{ appear: 500, enter: 500, exit: 500 }}
          anchor='right'
          open={open}
          onClose={() => setOpen(false)}
        >
          {links()}
        </SwipeableDrawer>
      </AppBar>
    </Slide>
  )
}

export default Drawer
