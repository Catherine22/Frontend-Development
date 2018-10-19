import { createStackNavigator } from 'react-navigation';
import WeatherConditions from './WeatherConditions';
import Cities from './Cities';

const RootStack = createStackNavigator({
        CITIES: Cities,
        WEATHER_CONDITIONS: WeatherConditions
    },
    {
        initialRouteName: 'CITIES'
    });

export default RootStack;
