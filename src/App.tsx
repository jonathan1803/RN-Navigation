import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {HomeScreen} from './presentation/screens/home/HomeScreen';
import {StackNavigator} from './presentation/routes/StackNavigator';
import {SedeMenuNavigator} from './presentation/routes/SedeMenuNavigator';
import {BottomTabsNavigator} from './presentation/routes/BottonTabsNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <SedeMenuNavigator />
      {/* <BottomTabsNavigator /> */}
    </NavigationContainer>
  );
}

export default App;
