import { useEffect, useState } from "react";
import { getTimeOfDay } from "../../utils";
import afternoon from "../../images/art_clear.png";
import night from '../../images/icons/night.svg'
import evening from '../../images/icons/sun_set.svg'
import morning from '../../images/icons/morning.svg'
import { NavBarImage } from "../componentStyles";

export const NavBarIcon = () => {
const timeOfDay = getTimeOfDay();
const [timeDay, setTimeDay] = useState(timeOfDay);


useEffect(() => {
  console.log("TIME OF DAY", timeOfDay);
  if (timeDay !== timeOfDay) {
    setTimeDay(getTimeOfDay())
  }
}, [setTimeDay, timeDay, timeOfDay])
      const getTimeOfDayIcon = (timeOfDay) =>
        ({
          morning: morning,
          afternoon: afternoon,
          night: night,
          evening: evening,
        }[timeOfDay]);

  return (
    <NavBarImage
      src={getTimeOfDayIcon(timeDay)}
      alt={`${timeDay} icon`}
    />
  );
}
