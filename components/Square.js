import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { addScore } from "../redux";
import { Audio } from "expo-av";

const Square = (props) => {
  const [moleActive, setMoleActive] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const randomTime = Math.random() * 40000 + 1000;
  let timerId;

  useEffect(() => {
    timerId = setInterval(() => {
      setMoleActive(true);
      setTimeout(() => {
        setMoleActive(false);
      }, 1200);
    }, randomTime);
    setTimeout(endGame, 60 * 1000);
  }, []);

  const endGame = () => {
    clearInterval(timerId);
    setIsGameOver(true);
  };

  const hitSound = require("../assets/sounds/hit.wav");

  const playSound = async (currentSound) => {
    const { sound } = await Audio.Sound.createAsync(currentSound);
    await sound.playAsync();
  };

  return (
    <TouchableOpacity
      // style={styles.square}
      style={moleActive ? styles.mole : styles.square}
      onPress={
        moleActive
          ? () => {
              playSound(hitSound);
              props.addScore();
              setMoleActive(false);
            }
          : null
      }
    >
      <Image
        // style={{
        //   resizeMode: "contain",
        //   width: 100,
        //   height: moleActive ? 100 : 37,
        // }}
        style={{ width: 80, height: 80 }}
        source={
          moleActive
            ? require("../images/mole.png")
            : require("../images/hole.png")
        }
      />
    </TouchableOpacity>
  );
};

// const styles = StyleSheet.create({
//   square: {
//     flex: 1,
//     minWidth: 80,
//     minHeight: 100,
//     margin: 5,
//   },
// });

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
});

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addScore: () => dispatch(addScore()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Square);
