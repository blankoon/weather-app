import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo"; // 그라데이션 배경
import { Ionicons } from "@expo/vector-icons";

export default class Weather extends Component {
  render() {
    return (
      <LinearGradient style={styles.container} colors={["#00C6FB", "#005BEA"]}>
        <View style={styles.upper}>
          <Ionicons color="white" size={144} name="ios-rainy" />
          <Text style={styles.temp}>35º</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>Raining like a MF</Text>
          <Text style={styles.subTitle}>For more info look outside</Text>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "transparent" // 설정하지 않으면 자식 컴포넌트의 스타일 color 속성이 전체 적용됨
  },
  temp: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white"
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subTitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});
