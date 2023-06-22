import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../consts/colors';
import { Dimensions } from 'react-native';

const width = Dimensions.get('screen').width - 80;

const CommonButton = ({ onPress, title, bgColor, textColor, disabled }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={{
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        width,
        height: 50,
        marginTop: 50,
        alignSelf: 'center',
        borderRadius: 10,
      }}
      onPress={() => {
        onPress();
      }}>
      <Text style={{ color: textColor }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
