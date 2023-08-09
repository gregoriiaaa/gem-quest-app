import React from "react";
import { Image, View, StyleSheet, TouchableOpacity, Text } from "react-native";

import LogInForm from "../components/LogInForm";

const LogIn = ({ navigation }) => {
  const handleLogoPress = () => {
    navigation.navigate("Welcome Screen");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.logoContainer}
        onPress={() => navigation.navigate("Welcome Screen")}
      >
        <Image
          source={require("../assets/gemQuest.png")}
          resizeMode="contain"
          style={styles.image}
          alt={"GemQuest logo in pride colors"}
        />
      </TouchableOpacity>
      <Text style={styles.titleText}>Sign In</Text>
      <View style={styles.signInForm}>
        <LogInForm navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#FDE3E7",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
  },

  titleText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  signInForm: {
    marginTop: 15,
  },
  userIcon: {
    overlayColor: "#757575",
  },
});

export default LogIn;
