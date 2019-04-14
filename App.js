import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Weather from "./Weather";

export default class App extends Component {
  state = {
    isLoaded: false
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          isLoaded: true
        });
      },
      error => {
        console.log(error);
      }
    );
  }

  render() {
    const { isLoaded } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Getting the weather</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // 이 설정을 하지 않으면 전체화면이 되지 않음
    backgroundColor: "#fff",
    alignItems: "center", // 세로정렬: flex-start, flex-end, space-between, space-around, stretch
    justifyContent: "center" // 가로정렬
    // flexDirection: 'row' // Default: column
    // flexWrap: 'wrap' // nowrap
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  loadingText: {
    fontSize: 38,
    marginBottom: 100
  }
});
