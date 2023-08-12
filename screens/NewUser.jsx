import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Avatar } from "react-native-paper";
import CreateAccountForm from "../components/CreateAccountForm";

{
  /* Source: 
  Icon: https://oblador.github.io/react-native-vector-icons/
  */
}

const NewUser = ({ navigation }) => {
  const [showAvatar, setShowAvatar] = useState(false);
  const [changeAllowed, setChangeAllowed] = useState(true);

  const toggleAvatar = () => {
    if (changeAllowed) {
      setShowAvatar(!showAvatar);
      setChangeAllowed(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity
          style={styles.userProfileImage}
          onPress={toggleAvatar}
        >
          {showAvatar ? (
            <Avatar.Image
              size={100}
              source={require("../assets/userAvatar.png")}
            />
          ) : (
            <Avatar.Icon
              style={styles.userIcon}
              size={100}
              icon="file-image-plus-outline"
            />
          )}
        </TouchableOpacity>
        <View style={styles.newUserForm}>
          <CreateAccountForm navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: "1",
    padding: 20,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
    marginVertical: 10,
  },

  userProfileImage: {
    height: "15%",
    alignItems: "center",
  },
  newUserForm: {
    width: "100%",
    height: "85%",
  },
  userIcon: {
    overlayColor: "757575",
  },
});

export default NewUser;
