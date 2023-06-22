import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      getData();
    }, 3000);
  }, []);
  const getData = async () => {
    const username = await AsyncStorage.getItem('USERNAME');
    if (username !== '' || email !== null || email !== undefined) {
      navigation.navigate('Home');
    }else{
      navigation.navigate('Login');
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../images/playstore.png')}
        style={{
          width: 300,
          height: 300,
          borderRadius: 150,
          resizeMode: 'cover',
        }}
      />
    </View>
  );
};

export default Splash;
