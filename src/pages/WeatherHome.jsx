
import { useStore } from '../Store'
import { Today } from '../components/Today'
import { Forecast } from '../components/Forecast'
import { Progress } from '../components/reusables/Progress'

export const WeatherHome = () => {
  const { state } = useStore()
  return (
    <>
      {state.weather ? (
        <>
          <Today weatherData={state.weather} className='Today'/>
          <Forecast weatherData={state.weather.list} className='Forecast' />
        </>
      ) : (
        <Progress />
      )}
    </>
  )
}
