import { useState, useEffect } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { scoreSlice, isGameOverSlice } from "../redux/slices";
import { Audio } from "expo-av";

const mole = require("../images/mole.png");
const hole = require("../images/hole.png");
const hitSound = require("../assets/sounds/hit.wav");

const GAME_TIME = 60;

const Square = () => {
  const [moleActive, setMoleActive] = useState(false);

  const isGameOver = useSelector((state) => state.isGameOver);
  const dispatch = useDispatch();
  const { addScore } = scoreSlice.actions;
  const { setIsGameOver } = isGameOverSlice.actions;

  const randomTime = Math.random() * 40000 + 1200;
  let timerId;

  useEffect(() => {
    if (isGameOver) return;
    timerId = setInterval(() => {
      setMoleActive(true);
      setTimeout(() => {
        setMoleActive(false);
      }, 1200);
    }, randomTime);
    setTimeout(endGame, (GAME_TIME + 4) * 1000);
  }, [isGameOver]);

  const endGame = () => {
    clearInterval(timerId);
    dispatch(setIsGameOver(true));
  };

  const playSound = async (currentSound) => {
    const { sound } = await Audio.Sound.createAsync(currentSound);
    await sound.playAsync();
  };

  const onClickMole = () => {
    playSound(hitSound);
    dispatch(addScore());
    setMoleActive(false);
  };

  return (
    <TouchableOpacity
      style={moleActive ? styles.mole : styles.square}
      onPress={moleActive ? onClickMole : null}
    >
      <Image style={styles.image} source={moleActive ? mole : hole} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  square: {
    flex: 1,
    minWidth: 80,
    minHeight: 80,
    margin: 10,
    width: "100%",
  },
  mole: {
    flex: 1,
    minWidth: 80,
    minHeight: 80,
    margin: 10,
    width: "100%",
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default Square;
