import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {ProductsScreen} from '../screens/productScreen/ProductsScreen';
import {Settings} from '../screens/settings/Settings';
import {ProductSceen} from '../screens/productScreen/ProductSceen';
import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

export type RootStackParams = {
  Home: undefined;
  Products: undefined;
  Settings: undefined;
  Product: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  const navitator = useNavigation();
  useEffect(() => {
    navitator.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    //navegacion por stack navigator
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Product" component={ProductSceen} />
    </Stack.Navigator>
  );
};
