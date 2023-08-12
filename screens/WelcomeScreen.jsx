import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";
{
  /* Source:
  Height and width: https://reactnative.dev/docs/height-and-width */
}
const WelcomeScreen = ({ navigation }) => {
  const handleNewUserPress = () => {
    navigation.navigate("Create Account");
  };

  const handleLayoutScreenPress = () => {
    navigation.navigate("LogIn");
  };

  // ADDED THE FOLLOWING FUNCTION FOR ACCESS TO THE NAV BAR LOGGIN IN
  // const handleLayoutPress = () => {
  //   // console.log("HELLO WORLD");
  //   navigation.navigate("LayoutScreen");
  // };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: "10%",
        }}
      ></View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/gemQuest.png")}
          alt="GemQuest logo showcasing pride colors"
          style={styles.image}
          resizeMode="contain"
        ></Image>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={handleNewUserPress}
          buttonColor="#21005D"
          textColor="#FFFFFF"
        >
          <Text>New User</Text>
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={handleLayoutScreenPress}
        >
          <Text>Log In</Text>
        </Button>
        <Text style={styles.forgotPassword} textColor="#21005D">
          Forgot password?
        </Text>
        {/* ADDED THE FOLLOWING BUTTON FOR ACCESS TO THE NAV BAR LOGGIN IN */}
        {/* <Button
          style={styles.button}
          mode="outlined"
          onPress={handleLayoutPress}
        ></Button> */}
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
    width: 350,
    height: 350,
  },
  buttonContainer: {
    width: "100%",
    height: "30%",
    alignItems: "center",
  },
  button: {
    width: 150,
    marginTop: 15,
  },
  forgotPassword: {
    marginTop: 10,
    fontStyle: "italic",
  },
});

export default WelcomeScreen;
