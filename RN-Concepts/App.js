import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  const handleOnButtonPress = () => {
    console.log("hello");
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ color: "red" }}>HELLO MAX!</Text>
      </View>
      <Text style={styles.text}>Let's Go!</Text>
      <View>
        <TouchableOpacity>
          <Button
            title="Click Me"
            onPress={handleOnButtonPress}
            style={styles.button}
          />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "pink",
    backgroundColor: "black",
    fontSize: 50,
  },
  button: {
    color: "pink",
  },
});
