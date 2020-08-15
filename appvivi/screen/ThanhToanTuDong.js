import React, { useState } from "react";
import {Text, View, Button, StyleSheet, TouchableOpacity, TextInput, Switch, Image} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.vien2}>
        <View style={styles.nenvien1}>
            <View style={styles.row}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Thanh toán tiền điện')}
            style={styles.button3}>
                <Image style={styles.image}
                  source={require('../image/flash1.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}>
                <Image style={styles.image}
                  source={require('../image/drop.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}>
                <Image style={styles.image}
                  source={require('../image/school.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}>
                <Image style={styles.image}
                  source={require('../image/internet.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button3}>
                <Image style={styles.image}
                  source={require('../image/bin.png')} />
            </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Tiền điện</Text>
                <Text style={styles.text}>Tiền nước</Text>
                <Text style={styles.text}>Tiền học</Text>
                <Text style={styles.text}>Tiền mạng</Text>
                <Text style={styles.text}>Tiền rác</Text>
            </View>
            <TouchableOpacity style={styles.button3}>
                <Image style={styles.image}
                  source={require('../image/insurance.png')} />
            </TouchableOpacity>
            <Text style={styles.text}>Tiền BHTY</Text>
        </View>
      </View>
    </View>
  );
}

function SettingsScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.vien1}>
        <View style={styles.nenvien1}>
            <View style={styles.row}>
                <View style={styles.icon}>
                   <Image style={styles.image}
                     source={require('../image/flash1.png')} />
                </View>
                <Text style={styles.text2}>Điện lực TPHCM{"\n"}Nguyễn Văn Minh{"\n"}PVC0056782</Text>
                <TouchableOpacity style={styles.button}>
                <Image style={styles.image}
                  source={require('../image/delete.png')} />
            </TouchableOpacity>
            </View>
            <Text style={styles.text3}>______________________________________</Text>
            <View style={styles.row}>
                 <Text style={styles.text3}>Tự động thanh toán hóa đơn</Text>
                 <View style={styles.switch}>
                 <Switch
                  trackColor={{ false: "#767577", true: "#FFB100" }}
                  thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}/>
                  </View>
            </View>       
        </View>
      </View>
      <View style={styles.vien1}>
        <View style={styles.nenvien1}>
            <View style={styles.row}>
                <View style={styles.icon}>
                   <Image style={styles.image}
                     source={require('../image/internet.png')} />
                </View>
                <Text style={styles.text2}>Internet FPT{"\n"}Nguyễn Văn Minh{"\n"}FPT0056782</Text>
                <TouchableOpacity style={styles.button}>
                <Image style={styles.image}
                  source={require('../image/delete.png')} />
            </TouchableOpacity>
            </View>
            <Text style={styles.text3}>______________________________________</Text>
            <View style={styles.row}>
                 <Text style={styles.text3}>Tự động thanh toán hóa đơn</Text>
                 <View style={styles.switch}>
                 <Switch
                  trackColor={{ false: "#767577", true: "#FFB100" }}
                  thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                  ios_backgroundColor="#3e3e3e"
                  //onValueChange={toggleSwitch}
                  //value={isEnabled}
                  value={true}
                  />
                  </View>
            </View>       
        </View>
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      //flexDirection: 'column',
      //justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1D1D35',
      //justifyContent: 'space-between',
    },
    column: {
      //flex: 0.2,
      //flexDirection: 'column',
      alignItems: 'center',
    },
    button2: {
      width: '160%',
      height: '27%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      backgroundColor: '#FFB100',
      marginTop: 30,
    },
    text: {
      color: 'white',
      fontSize: 16,
      marginTop: 10,
      marginLeft: 12,
    },
    vien1: {
        //flex: 0.15,
        backgroundColor: '#FFB100',
        //width: '90%',
        //height: '80%',
        width: 400,
        height: 220,
        borderRadius: 30,
        padding: 2,
        marginTop: 30,
      },
      vien2: {
        backgroundColor: '#FFB100',
        width: 400,
        height: 250,
        borderRadius: 30,
        padding: 2,
        marginTop: 50,
      },
      nenvien1: {
        backgroundColor: '#1D1D35',
        width: '100%',
        height: '100%',
        borderRadius: 30,
        //backgroundColor: '#FFB100',
      },
      image:{
        width: '70%',
        height: '70%',
      },
      button3: {
        width: 55,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#FFB100',
        marginTop: 30,
        marginLeft: 20,
        borderWidth: 2,
        borderColor: '#8946AD',
      },
      button: {
        width: 50,
        height: 50,
        borderRadius: 100,
        marginTop: 20,
        marginLeft: 70,
      },
      icon: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        backgroundColor: '#FFB100',
        marginTop: 30,
        marginLeft: 20,
        borderWidth: 2,
        borderColor: '#8946AD',
      },
      row: {
        flexDirection: 'row',
      },
      text2: {
        color: 'white',
        fontSize: 20,
        marginTop: 25,
        marginLeft: 20,
      },
      text3: {
        color: 'white',
        fontSize: 20,
        marginTop: 17,
        marginLeft: 20,
      },
      switch: {
        marginTop: 25,
        marginLeft: 50, 
      },
  });
const Tab = createMaterialTopTabNavigator();

export default function ThanhToanTuDong() {
  return (
      <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#949293',
        style: { backgroundColor: '#1D1D35' },
        indicatorStyle :{
            backgroundColor:'#FFB100'
      }
        //pressColor:'green',
      }}>
        <Tab.Screen name="Thêm hóa đơn" component={HomeScreen} />
        <Tab.Screen name="Danh sách đã thêm" component={SettingsScreen} />
      </Tab.Navigator>
      
  );
}