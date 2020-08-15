import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TraHoHoaDon from './screen/TraHoHoaDon';
import TraHoHoaDon2 from './screen/TraHoHoaDon2';
const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TraHoHoaDon">
        <Stack.Screen name="TraHoHoaDon" component={TraHoHoaDon} />
        <Stack.Screen name="TraHoHoaDon2" component={TraHoHoaDon2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
