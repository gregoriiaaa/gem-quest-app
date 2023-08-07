import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import CreateAccountForm from "../components/CreateAccountForm";

const NewUser = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userProfileImage}>
        <Avatar.Image size={100} source={require("../assets/userAvatar.png")} />
      </View>
      <View style={styles.newUserForm}>
        <CreateAccountForm />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 20,
  },
  userProfileImage: {
    width: "100%",
    height: "15%",
    alignItems: "center",
  },
  newUserForm: {
    width: "100%",
    height: "85%",
  },
});

export default NewUser;
