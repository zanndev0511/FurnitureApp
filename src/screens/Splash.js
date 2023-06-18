import { View, Text , Image} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../images/playstore.png')}
        style={{ width: 300, height: 300, borderRadius: 150, resizeMode:'cover' }}
      />
    </View>
  );
};

export default Splash;
