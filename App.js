import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigations/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import MainContainer from './src/MainContainer';
import store from './src/redux/store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer/>
    </Provider>
  )
};
export default App;
