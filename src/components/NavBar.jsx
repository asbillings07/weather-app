import { useHistory, useLocation } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { ArrowBackIos } from '@material-ui/icons'
import sun from '../images/art_clear.png'
import {
HeaderContainer,
NavMenuButton,
SunImage,
NavBarTitle
} from './componentStyles'
export function NavBar () {
  const history = useHistory()
  const location = useLocation()
  const path = location.pathname
  const title = location.pathname.includes('details') ? 'Details' : 'Sunshine'

  return (
    <HeaderContainer>
      <AppBar position="static">
        <Toolbar>
          {location.pathname !== "/" ? (
            <NavMenuButton
              edge="start"
              color="inherit"
              aria-label="back to home"
              onClick={() => history.push("/")}
            >
              <ArrowBackIos />
            </NavMenuButton>
          ) : (
            ""
          )}
          <SunImage src={sun} alt="sunshine" />
          <NavBarTitle
            data-testid="appTitle"
            primary={path !== "/" ? "" : "true"}
            variant="h6"
          >
            {title}
          </NavBarTitle>
        </Toolbar>
      </AppBar>
    </HeaderContainer>
  );
}

NavBar.displayName = 'NavBar'