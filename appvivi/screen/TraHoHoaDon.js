import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function TraNoHoaDon({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.vien1}>
        <View style={styles.nenvien1}>
          <Text style={styles.text1}>Số dư:                   100000000</Text>
        </View>
      </View>
      <View style={styles.vien2}>
        <View style={styles.nenvien2}>
          <Text style={styles.text2}>Chi tiết hóa đơn{"\n"}__________________________________</Text>
          <View style={styles.row}>
            <Text style={styles.text3}>Phim{"\n"}Suất chiếu{"\n"}Rạp {"\n"}Phòng chiếu  {"\n"}Ghế {"\n"}Giá vé</Text>
            <Text style={styles.text4}> Nhím, Sóc & Viên đá thần kỳ{"\n"}19/06/2020 - 16:30{"\n"} CGV Vincom Thủ Đức{"\n"}Cinema 1{"\n"}G08{"\n"}110. 000đ</Text>       
          </View>
          <Text style={styles.text2}>__________________________________</Text>
          <View style={styles.row}>
            <Text style={styles.text3}>Người đặt{"\n"}Số điện thoại</Text>
            <Text style={styles.text4}>                     Nguyen Van Minh{"\n"}0964267338</Text>       
          </View>
          <Text style={styles.text2}>__________________________________</Text>
          <View style={styles.row}>
            <Text style={styles.text3}>Tổng tiển</Text>
            <Text style={styles.text5}>                                         100.000đ</Text>       
          </View>
        </View>
      </View>
      <View style={styles.bot}>
        <View style={styles.Button}>
          <TouchableOpacity style={styles.button}>
             <Text style={styles.text}>Thanh Toán</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.Button}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Trả hộ hóa đơn  ')}>
            <Text style={styles.text}>Trả Hộ</Text>
          </TouchableOpacity>
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
  row: {
    //flex: 0.2,
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
    marginVertical: 10,
    // borderBottomWidth: 1,
    // borderBottomColor:'#FFB100',
    // marginHorizontal: 30,
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
});
export default TraNoHoaDon;
