import styled from 'styled-components'
import { Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import { above } from '../utils';

// NavBar Styles
export const HeaderContainer = styled.div`
  flex-grow: 1;
`;
export const NavMenuButton = styled(IconButton)`
  margin-right: 4px;
`;
export const SunImage = styled.img`
  width: 5em;
  height: 5em;
  ${above.med`
    width: 144px;
    height: 144px;
`};
`;

export const NavBarTitle = styled(Typography)`
  flex-grow: 1;
  font-size: 50px;
  font-family: ${({ primary }) =>
    primary ? "Pacifico, cursive" : "sans-serif"};
  ${above.med`
    font-size: 100px;
`};
`;

// Forecast Styles
export const ForecastSubContainer = styled.div`
  display: flex;
  margin-left: 25px;
  justify-content: start;
  background-color: #fff;
  padding: 25px 0px;
  &:hover {
    background: #f5f5f5;
    box-shadow: inset 0px 6px 25px #c1c1c1;
  }
`;
export const ForecastContainer = styled.div``;
export const ForecastWrapper = styled.div`
  display: flex;
  width: 60%;
  ${above.med`
    width: 64%;
    `};
`;
export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  order: 1;
  justify-content: center;
`;
export const WeekDay = styled(Typography)`
  font-size: 17px;
  ${above.med`
    font-size: 2em;
    `};
`;
export const WeatherStatus = styled(Typography)`
  font-size: 11px;
  ${above.med`
    font-size: 2em;
`};
`;
export const WeatherImage = styled.img`
  height: 35px;
  width: 35px;
  margin: 0px 10px;
  ${above.med`
    height: 10em;
    width: 10em;
    margin: 0px 25px;
    `};
`;

export const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const MaxTemp = styled(Typography)`
  font-size: 17px;
  ${above.med`
    font-size: 2em;
    `};
`;
export const MinTemp = styled(Typography)`
  align-self: center;
  font-size: 17px;
  ${above.med`
    font-size: 2em;
    `};
`;

// Detail Styles

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: auto
  width: 100%;
    ${above.med`
    padding: 25px;
`};
`;
export const DateWrapper = styled.div`
  margin-bottom: 30px;
  align-self: flex-start;
`;

export const Today = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 3px;
  ${above.med`
   font-size: 6em;
`};
`;
export const MonthDate = styled(Typography)`
  font-size: 20px;
  color: #646464;
  ${above.med`
   font-size: 3em;
`};
`;

export const MainContent = styled.div`
  display: flex;
  padding-bottom: 30px;
  justify-content: space-between;
`;

export const SubMainContent = styled.div`
  display: flex;
`

// export const DetailTempWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
export const FeelsLikeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;

`
export const FeelsLikeTemp = styled.p`
  font-size: 20px;
  margin: 5px 0;
  ${above.med`
   font-size: 10em;
`};
`;

export const FeelsLikeHeader = styled.div` 
font-size: 20px;
`
export const DetailMaxDegrees = styled(Typography)`
  font-size: 72px;
  ${above.med`
   font-size: 15em;
`};
`;
export const DetailMinDegrees = styled(Typography)`
  font-size: 36px;
  color: #646464;
  align-self: center;
  ${above.med`
   font-size: 8em;
`};
`;

export const DetailStatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Status = styled(Typography)`
  font-size: 17px;
  font-weight: lighter;
  color: #646464;
  align-self: center;
  ${above.med`
   font-size: 3em;
`};
`;
export const Icon = styled.img`
  height: 75px;
  width: 75px;
  ${above.med`
    height: 32em;
    width: 32em;
`};
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Humidity = styled(Typography)`
  font-size: 17px;
  margin-bottom: 3px;
  ${above.med`
    font-size: 3em;
`};
`;
export const Pressure = styled(Typography)`
  font-size: 17px;
  margin-bottom: 3px;
  ${above.med`
    font-size: 3em;
`};
`;
export const Wind = styled(Typography)`
  font-size: 17px;
  ${above.med`
    font-size: 3em;
`};
`;


// Today Styles
export const TodayContainer = styled.div`
  background-color: #03a9fa;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 16px 0 40px 0;
  ${above.med`
    padding: 16px 168px 40px 40px;
`};
  ${above.small`
    flex-direction: row;
    padding: 16px 0px 40px 40px;
`};
`;

export const WeatherTemps = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  ${above.small`
    width: 50%;
    flex-direction: column;
    justify-content: flex-start;
  `}
`;
export const TodayDate = styled(Typography)`
  font-size: 25px;
  margin-bottom: 1em;
  color: #fff;
  ${above.med`
    font-size: 50px;
`};
`;
export const Location = styled.div`
  font-size: 15px;
  margin-top: 10px;
  color: #fff;
  ${above.med`
    font-size: 40px;
`};
`;
export const TodayMaxDegrees = styled(Typography)`
  font-size: 35px;
  color: #fff;
  ${above.med`
    font-size: 6em;
`};
  ${above.small`
    font-size: 45px;
`};
`;
export const TodayMinDegrees = styled(Typography)`
  font-size: 30px;
  color: #fff;
  ${above.med`
    font-size: 5em;
`};
  ${above.small`
    font-size: 35px;
`};
`;
export const WeatherForecast = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row-reverse;
  ${above.small`
    margin-left: 3em;
    flex-direction: column;
    justify-content: start;
`};
`;
export const WeatherIcon = styled.img`
  height: 75px;
  width: 75px;
  ${above.med`
    height: 25em;
    width: 25em;
`};

`;
export const TodayForecast = styled(Typography)`
  font-size: 17px;
  color: #fff;
  align-self: center;
  margin-left: 1em;
  ${above.small`
    align-self: start;
`};
  ${above.med`
    font-size: 5em;
`};
`;
