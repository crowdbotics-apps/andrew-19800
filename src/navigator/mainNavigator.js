import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen294548Navigator from '../features/BlankScreen294548/navigator';
import BlankScreen194547Navigator from '../features/BlankScreen194547/navigator';
import BlankScreen094546Navigator from '../features/BlankScreen094546/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen294548: { screen: BlankScreen294548Navigator },
BlankScreen194547: { screen: BlankScreen194547Navigator },
BlankScreen094546: { screen: BlankScreen094546Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
