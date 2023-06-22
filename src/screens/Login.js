import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import colors from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../common/Loader';
const width = Dimensions.get('screen').width - 80;

const Login = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [badUsername, setBadUsername] = useState(false);
  const [badPassword, setBadPassword] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  // const validate = () => {
  //   if (username == '') {
  //     setBadUsername(true);
  //   } else {
  //     setBadUsername(false);
  //   }
  //   if (password == '') {
  //     setBadPassword(true);
  //   } else {
  //     setBadPassword(false);
  //   }
  //   getData();
  // };
  const login = () => {
    setModalVisible(true);
    if (username == '') {
      setModalVisible(false);
      setBadUsername(true);
    } else {
      setBadUsername(false);
      if (password == '') {
        setModalVisible(false);
        setBadPassword(true);
      } else {
        setTimeout(() => {
          setBadPassword(false);
          getData();
        }, 2000);
      }
    }
  };

  const getData = async () => {
    const getUsername = await AsyncStorage.getItem('USERNAME');
    const getPassword = await AsyncStorage.getItem('PASSWORD');
    if (username === getUsername && password === getPassword) {
      setModalVisible(false);
      navigation.navigate('Home');
    } else {
      setModalVisible(false);
      alert('Username does not exist or password is wrong');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/register_bg.png')}
        style={styles.image}>
        <View
          style={{
            top: '15%',
            flex: 1,
          }}>
          <Image
            source={require('../images/playstore.png')}
            style={{ height: 100, width: 100, borderRadius: 300 }}
          />
        </View>

        <View
          style={{
            flex: 2,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: colors.white,
              fontSize: 50,
              fontWeight: 'bold',
            }}>
            Login
          </Text>
          {/* validate login */}
          {badUsername === true && (
            <Text
              style={{
                marginTop: 10,
                alignItems: 'center',
                color: colors.red,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Please enter your username
            </Text>
          )}
          {badPassword === true && (
            <Text
              style={{
                marginTop: 10,
                alignItems: 'center',
                color: colors.red,
                fontWeight: 'bold',
                fontSize: 16,
              }}>
              Please enter your password
            </Text>
          )}
          <CustomTextInput
            placeHolder={'Username'}
            icon={'account'}
            onChangeText={setUsername}
            value={username}
            keyboardType={'default'}
          />
          <CustomTextInput
            placeHolder={'Password'}
            icon={'lock'}
            type={true}
            onChangeText={setPassword}
            value={password}
            keyboardType={'default'}
          />
          <CommonButton
            title={'Login'}
            bgColor={colors.green}
            textColor={colors.white}
            onPress={() => {
              login();
            }}
          />
          <Text style={{ color: colors.white, marginTop: 30, fontSize: 16 }}>
            Forgot Password?
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}>
            <Text style={{ color: colors.white, marginTop: 15, fontSize: 16 }}>
              Create New Account?
            </Text>
            <Loader
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
});

export default Login;
