import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';

class Answer extends Component {
  constructor(props) {
      super(props);
      this.state = { count: 0 };
    }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

 render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
         style={styles.button}
         onPress={this.onPress}
         underlaycolor={'darkgreen'}
         activeOpacity={10}
        >
         <Text style={styles.text}> {this.props.answerText} </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    padding: 10
  },
  text: {
    fontSize: 20,
    color: 'black'
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  }
});

export default Answer;
