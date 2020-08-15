import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ThanhToanTuDong2 from './ThanhToanTuDong2';

function ThanhToanTuDong3({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.vien1}>
          <View style={styles.nenvien1}>
          <Text style={styles.text3}>Thanh toán được cho hóa đơn điện của tất cả các khu vực 
thuộc TP. Hồ Chi Minh</Text>
        </View>
      </View>
      <View style={styles.vien1}>
        <View style={styles.nenvien1}>
          <Text style={styles.text1}>Nhập mã khách hàng</Text>
          <TextInput
            style={styles.textIP}
            placeholder='PE'
            placeholderTextColor='white' 
          />
        </View>
      </View>
      <View style={styles.bot}>
        <View style={styles.Button}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Thông tin hóa đơn')}>
              <Text style={styles.text}>Tiếp Tục</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default ThanhToanTuDong3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D1D35',
    //justifyContent: 'space-between',
  },
  vien1: {
    //flex: 0.15,
    backgroundColor: '#FFB100',
    //width: '90%',
    //height: '80%',
    width: 400,
    borderRadius: 30,
    padding: 2,
    marginTop: 30,
  },
  nenvien1: {
    backgroundColor: '#1D1D35',
    //width: '100%',
    height: 100,
    borderRadius: 30,
    //backgroundColor: '#FFB100',
  },
  vien2: {
    //flex: 0.8,
    backgroundColor: '#FFB100',
    width: 400,
    //height: '80%',
    borderRadius: 30,
    padding: 2,
    marginTop: 20,
  },
  nenvien2: {
    backgroundColor: '#1D1D35',
    width: '100%',
    height: '100%',
    borderRadius: 30,
    //backgroundColor: '#FFB100',
  },
  bot: {
    flex: 0.2,
    flexDirection: 'row',
  },
  column: {
    //flex: 0.2,
    //flexDirection: 'column',
    alignItems: 'center',
  },
  Button: {
    flex: 1,
    //justifyContent: 'flex-end',
    //alignItems: 'flex-start',
    padding: 20,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  button: {
    width: 400,
    height: 70,
    marginTop: 340,
    backgroundColor: '#FFB100',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button2: {
    width: '80%',
    height: '13%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FFB100',
    marginTop: 10,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
  text1: {
    color: 'white',
    fontSize: 18,
    //textAlign: 'center',
    marginVertical: 2,
    marginLeft: 35,
  },
  text2: {
    color: 'white',
    fontSize: 20,
    // width: '85%',
    // height: '35%',
    //textAlign: 'center',
    // textAlignVertical: 'center',
    marginVertical: 10,
  },
  text3: {
    color: 'white',
    fontSize: 19,
    // width: '85%',
    // height: '35%',
    marginVertical: 20,
    marginLeft: 15
  },
  textIP: {
    //height: 40, 
    borderColor: 'white',
    borderBottomWidth: 1,
    //borderWidth: 1, 
    //borderRadius: 30,
    //backgroundColor:'white',
    backgroundColor: '#1D1D35',
    marginHorizontal: 30,
    fontSize: 20,
  },
});
