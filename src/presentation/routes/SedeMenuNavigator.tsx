import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {StackNavigator} from './StackNavigator';
import {ProfileScreen} from '../screens/profileScreen/ProfileScreen';
import {globalColors} from '../theme/theme';
import {useWindowDimensions, View} from 'react-native';
import {BottomTabsNavigator} from './BottonTabsNavigator';
import {IonIcons} from '../components/shared/IonIcons';

const Drawer = createDrawerNavigator();

export const SedeMenuNavigator = () => {
  const dimensions = useWindowDimensions();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false, //ocultar header  de la pantalla
        drawerType: dimensions.width >= 768 ? 'permanent' : 'slide', //pantalla horizontal si es mayor a 768
        drawerActiveBackgroundColor: globalColors.primary, //color de fondo de la pantalla
        drawerActiveTintColor: 'white', //color de la letra
        drawerItemStyle: {
          //estilo de los items
          borderRadius: 100,
          paddingHorizontal: 20,
        },
      }}>
      {/* lo que esta dentro del drawerActive */}
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}

      {/* navegador de abajo tabs  */}
      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcons name="bonfire-outline" color={color} size={25} />
          ),
        }}
        name="Tabs"
        component={BottomTabsNavigator}
      />

      <Drawer.Screen
        options={{
          drawerIcon: ({color}) => (
            <IonIcons name="person-circle-outline" color={color} size={25} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          height: 200,
          backgroundColor: globalColors.primary,
          margin: 30,
          borderRadius: 50,
        }}
      />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
