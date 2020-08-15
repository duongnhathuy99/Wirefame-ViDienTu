import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function TraNoHoaDon2({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.vien1}>
        <View style={styles.nenvien1}>
          <Text style={styles.text1}>Thông tin người nhận</Text>
          <TextInput
            style={styles.textIP}
            placeholder='                     Vui lòng nhập số điện thoại'
          />
        </View>
      </View>
      <View style={styles.vien2}>
        <View style={styles.nenvien2}>
          <Text style={styles.text2}>Số điện thoại gần đây</Text>
          <View style={styles.column}> 
          <TouchableOpacity
            style={styles.button2}>
              <Text style={styles.text3}>0964267332</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}>
              <Text style={styles.text3}>0964267332</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}>
              <Text style={styles.text3}>0964267332</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}>
              <Text style={styles.text3}>0964267332</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}>
              <Text style={styles.text3}>0964267332</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}>
              <Text style={styles.text3}>0964267332</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bot}>
        <View style={styles.Button}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Trả hộ hóa đơn   ')}>
             <Text style={styles.text}>Tiếp Tục</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default TraNoHoaDon2;

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
    flex: 0.15,
    backgroundColor: '#FFB100',
    width: '90%',
    //height: '80%',
    borderRadius: 30,
    padding: 2,
    marginTop: 30,
  },
  nenvien1: {
    backgroundColor: '#1D1D35',
    width: '100%',
    height: '100%',
    borderRadius: 30,
    //backgroundColor: '#FFB100',
  },
  vien2: {
    flex: 0.8,
    backgroundColor: '#FFB100',
    width: '90%',
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
    width: '100%',
    height: '75%',
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
    // width: '85%',
    // height: '35%',
    textAlign: 'center',
    marginVertical: 2,
    //marginHorizontal: 30,
  },
  text2: {
    color: 'white',
    fontSize: 20,
    // width: '85%',
    // height: '35%',
    textAlign: 'center',
    // textAlignVertical: 'center',
    marginVertical: 10,
  },
  text3: {
    color: '#1D1D35',
    fontSize: 20,
  },
  textIP: {
    //height: 40, 
    borderColor: 'black',
    borderWidth: 1, 
    borderRadius: 30,
    backgroundColor:'white',
    marginHorizontal: 30,
  },
});
