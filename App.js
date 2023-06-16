import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
import Home from './src/screens/Home'
import Detail from './src/screens/Detail'
import {StatusBar} from 'react-native'
import colors from './src/consts/colors';

const App = () => {
  return(
    <NavigationContainer>
      <StatusBar barStyle = "dark-content" backgroundColor = {colors.white}/>
      <Stack.Navigator screenOptions = {{header: () => null}}>
        <Stack.Screen name= "Home" component={Home} />
        <Stack.Screen name= "Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;