import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoalText, SetEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    SetEnteredGoalText(enteredText);
  }

  const addGoalHandler = () => {
    onAddGoal(enteredGoalText);
    SetEnteredGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require("../assets/icon.png")} />
        <TextInput
          placeholder="Your course goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#f31282" onPress={onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" color="#b18050" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
