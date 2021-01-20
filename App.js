/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
  Text,
  View,
} from 'react-native';



const Item: () => React$Node = () => {
  return (<Text>Hola</Text>);
};

const App: () => React$Node = () => {

  React.useEffect(() => {
      listener = Keyboard.addListener('keyboardDidHide', (event) => {
        console.log('keyboardDidHide');
        console.log(event.endCoordinates.screenY);
      });
      return () => {
        listener.remove();
      };
  });

  return (
      <KeyboardAvoidingView style={{
        backgroundColor: 'red',
        flex: 1
      }} behavior='padding'>
        <TextInput style={{backgroundColor: 'cyan', height: 35}}/>
        <FlatList
          renderItem={() => {
            return (<Item/>);
          }}
          data={[0,1,2,3,4,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10,5,6,7,8,9,10]}
        >
        </FlatList>
      </KeyboardAvoidingView>
  );
};


App.options = {
  topBar: {
    title: {text: "Hola"},
    rightButtons: [{
      id: 'test',
      component: {name: 'Test'}
    }]
  }
};

export default App;
