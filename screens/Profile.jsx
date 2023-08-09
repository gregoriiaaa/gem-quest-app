import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CreateUserProfileForm from "../components/CreateUserProfileForm";

const Profile = () => {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <Text>Welcome to the Profile page!</Text>
      {/* Add other content for the Gems page here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Profile;
