import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import Square from "./Square";

const GameBoard = (props) => {
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (!timeLeft) return;

    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../images/background.jpg")}
      >
        <Text style={styles.title}>Whack-a-mole</Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 60,
            marginTop: 10,
            color: "crimson",
          }}
        >
          {timeLeft}
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            marginTop: 10,
            color: "indigo",
          }}
        >
          {props.score}
        </Text>
        <View style={styles.game}>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
          <Square></Square>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  title: {
    fontWeight: "bold",
    fontSize: 36,
    textTransform: "uppercase",
    color: "midnightblue",
  },
  game: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingTop: 10,
    paddingBottom: 70,
  },
});

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};

export default connect(mapStateToProps)(GameBoard);
