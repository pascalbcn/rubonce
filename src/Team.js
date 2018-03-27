import React from 'react';
import { Text, View, Image } from 'react-native';

const Team = (props) => {
  const { viewStyle, textStyle, logoStyle } = styles;

  return (
    <View style={viewStyle}>
        <Text style={textStyle}>{props.teamName}</Text>
        <Image
        style={logoStyle}
        source={{ uri: props.logoLink }}
        />
    </View>
  );
};

const styles = {
  viewStyle: {
    padding: 10,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#ddd',
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  },
  logoStyle: {
    width: 60,
    height: 60
  }
};

export { Team };
