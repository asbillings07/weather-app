import { getTimeOfDay } from "../../utils"
import afternoon from "../../images/art_clear.png";
import night from '../../images/icons/night.svg'
import evening from '../../images/icons/sun_set.svg'
import morning from '../../images/icons/morning.svg'
import { NavBarImage } from "../componentStyles";


export const NavBarIcon = () => {
    const getTimeOfDayIcon = () => ({
        'morning': morning,
        'afternoon': afternoon,
        'night': night,
        'evening': evening
    }[getTimeOfDay()])

  return <NavBarImage src={getTimeOfDayIcon()} alt={`${getTimeOfDay()} icon`} />;
}
