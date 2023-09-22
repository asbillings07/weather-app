
import { useStore } from '../Store'
import { Today } from '../components/Today'
import { Forecast } from '../components/Forecast'
import { Progress } from '../components/reusables/Progress'

export const WeatherHome = () => {
  const { state } = useStore()
  return (
    <>
      {state.loading ? (
        <Progress />
      ) : (
        <>
          <Today className="Today" />
          <Forecast className="Forecast" />
        </>
      )}
    </>
  );
}
