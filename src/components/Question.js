import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Question = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
      {props.question}
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#ddd',
    position: 'relative'
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center'
  }
};

// Make the component available to other parts of the app
export { Question };
