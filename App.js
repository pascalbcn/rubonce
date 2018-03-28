import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Team, Score, QuestionNumber, Question, Timer } from './src/components';
import Answer from './src/components/Answer';

class App extends Component {
  render() {
      return (
        <View style={{ flex: 1 }}>
          <Header headerText={'rubonce'} />
          <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center' }}
          >
            <Team teamName={'PSG'} logoLink={'https://i.ytimg.com/vi/l77_6iOa_us/maxresdefault.jpg'} />
            <Score scoreTeamA={'2'} scoreTeamB={'0'} />
            <Team teamName={'Tony'} logoLink={'https://quizvoice.com/images/df136452c0b0bb9356286dd2aae418bd.jpg'} />
          </View>
          <View
          style={{
            flex: 1,
            justifyContent: 'center'
          }}
          >
            <QuestionNumber questionParticularNumber={'12'} questionTotalNumber={'20'} />
          </View>
          <View
          style={{
            flex: 1,
            justifyContent: 'center'
          }}
          >
            <Question question={'Memphis va-t-il marquer en deuxième mi-temps ?'} />
          </View>
          <View
          style={{
            flex: 1,
            justifyContent: 'center'
          }}
          >
          <Timer />
          <Answer answerText={'Jamar'} />
          <Answer answerText={'Allez ok'} />
        </View>
        </View>
      );
    }
}

export default App;
