import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function ThanhToanTuDong4({navigation}) {
    return (
      <View style={styles.container}>
         <Text style={styles.textIP}>THÔNG TIN KHÁCH HÀNG</Text>
        <View style={styles.vien1}>
          <View style={styles.nenvien1}>
            <View style={styles.row}>
              <Text style={styles.text3}>Nhà cung cấp{"\n"}Mã khách hàng{"\n"}Địa chỉ{"\n"}{"\n"}Điện thoại</Text>
              <Text style={styles.text4}>Điện lực Hồ Chí Minh{"\n"}PE12000126753{"\n"}HUỲNH VĂN THÀNH {"\n"}46 ĐƯỜNG 12 LONG SƠN{"\n"}0337540225</Text>       
            </View>
          </View>
        </View>
        <Text style={styles.textIP}>THÔNG TIN HÓA ĐƠN</Text>
        <View style={styles.vien2}>
          <View style={styles.nenvien2}>
            <View style={styles.row}>
              <Text style={styles.text3}>Hóa đơn tiền điện - {"\n"}
5/2020
{"\n"}
Hóa đơn tiền điện -{"\n"} 
6/2020</Text>
              <Text style={styles.text4}>                     650.529đ{"\n"}{"\n"}694.173đ</Text>       
            </View>
          </View>
        </View>
        <View style={styles.vien3}>
          <View style={styles.nenvien3}>
          <View style={styles.row}>
              <Text style={styles.text2}>Tổng tiển</Text>
              <Text style={styles.text5}>                                         100.000đ</Text>       
            </View>
          </View>
        </View>
        <View style={styles.Button}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Thanh toán tự động')}>
              <Text style={styles.text}>Thanh toán tự động</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //flexDirection: 'column',
      //justifyContent: 'center',
      //alignItems: 'center',
      backgroundColor: '#1D1D35',
      //justifyContent: 'space-between',
    },
    vien1: {
      width: 400,
      height: 180,
      borderRadius: 30,
      padding: 2,
      marginTop: 10,
      marginLeft: 20,
      backgroundColor: '#FFB100',
    },
    nenvien1: {
      backgroundColor: '#1D1D35',
      width: '100%',
      height: '100%',
      borderRadius: 30,
      //backgroundColor: '#FFB100',
    },
    vien2: {
      backgroundColor: '#FFB100',
      width: 400,
      height: 170,
      borderRadius: 30,
      padding: 2,
      marginTop: 20,
      marginLeft: 20
    },
    vien3: {
      backgroundColor: '#FFB100',
      width: 400,
      height: 70,
      borderRadius: 20,
      padding: 2,
      marginTop: 20,
      marginLeft: 20
    },
    nenvien3: {
      backgroundColor: '#1D1D35',
      width: '100%',
      height: '100%',
      borderRadius: 20,
      //backgroundColor: '#FFB100',
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
    row: {
      //flex: 0.2,
      flexDirection: 'row',
      marginVertical: 15,
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
      marginTop: 30,
      backgroundColor: '#FFB100',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: 'black',
      fontSize: 20,
    },
    text1: {
      color: '#FFB100',
      fontSize: 20,
      // width: '85%',
      // height: '35%',
      textAlign: 'center',
      textAlignVertical: 'center',
      marginVertical: 35,
      marginHorizontal: 30,
    },
    text2: {
      color: '#FFB100',
      fontSize: 20,
      // width: '85%',
      // height: '35%',
      textAlign: 'center',
      // textAlignVertical: 'center',
      //marginVertical: 10,
      // borderBottomWidth: 1,
      // borderBottomColor:'#FFB100',
       marginLeft: 20,
    },
    text3: {
      color: '#A19E9E',
      fontSize: 15,
      marginStart :15,
      lineHeight:30,
    },
    text4: {
      color: 'white',
      fontSize: 15,
      lineHeight:30,
      marginStart :65,
      textAlign: 'right',
    },
    text5: {
      color: '#FFB100',
      fontSize: 20,
    },
    textIP: {
      color: 'white',
      fontSize: 20,
      marginTop:10,
      marginLeft:20,
      },
  });
  export default ThanhToanTuDong4;
  