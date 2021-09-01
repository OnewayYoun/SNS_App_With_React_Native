import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainPage from './components/MainPage';
import Login from './components/Login';
import Home from './Tabs/Home';


const MainNavigator = createStackNavigator(
  {
    Login,
    MainPage,
    Home
  }
);


export default createAppContainer(MainNavigator);