import { Today } from '../components/Today'
import { Forecast } from '../components/Forecast'

export const WeatherHome = () => {  
  return (
    <>
      <Today className="Today" />
      <Forecast className="Forecast" />
    </>
  );
}
