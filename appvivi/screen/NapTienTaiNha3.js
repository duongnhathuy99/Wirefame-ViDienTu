import React, { useState } from "react";
import {Text, View, Button, StyleSheet, TouchableOpacity, Alert, Image, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function NapTienTaiNha3({navigation}) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View style={styles.container}>
      <Modal 
        visible={modalOpen}
        transparent={true}>
          <View style={styles.hide}>
        <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate('Outcomes')}
            >
              <Image style={styles.image}
                  source={require('../image/check.png')} />
              <Text style={styles.text6}>Nạp tiền thành công!{"\n"}Sẽ có người sớm 
liên hệ với bạn.</Text>
          </TouchableOpacity>
          </View>
        </Modal>
      <View style={styles.vien1}>
        <View style={styles.nenvien1}>
          <Text style={styles.text1}>Địa chỉ nạp tiền</Text>
          <Text style={styles.text6}>Nguyễn Văn Minh {"\n"}0978394457</Text>
          <Text style={styles.text3}>16/4c ấp bình đáng{"\n"}Phường Bình Hòa, Thị xã Thuận An, Bình Dương</Text>
        </View>
      </View>
      <View style={styles.vien2}>
        <View style={styles.nenvien2}>
          <Text style={styles.text2}>Nhận vào Thứ tư, 25/07</Text>
          <View style={styles.row}>
            <Text style={styles.text3}>Số tiền nạp{"\n"}Phí vận chuyển</Text>
            <Text style={styles.text4}>                           1.000.000đ{"\n"}20.000đ</Text>       
          </View>
        </View>
      </View>
      <View style={styles.vien3}>
        <View style={styles.nenvien2}>
          <View style={styles.row}>
            <Text style={styles.text5}>Tổng tiển</Text>
            <Text style={styles.text5}>                                   100.000đ</Text>       
          </View>
        </View>
      </View>
      <View style={styles.Button}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalOpen(true)}
            >
            <Text style={styles.text}>Xác nhận</Text>
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
    alignItems: 'center',
    backgroundColor: '#1D1D35',
    //justifyContent: 'space-between',
  },
  vien1: {
    //flex: 0.15,
    backgroundColor: '#FFB100',
    //width: '90%',
    //height: '80%',
    width: '90%',
    height: '25%',
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
    //flex: 0.8,
    backgroundColor: '#FFB100',
    width: '90%',
    height: '20%',
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
  vien3: {
    //flex: 0.8,
    backgroundColor: '#FFB100',
    width: '90%',
    height: '10%',
    borderRadius: 30,
    padding: 2,
    marginTop: 20,
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
    //flex: 1,
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
    width: 380,
    height: 70,
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
    //textAlign: 'center',
    //textAlignVertical: 'center',
    marginVertical: 10,
    marginHorizontal: 15,
  },
  text2: {
    color: '#FFB100',
    fontSize: 20,
    textAlign: 'center',
    // textAlignVertical: 'center',
    marginVertical: 10,
    //marginTop:10,
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
    marginTop: 20,
    marginLeft: 15,
  },
  text6: {
    color: 'white',
    fontSize: 17,
    marginStart :15,
    lineHeight:25,
  },
  button2: {
    width: 300,
    height: 300,
    marginTop: 300,
    marginLeft: 60,
    backgroundColor: '#1D1D35',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'#00CFDD',
    borderWidth:1,
  },
  hide: {
   backgroundColor:'#000000aa',
   flex:1,        
  },
  text7: {
    color: 'white',
    fontSize: 15,
    marginLeft: 30,
  },
  image:{
    width: '70%',
    height: '70%',
  },
});
export default NapTienTaiNha3;