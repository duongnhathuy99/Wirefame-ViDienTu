import React, { useState } from "react";
import {Text, View, Button, CheckBox, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function NapTienTaiNha2({navigation}) {
    const [isSelected, setSelection] = useState(false);
  return (
    <View style={styles.container}>
        <TextInput
            style={styles.textIP}
            placeholder='             Nhập số tiền muốn nạp'
            placeholderTextColor='white' 
        />
        <TextInput
            style={styles.textIP}
            placeholder='            Địa chỉ(số nhà, tên đường)'
            placeholderTextColor='white' 
        />
        <View style={styles.vien1}>
        <View style={styles.nenvien1}>
          <View style={styles.row}>
          <Text style={styles.text2}>Tỉnh / Thành phố</Text>
          <TouchableOpacity style={styles.button3}>
                <Image style={styles.image}
                  source={require('../image/rightarrow.med.png')} />
            </TouchableOpacity>
          </View>
        </View>
        </View>
        <View style={styles.vien1}>
        <View style={styles.nenvien1}>
          <View style={styles.row}>
          <Text style={styles.text2}>Quận / Huyện      </Text>
          <TouchableOpacity style={styles.button3}>
                <Image style={styles.image}
                  source={require('../image/rightarrow.med.png')} />
            </TouchableOpacity>
          </View>
        </View>
        </View>
        <View style={styles.vien1}>
        <View style={styles.nenvien1}>
          <View style={styles.row}>
          <Text style={styles.text2}>Phường / Xã        </Text>
          <TouchableOpacity style={styles.button3}>
                <Image style={styles.image}
                  source={require('../image/rightarrow.med.png')} />
            </TouchableOpacity>
          </View>
        </View>
        </View>
        <View style={styles.vien1}>
           <View style={styles.nenvien1}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                tintColors={{ true: '#8C47C8', false: '#8C47C8' }}
                style={styles.checkbox}
              />
              <Text style={styles.text1}> Đặt làm địa chỉ mặc định</Text>
           </View>
        </View>
      <View style={styles.bot}>
        <View style={styles.Button}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Địa chỉ nạp tiền ')}>
            <Text style={styles.text}>Nạp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default NapTienTaiNha2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D1D35',
    //justifyContent: 'space-between',
  },
  bot: {
    //flex: 0.2,
    width: 420,
    height: 140,
    flexDirection: 'row',
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
  row: {
    //flex: 0.2,
    flexDirection: 'row',
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
    //textAlign: 'center',
     //textAlignVertical: 'center',
    marginLeft:60,
  },
  text3: {
    color: '#1D1D35',
    fontSize: 20,
  },
  textIP: {
    //height: 40, 
    width: 370,
    height: 60,
    borderWidth: 1, 
    borderRadius: 30,
    backgroundColor:'#1D1D35',
    marginHorizontal: 30,
    marginTop: 10,
    borderWidth: 2,
    borderColor:'#FFB100',
    fontSize: 20,
  },
  vien1: {
    width: 370,
    height: 60,
    backgroundColor: '#FFB100',
    borderRadius: 30,
    padding: 2,
    marginTop: 10,
  },
  nenvien1: {
    backgroundColor: '#1D1D35',
    width: '100%',
    height: '100%',
    borderRadius: 30,
    flexDirection: 'row',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  checkbox: {
    //marginTop: 12,
    marginLeft: 25,
    //alignSelf: "center",
    //backgroundColor: 'red',
  },
  button3: {
    width: 40,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    //backgroundColor: '#FFB100',
    // marginTop: 30,
     marginLeft: 70,
  },
  image:{
    width: '100%',
    height: '100%',
  },
});
