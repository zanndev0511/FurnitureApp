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
import React from 'react';
import colors from '../consts/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width - 80 ;

const Login = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../images/Login_Page.png')}
        style={styles.image}>
        <View
          style={{
            top: '5%',
            right: '30%',
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
          <Text
            style={{
              color: colors.red,
              marginTop: 5,
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            Sign in to continue.
          </Text>
          <TextInput style={styles.input_user} placeholder="Username" />
          <TextInput
            style={styles.input_password}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <Text style={{color: colors.white, marginTop: 30}}>Forgot Password?</Text>
          <Text style={{color: colors.white, marginTop: 10}}>Signup !</Text>
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
  line: {
    position: 'absolute',
    backgroundColor: colors.green,
    width: '8%',
    height: '100%',
    transform: [{ rotateZ: '65deg' }],
    zIndex: 1,
    top: -200,
    opacity: 0.8,
  },
  background_login: {
    backgroundColor: colors.dark,
    width: '100%',
    height: '100%',
    transform: [{ rotateZ: '65deg' }],
    top: 80,
    zIndex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
  },
  input_user: {
    backgroundColor: colors.white,
    marginTop: 30,
    fontSize: 15,
    width,
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  input_password: {
    backgroundColor: colors.white,
    marginTop: 20,
    fontSize: 15,
    width,
    height: 45,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: colors.green,
    height: 50,
    width,
    borderRadius: 10,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Login;
