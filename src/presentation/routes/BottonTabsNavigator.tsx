import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/tabs/Tab1Screen';
import {Tab2Screen} from '../screens/tabs/Tab2Screen';
import {Tab3Screen} from '../screens/tabs/Tab3Screen';
import {globalColors} from '../theme/theme';
import {Text} from 'react-native';
import {TopTabNavigator} from './TopTabNavigatos';
import {StackNavigator} from './StackNavigator';
import {IonIcons} from '../components/shared/IonIcons';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator //padre de los tabs
      sceneContainerStyle={{
        backgroundColor: globalColors.background,
      }}
      screenOptions={{
        tabBarActiveTintColor: globalColors.primary, //color de los tabs activos
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
          shadowColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen //hijo de los tabs
        name="Tab1"
        options={{
          title: 'Tab1',
          //icono del tab regresa un callback con el color
          tabBarIcon: ({color}) => (
            <IonIcons name="accessibility-outline" size={25} color={color} />
          ),
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({color}) => (
            <IonIcons name="airplane-outline" size={25} color={color} />
          ),
        }}
        component={TopTabNavigator} //en el tab 2 esta el top tab navigator pero dentro del bootom tab navigator
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({color}) => <Text style={{color}}>Tab3</Text>,
        }}
        component={StackNavigator} //en el tab 3 esta el stack navigator pero dentro del bootom tab navigator
      />
    </Tab.Navigator>
  );
};
