import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function Outcomes({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.vien2}>
        <View style={styles.nenvien2}>
          <Text style={styles.text2}>Danh sách outcome</Text>
          <View style={styles.column}> 
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate('Trả hộ hóa đơn')}>
              <Text style={styles.text3}>Trả hộ hóa đơn</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate('Nạp tiền vào ví')}>
              <Text style={styles.text3}>Nạp tiền tại nhà</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => navigation.navigate('Thanh toán tự động')}>
              <Text style={styles.text3}>Thanh toán tự động</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
export default Outcomes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D1D35',
    //justifyContent: 'space-between',
  },
//   vien2: {
//     flex: 0.6,
//     backgroundColor: '#FFB100',
//     width: '90%',
//     //height: '80%',
//     borderRadius: 30,
//     padding: 2,
//     marginTop: 20,
//   },
//   nenvien2: {
//     backgroundColor: '#1D1D35',
//     width: '100%',
//     height: '100%',
//     borderRadius: 30,
//     //backgroundColor: '#FFB100',
//   },
  column: {
    //flex: 0.2,
    //flexDirection: 'column',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  button2: {
    width: '130%',
    height: '19%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#FFB100',
    marginTop: 30,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  text2: {
    color: 'white',
    fontSize: 30,
    // width: '85%',
    // height: '35%',
    textAlign: 'center',
    // textAlignVertical: 'center',
    marginVertical: 10,
    marginTop: 30,
  },
  text3: {
    color: '#1D1D35',
    fontSize: 20,
  },
});