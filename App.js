import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigations/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return <AppNavigator />;
};
export default App;
