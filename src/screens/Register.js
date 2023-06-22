import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import colors from '../consts/colors';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Register = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [badUsername, setBadUsername] = useState(false);

  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState(false);

  const [phone, setPhone] = useState('');
  const [badPhone, setBadPhone] = useState(false);

  const [password, setPassword] = useState('');
  const [badPassword, setBadPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);

  const [buttonDisabled, setButtonDisabled] = useState(false);


  const signUp = () => {
    setButtonDisabled(true);
    if (username == '') {
      setBadUsername(true);
      setButtonDisabled(false);
    } else {
      setBadUsername(false);
      if (phone == '') {
        setBadPhone(true);
        setButtonDisabled(false);
      } else if (phone.length >= 11) {
        setBadPhone(true);
        setButtonDisabled(false);
      } else {
        setBadPhone(false);
        if (email == '') {
          setBadEmail(true);
          setButtonDisabled(false);
        } else {
          setBadEmail(false);
          if (password == '') {
            setBadPassword(true);
            setButtonDisabled(false);
          } else {
            setBadPassword(false);
            if (confirmPassword !== password) {
              setBadConfirmPassword(true);
              setButtonDisabled(false);
            } else {
              setBadConfirmPassword(false);
              saveData();
            }
          }
        }
      }
    }
  };

  const saveData = async () => {
    await AsyncStorage.setItem('USERNAME', username);
    await AsyncStorage.setItem('PHONE', phone);
    await AsyncStorage.setItem('EMAIL', email);
    await AsyncStorage.setItem('PASSWORD', password);
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../images/register_bg.png')}
      style={styles.image}>
      {username == '' ||
      phone == '' ||
      email == '' ||
      password == '' ||
      confirmPassword != password ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View
              style={{
                marginTop: 80,
              }}>
              <Image
                source={require('../images/playstore.png')}
                style={{ height: 80, width: 80, borderRadius: 300 }}
              />
            </View>

            <View
              style={{
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: colors.white,
                  fontSize: 40,
                  fontWeight: 'bold',
                  marginTop: 20,
                }}>
                Create New Account
              </Text>
              {/* validate register */}
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
              {badPhone === true && (
                <Text
                  style={{
                    marginTop: 10,
                    alignItems: 'center',
                    color: colors.red,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  The phone number is invalid
                </Text>
              )}
              {badEmail === true && (
                <Text
                  style={{
                    marginTop: 10,
                    alignItems: 'center',
                    color: colors.red,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  Please enter your email
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
              {badConfirmPassword === true && (
                <Text
                  style={{
                    marginTop: 10,
                    alignItems: 'center',
                    color: colors.red,
                    fontWeight: 'bold',
                    fontSize: 16,
                  }}>
                  Confirm password does not match
                </Text>
              )}
              <CustomTextInput
                placeHolder={'Username'}
                icon={'account'}
                value={username}
                onChangeText={setUsername}
              />
              <CustomTextInput
                placeHolder={'Phone'}
                keyboardType={'numeric'}
                icon={'phone'}
                value={phone}
                onChangeText={setPhone}
              />
              <CustomTextInput
                placeHolder={'Email'}
                icon={'email'}
                value={email}
                onChangeText={setEmail}
              />
              <CustomTextInput
                placeHolder={'Password'}
                icon={'lock'}
                type={true}
                value={password}
                onChangeText={setPassword}
              />
              <CustomTextInput
                placeHolder={'Confirm Password'}
                icon={'lock'}
                type={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
              />
              <CommonButton
                title={'Sign Up'}
                bgColor={buttonDisabled ? 'gray' : colors.green}
                textColor={colors.white}
                onPress={() => {
                  signUp();
                }}
                disabled={buttonDisabled}
              />
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}>
                <Text
                  style={{
                    color: colors.white,
                    marginTop: 20,
                    marginBottom: 50,
                    fontSize: 16,
                  }}>
                  Already have account?
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.container}>
          <View
            style={{
              marginTop: 80,
            }}>
            <Image
              source={require('../images/playstore.png')}
              style={{ height: 80, width: 80, borderRadius: 300 }}
            />
          </View>

          <View
            style={{
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: colors.white,
                fontSize: 40,
                fontWeight: 'bold',
                marginTop: 20,
              }}>
              Create New Account
            </Text>
            {/* validate register */}
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
            {badPhone === true && (
              <Text
                style={{
                  marginTop: 10,
                  alignItems: 'center',
                  color: colors.red,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                The phone number is invalid
              </Text>
            )}
            {badEmail === true && (
              <Text
                style={{
                  marginTop: 10,
                  alignItems: 'center',
                  color: colors.red,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Please enter your email
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
            {badConfirmPassword === true && (
              <Text
                style={{
                  marginTop: 10,
                  alignItems: 'center',
                  color: colors.red,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Confirm password does not match
              </Text>
            )}
            <CustomTextInput
              placeHolder={'Username'}
              icon={'account'}
              value={username}
              onChangeText={setUsername}
            />
            <CustomTextInput
              placeHolder={'Phone'}
              icon={'phone'}
              value={phone}
              keyboardType={'numeric'}
              onChangeText={setPhone}
            />
            <CustomTextInput
              placeHolder={'Email'}
              icon={'email'}
              value={email}
              onChangeText={setEmail}
            />
            <CustomTextInput
              placeHolder={'Password'}
              icon={'lock'}
              type={true}
              value={password}
              onChangeText={setPassword}
            />
            <CustomTextInput
              placeHolder={'Confirm Password'}
              icon={'lock'}
              type={true}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <CommonButton
              title={'Sign Up'}
              bgColor={buttonDisabled ? 'gray' : colors.green}
              textColor={colors.white}
              onPress={() => {
                signUp();
              }}
              disabled={buttonDisabled}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Text
                style={{
                  color: colors.white,
                  marginTop: 20,
                  marginBottom: 50,
                  fontSize: 16,
                }}>
                Already have account?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ImageBackground>
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

export default Register;
