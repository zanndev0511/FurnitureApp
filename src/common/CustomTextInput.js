import { View, Text, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../consts/colors';
import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width - 80;

const CustomTextInput = ({ value, onChangeText, placeHolder, icon, type, keyboardType }) => {
 
  return (
    <View
      style={{
        backgroundColor: colors.white,
        width,
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
      <Icon name={icon} size={28} />
      <TextInput
        onChangeText={onChangeText}
        value={value}
        placeholder={placeHolder}
        style={{ marginLeft: 10 }}
        keyboardType={keyboardType? keyboardType: ''}
        secureTextEntry={type ? true : false}
      />
    </View>
  );
};

export default CustomTextInput;
