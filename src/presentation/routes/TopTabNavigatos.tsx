import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProfileScreen} from '../screens/profileScreen/ProfileScreen';
import {AboutScreen} from '../screens/about/AboutScreen';
import {HamburgerMenu} from '../components/shared/HamburgerMenu';

const Tab = createMaterialTopTabNavigator();
export const TopTabNavigator = () => {
  return (
    <>
      <HamburgerMenu />
      <Tab.Navigator>
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </>
  );
};
