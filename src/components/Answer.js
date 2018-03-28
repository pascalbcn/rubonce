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
         underlayColor={'lightgreen'}
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
    backgroundColor: 'darkgreen',
    padding: 5
  },
  text: {
    fontSize: 30,
    color: 'white'
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
