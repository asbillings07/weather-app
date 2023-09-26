
import LinearProgress from '@material-ui/core/LinearProgress'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  margin-top: 25px;
`

export const Progress = () => {
  return (
    <Container>
      <LinearProgress variant='query' />
    </Container>
  )
}
