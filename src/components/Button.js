import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) =>{
  const { buttonStyles, textStyle } = styles;

  return(
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  )
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyles: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#4d4d4d',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#4d4d4d',
    marginLeft: 5,
    marginRight: 5
  }
}

export default Button;