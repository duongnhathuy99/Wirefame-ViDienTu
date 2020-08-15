import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function ThanhToanTuDong2({navigation}) {
  return (
    <View style={styles.container}>
           <TextInput
            style={styles.textIP}
            placeholder='           Nhập tên dịch vụ cần tìm'
          />
      <View style={styles.vien2}>
        <View style={styles.nenvien2}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Điện lực Hồ Chí Minh')}
            style={styles.button2}>
                <View style={styles.row}>
                    <View style={styles.icon}> 
                      <Image style={styles.image}
                        source={require('../image/momo-upload-api-1.png')} />
                    </View>
                    <View style={styles.column}>
                      <Text style={styles.text3}>Điện lực Hồ Chí Minh</Text>
                      <Text style={styles.text4}>Các quận, huyện tại TP. HCM           </Text>
                    </View>
              </View>
              <Text style={styles.text4}>________________________________________</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}>
            <View style={styles.row}>
                <View style={styles.icon}> 
                  <Image style={styles.image}
                    source={require('../image/momo-upload-api-1.png')} />
                </View>
                <View style={styles.column}>
                  <Text style={styles.text3}>Điện lực Hà Nội</Text>
                  <Text style={styles.text4}>Các quận, huyện của TP. Hà Nội       </Text>
                </View>
          </View>
          <Text style={styles.text4}>________________________________________</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}>
            <View style={styles.row}>
                <View style={styles.icon}> 
                  <Image style={styles.image}
                    source={require('../image/momo-upload-api-1.png')} />
                </View>
                <View style={styles.column}>
                  <Text style={styles.text3}>Điện lực miền Trung</Text>
                  <Text style={styles.text4}>Huế, Quảng Bình, Đà Nẵng, Quảng...</Text>
                </View>
          </View>
          <Text style={styles.text4}>________________________________________</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}>
            <View style={styles.row}>
                <View style={styles.icon}> 
                  <Image style={styles.image}
                    source={require('../image/momo-upload-api-1.png')} />
                </View>
                <View style={styles.column}>
                  <Text style={styles.text3}>Điện lực miền Nam</Text>
                  <Text style={styles.text4}>Bến Tre, Vĩnh Long, Đồng Nai, Cần...</Text>
                </View>
          </View>
          <Text style={styles.text4}>________________________________________</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button2}>
            <View style={styles.row}>
                <View style={styles.icon}> 
                  <Image style={styles.image}
                    source={require('../image/momo-upload-api-1.png')} />
                </View>
                <View style={styles.column}>
                  <Text style={styles.text3}>Điện lực miền Bắc</Text>
                  <Text style={styles.text4}>Quảng Ninh, Bắc Ninh, Nam Định,...</Text>
                </View>
          </View>
          <Text style={styles.text4}>________________________________________</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default ThanhToanTuDong2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1D1D35',
    //justifyContent: 'space-between',
  },
  vien2: {
    flex: 0.8,
    backgroundColor: '#FFB100',
    width: 400,
    height: 70,
    borderRadius: 30,
    padding: 2,
    marginTop: 20,
  },
  nenvien2: {
    backgroundColor: '#1D1D35',
    width: 395,
    height: 497,
    borderRadius: 30,
    //backgroundColor: '#FFB100',
  },
  bot: {
    flex: 0.2,
    flexDirection: 'row',
  },
  column: {
    //flex: 0.2,
    flexDirection: 'column',
    //alignItems: 'center',
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
  },
  button2: {
    // width: '80%',
    // height: '13%',
    width: 350,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    //backgroundColor: '#FFB100',
    backgroundColor: '#1D1D35',
    marginTop: 30,
    marginLeft: 17,
  },
  text: {
    color: 'white',
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
    color: 'white',
    fontSize: 20,
    //margin:20,
  },
  text4: {
    color: '#A19E9E',
    fontSize: 17,
    //margin:20,
  },
  textIP: {
    width: 400,
    height: 60,
    borderColor: 'black',
    borderWidth: 1, 
    borderRadius: 30,
    backgroundColor:'white',
    marginHorizontal: 30,
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
  },
  icon: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'white',
    // marginTop: 30,
    // marginLeft: 20,
    marginRight: 20,
  },
  image:{
    width: '70%',
    height: '70%',
  },
});