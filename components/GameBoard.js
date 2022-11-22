import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { scoreSlice, isGameOverSlice } from "../redux/slices";
import Square from "./Square";

const GAME_TIME = 60;

const GameBoard = () => {
  const [timeLeft, setTimeLeft] = useState(GAME_TIME);

  const score = useSelector((state) => state.score);
  const isGameOver = useSelector((state) => state.isGameOver);
  const dispatch = useDispatch();
  const { resetScore } = scoreSlice.actions;
  const { setIsGameOver } = isGameOverSlice.actions;

  useEffect(() => {
    if (!timeLeft) return;

    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const onClickStart = () => {
    setTimeLeft(GAME_TIME);
    dispatch(resetScore());
    dispatch(setIsGameOver(false));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../images/background.jpg")}
      >
        <Text style={styles.title}>Whack-a-mole</Text>
        {isGameOver ? (
          <TouchableOpacity onPress={onClickStart}>
            <Text style={styles.startButton}>START</Text>
          </TouchableOpacity>
        ) : (
          <Text style={styles.counter}>{timeLeft}</Text>
        )}
        <Text style={styles.score}>{score}</Text>
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
  startButton: {
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 10,
    color: "orangered",
  },
  counter: {
    fontWeight: "bold",
    fontSize: 50,
    marginTop: 10,
    color: "crimson",
  },
  score: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 10,
    color: "indigo",
  },
});

export default GameBoard;
