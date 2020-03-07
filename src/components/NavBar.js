import PropTypes from 'prop-types'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { MoreVert } from '@material-ui/icons'
import sun from '../images/art_clear.png'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    fontSize: 100,
    fontFamily: 'Pacifico, cursive'
  }
}))

export function NavBar({ title }) {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {/* <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton> */}
          <img src={sun} alt='sunshine' />
          <Typography variant='h6' className={classes.title}>
            {title}
          </Typography>
          <IconButton aria-label='display more actions' edge='end' color='inherit'>
            <MoreVert />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired
}
