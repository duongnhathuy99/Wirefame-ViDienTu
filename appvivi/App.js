import * as React from 'react';
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  Image,
  NativeEventEmitter,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
//import Icons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import Outcomes from './screen/Outcomes';
import TraHoHoaDon1 from './screen/TraHoHoaDon';
import TraHoHoaDon2 from './screen/TraHoHoaDon2';
import TraHoHoaDon3 from './screen/TraHoHoaDon3';
import NapTienTaiNha from './screen/NapTienTaiNha';
import NapTienTaiNha2 from './screen/NapTienTaiNha2';
import NapTienTaiNha3 from './screen/NapTienTaiNha3';
import ThanhToanTuDong from './screen/ThanhToanTuDong';
import ThanhToanTuDong2 from './screen/ThanhToanTuDong2';
import ThanhToanTuDong3 from './screen/ThanhToanTuDong3';
import ThanhToanTuDong4 from './screen/ThanhToanTuDong4';

const Stack = createStackNavigator();

function App(navigation) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Outcomes">
      <Stack.Screen
          name="Outcomes"
          component={Outcomes}
          options={{
            headerBackground: () => (
              <LinearGradient
                colors={['#8C47C8', '#D7658B']}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Trả hộ hóa đơn"
          component={TraHoHoaDon1}
          options={{
            headerBackground: () => (
              <LinearGradient
                colors={['#8C47C8', '#D7658B']}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            // headerLeft: () => (
              // <TouchableOpacity>
              //   <Image
              //     source={require('./image/arrow.png')}
              //     //style={styles.ImageIconStyle}
              //   />
              //   <View />
              // </TouchableOpacity>
            // ),
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Trả hộ hóa đơn  "
          component={TraHoHoaDon2}
          options={{
            headerBackground: () => (
              <LinearGradient
                colors={['#8C47C8', '#D7658B']}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Trả hộ hóa đơn   "
          component={TraHoHoaDon3}
          options={{
            headerBackground: () => (
              <LinearGradient
                colors={['#8C47C8', '#D7658B']}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Nạp tiền vào ví"
          component={NapTienTaiNha}
          options={{
            headerBackground: () => (
              <LinearGradient
                colors={['#8C47C8', '#D7658B']}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Địa chỉ nạp tiền"
          component={NapTienTaiNha2}
          options={{
            headerBackground: () => (
              <LinearGradient
                colors={['#8C47C8', '#D7658B']}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Địa chỉ nạp tiền "
          component={NapTienTaiNha3}
          options={{
            headerBackground: () => (
              <LinearGradient
                colors={['#8C47C8', '#D7658B']}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Thanh toán tự động"
          component={ThanhToanTuDong}
          options={{
            headerBackground: () => (
              <LinearGradient
                colors={['#8C47C8', '#D7658B']}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Thanh toán tiền điện"
          component={ThanhToanTuDong2}
          options={{
            headerBackground: () => (
              <LinearGradient
                colors={['#8C47C8', '#D7658B']}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Điện lực Hồ Chí Minh"
          component={ThanhToanTuDong3}
          options={{
            headerBackground: () => (
              <LinearGradient
                colors={['#8C47C8', '#D7658B']}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Thông tin hóa đơn"
          component={ThanhToanTuDong4}
          options={{
            headerBackground: () => (
              <LinearGradient
                colors={['#8C47C8', '#D7658B']}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
