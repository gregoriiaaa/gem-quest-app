import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import UserProfile from "../screens/UserProfile";

const Profile = ({ route, navigation }) => {
  const { profileData } = route.params;

  return (
    <View style={styles.container}>
      <UserProfile profileData={profileData} />
      <View style={styles.buttonContainer}>
        {/* <Button
          onPress={() => {
            navigation.navigate("LayoutScreen");
          }}
          mode="outlined"
          style={styles.button}
          icon="arrow-left"
        >
          Back
        </Button> */}
        <Button
          onPress={() => {
            navigation.navigate("LayoutScreen");
          }}
          mode="contained"
          style={styles.button}
          buttonColor="#21005D"
          icon="arrow-right"
          contentStyle={styles.submitButtonContent}
        >
          Continue to App
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    marginVertical: 2,
    borderRadius: 5,
    marginTop: "1em",
    // width: "150px",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "2em",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  submitButtonContent: {
    flexDirection: "row-reverse",
  },
});

export default Profile;
