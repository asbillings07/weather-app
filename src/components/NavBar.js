import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { ArrowBackIos } from '@material-ui/icons'
import sun from '../images/art_clear.png'

const Container = styled.div`
  flex-grow: 1;
`
const MenuButton = styled(IconButton)`
  margin-right: 4px;
`
const SunImage = styled.img`
  width: 5em;
  height: 5em;
  @media (min-width: 768px) {
    width: 144px;
    height: 144px;
  }
`
const Title = styled(Typography)`
  flex-grow: 1;
  font-size: 50px;
  font-family: ${props => (props.primary ? 'Pacifico, cursive' : 'sans-serif')};
  @media (min-width: 768px) {
    font-size: 100px;
  }
`

export function NavBar({ match }) {
  const history = useHistory()
  const path = history.location.pathname
  const title = path !== '/' ? 'Details' : 'Sunshine'
  return (
    <Container>
      <AppBar position='static'>
        <Toolbar>
          {history.location.pathname !== '/' ? (
            <MenuButton edge='start' color='inherit' aria-label='back to home' onClick={() => history.push('/')}>
              <ArrowBackIos />
            </MenuButton>
          ) : (
            ''
          )}
          <SunImage src={sun} alt='sunshine' />
          <Title data-testid='appTitle' primary={path !== '/' ? '' : 'true'} variant='h6'>
            {title}
          </Title>
        </Toolbar>
      </AppBar>
    </Container>
  )
}
