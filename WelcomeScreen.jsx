import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
{
  /* Source:
  Height and width: https://reactnative.dev/docs/height-and-width */
}
const WelcomeScreen = ({ navigation }) => {
  const handleNewUserPress = () => {
    navigation.navigate("NewUser");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: "10%",
        }}
      ></View>
      <View style={styles.imageContainer}>
        <Image
          source={require("./assets/gemQuest.png")}
          style={styles.image}
          resizeMode="contain"
        ></Image>
      </View>
      <View style={styles.buttonContainer}>
        {" "}
        <Button
          style={styles.button}
          mode="contained"
          onPress={handleNewUserPress}
          buttonColor="#21005D"
        >
          <Text>Log In</Text>
        </Button>
        <Text textColor="#21005D">
          <small>
            <em>Forgot password?</em>
          </small>
        </Text>
        <Button
          style={styles.button}
          mode="contained-tonal"
          onPress={handleNewUserPress}
        >
          <Text>New User</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FDE3E7",
  },
  imageContainer: {
    width: "100%",
    height: "60%",
    alignItems: "center",
  },
  image: {
    width: "350px",
    height: "350px",
  },
  buttonContainer: {
    width: "100%",
    height: "30%",
    alignItems: "center",
  },
  button: {
    width: "150px",
    marginTop: "1em",
  },
});

export default WelcomeScreen;
