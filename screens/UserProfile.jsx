import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import { Text, Button, Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const UserProfile = ({ profileData }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.imageContainer}>
          <View style={styles.iconBackground}>
            <Icon name="image-edit-outline" size={50} color="#4f585b" />
          </View>
          <Avatar.Image
            size={100}
            source={require("../assets/userAvatar.png")}
            style={{ alignSelf: "flex-start" }}
          />
          {/* <Icon name="plus" size={size} color={color} /> */}
        </View>
        <Button
          icon="account-edit-outline"
          mode="contained"
          buttonColor="#21005D"
          style={styles.editButton}
          contentStyle={styles.editButtonContent}
          onPress={() => console.log("Pressed")}
        >
          Edit
        </Button>
        <View style={styles.h1Container}>
          <Text style={styles.name} variant="titleMedium">
            [Enter this.User's Name]
          </Text>
          <Text style={styles.pronouns} variant="titleSmall">
            [this.Pronouns]
          </Text>
        </View>
        <View style={styles.sections}>
          <Text style={styles.h2} variant="titleMedium">
            About
          </Text>
        </View>

        <Text style={styles.h3} variant="titleSmall">
          Gender Identity:{" "}
        </Text>
        <Text>
          [Gender Identity goes here...] {profileData?.GenderIdentity}
        </Text>
        <Text style={styles.h3} variant="titleSmall">
          Ethnic Identity:
        </Text>
        <Text>
          [Ethnic Identity goes here...] {profileData?.EthnicIdentity}
        </Text>
        <Text style={styles.h3} variant="titleSmall">
          Personality Type:
        </Text>
        <Text>
          [Personality Type goes here...] {profileData?.PersonalityType}
        </Text>
        <Text style={styles.h3} variant="titleSmall">
          Do you have any pets?:
        </Text>
        <Text>[pets goes here...] {profileData?.Pets}</Text>
        <View style={styles.sections}>
          <Text style={styles.h2} variant="titleMedium">
            Food
          </Text>
        </View>
        <Text style={styles.h3} variant="titleSmall">
          Dietary Restriction?
        </Text>
        <Text>
          [Dietary Restriction goes here...] {profileData?.DietaryRestriction}
        </Text>
        <Text style={styles.h3} variant="titleSmall">
          Coffee, Tea, Boba, or All?
        </Text>
        <Text>
          [Coffee, Tea, Boba, or All goes here...] {profileData?.DrinkTypes}
        </Text>
        <Text style={styles.h3} variant="titleSmall">
          Comfort meals/food?
        </Text>
        <Text>
          [Dietary Restriction goes here...] {profileData?.ComfortFood}
        </Text>
        <View style={styles.sections}>
          <Text style={styles.h2} variant="titleMedium">
            Entertainment
          </Text>
        </View>
        <Text style={styles.h3} variant="titleSmall">
          Movie, show, book person:
        </Text>
        <Text>
          [Movie, show, book person goes here...]{" "}
          {profileData?.EntertainmentType}
        </Text>
        <Text style={styles.h3} variant="titleSmall">
          Top Movie:
        </Text>
        <Text>[Top Movie goes here...] {profileData?.TopMovie}</Text>
        <Text style={styles.h3} variant="titleSmall">
          Top Show:
        </Text>
        <Text>[Top Show goes here...] {profileData?.TopShow}</Text>
        <Text style={styles.h3} variant="titleSmall">
          Top Book:
        </Text>
        <Text>[Top Book goes here...] {profileData?.TopBook}</Text>
        <Text style={styles.h3} variant="titleSmall">
          Music Taste:
        </Text>
        <Text>[Music Taste goes here...] {profileData?.MusicTaste}</Text>
        <Text style={styles.h3} variant="titleSmall">
          Top Artist
        </Text>
        <Text>[Top Artist goes here...] {profileData?.TopArtist}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 30,
    marginVertical: 10,
  },
  editButton: {
    alignSelf: "flex-end",
    color: "white",
    marginTop: 10,
    marginRight: 15,
  },
  editButtonContent: {
    flexDirection: "row-reverse",
  },
  imageContainer: {
    width: "100%",
    height: "10%",
    alignItems: "center",
    backgroundColor: "#cdcfd0",
  },
  iconBackground: {
    width: 100,
    height: 100,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  userData: {
    marginTop: 15,
  },
  h1Container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  name: {
    marginTop: 20,

    fontWeight: 900,
    color: "#56595D",
  },
  pronouns: {
    marginBottom: 10,
    fontWeight: 900,
    color: "#56595D",
  },
  sections: {
    width: "100%",
    height: 60,
    borderBottomWidth: 3,
    borderBottomColor: "#21005d",
  },
  h2: {
    marginTop: 20,
    fontWeight: 800,
    color: "#56595D",
  },
  h3: {
    marginTop: 20,
    marginBottom: 5,
    fontWeight: 700,
    color: "#56595D",
  },
});

export default UserProfile;
