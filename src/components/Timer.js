import React, { Component } from 'react';
import * as Progress from 'react-native-progress';
import { View } from 'react-native';

class Timer extends Component {
  constructor(props) {
      super(props);
      this.state = { progress: 0 };
    }

    render() {
        setTimeout(() => {
          this.setState({ progress: this.state.progress + 0.01 });
        }, 20);

        const viewStyle = {
            padding: 10,
            justifyContent: 'flex-start',
            flexDirection: 'column',
            alignItems: 'center',
            borderColor: '#ddd',
            position: 'relative'
          };

  return (
    <View style={viewStyle}>
      <Progress.Bar
      progress={this.state.progress}
      width={200}
      height={15}
      color={'green'}
      />
    </View>
  );
    }
  }

export { Timer };
