import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo"; // 그라데이션 배경
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "Raining",
    subTitle: "Take your umbrella",
    icon: "weather-rainy"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "Sunny",
    subTitle: "Go out to play",
    icon: "weather-sunny"
  },
  Thunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "Thunderstorm",
    subTitle: "Actually, outside of the house",
    icon: "weather-lightning"
  },
  Cloudy: {
    colors: ["#D7D2CC", "#304352"],
    title: "Cloudy",
    subTitle: "Boring day, right?",
    icon: "weather-cloudy"
  },
  Snowy: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "Snowy",
    subTitle: "Do you want to build a snowman?",
    icon: "weather-snowy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A8FF"],
    title: "Drizzle",
    subTitle: "Is like rain",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#89F7FE", "#66A8FF"],
    title: "Haze",
    subTitle: "Just choose sunny or rainy!",
    icon: "weather-hail"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "Mist",
    subTitle: "The day of blind",
    icon: "weather-fog"
  }
};

function Weather({ name, temp }) {
  return (
    <LinearGradient style={styles.container} colors={weatherCases[name].colors}>
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={144}
          name={weatherCases[name].icon}
        />
        <Text style={styles.temp}>{temp}</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[name].title}</Text>
        <Text style={styles.subTitle}>{weatherCases[name].subTitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.PropTypes = {
  name: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "transparent" //  설정하지 않으면 자식 컴포넌트의 스타일 color 속성이 전체 적용됨
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
