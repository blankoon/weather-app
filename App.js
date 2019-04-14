import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', // 세로정렬: flex-start, flex-end, space-between, space-around, stretch
    justifyContent: 'center', // 가로정렬
    // flexDirection: 'row' // Default: column
    // flexWrap: 'wrap' // nowrap
  },
});
