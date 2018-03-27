import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Score = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.scoreTeamA} - {props.scoreTeamB}</Text>
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
    fontSize: 50
  }
};

// Make the component available to other parts of the app
export { Score };
