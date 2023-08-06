import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const handleNewUserPress = () => {
    navigation.navigate("NewUser");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/gemQuest.png")}
        resizeMode="center"
        style={styles.ImageBackground}
      >
        <TouchableOpacity onPress={handleNewUserPress} style={styles.button}>
          <Text>New User</Text>
        </TouchableOpacity>
      </ImageBackground>
      {/* <Text>Welcome to Home Screen!</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDE3E7",
  },
  ImageBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default WelcomeScreen;
