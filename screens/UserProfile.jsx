import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { Text, Button, Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import authService from "../authService.jsx";
import { getUserById } from "../database/userQueries.js";

const UserProfile = () => {
  const currentUID = authService.currUID();

  const [userName, setUserName] = useState(null);
  const [userPronouns, setUserPronouns] = useState(null);
  const [genderIdentity, setGenderIdentity] = useState(null);
  const [ethnicIdentity, setEthnicIdentity] = useState(null);
  const [personalityType, setPersonalityType] = useState(null);
  const [pets, setPets] = useState(null);
  const [diet, setDiet] = useState(null);
  const [drinks, setDrinks] = useState(null);
  const [comfortMeal, setComfortMeal] = useState(null);
  const [entType, setEntType] = useState(null);
  const [movie, setMovie] = useState(null);
  const [show, setShow] = useState(null);
  const [book, setBook] = useState(null);
  const [taste, setTaste] = useState(null);
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    //gets the data updates the state
    getUserById(currentUID).then((userData) => {
      console.log({ userData });
      setUserName(userData.name);
      setUserPronouns(userData.pronouns);
      setGenderIdentity(userData.genderId);
      setEthnicIdentity(userData.ethnicId);
      setPersonalityType(userData.personalityType);
      setPets(userData.petsDescription);
      setDiet(userData.dietaryRestrictions);
      setDrinks(userData.coffeeTeaBoba);
      setComfortMeal(userData.comfortFood);
      setEntType(userData.movieShowBook);
      setMovie(userData.topMovie);
      setShow(userData.topShow);
      setBook(userData.topBook);
      setTaste(userData.musicTaste);
      setArtist(userData.topArtist);
    });
  });

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
            {userName}
          </Text>
          <Text style={styles.pronouns} variant="titleSmall">
            {userPronouns}
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
        <Text>{genderIdentity}</Text>
        <Text style={styles.h3} variant="titleSmall">
          Ethnic Identity:
        </Text>
        <Text>{ethnicIdentity}</Text>
        <Text style={styles.h3} variant="titleSmall">
          Personality Type:
        </Text>
        <Text>{personalityType}</Text>
        <Text style={styles.h3} variant="titleSmall">
          Do you have any pets?:
        </Text>
        <Text> {pets}</Text>
        <View style={styles.sections}>
          <Text style={styles.h2} variant="titleMedium">
            Food
          </Text>
        </View>
        <Text style={styles.h3} variant="titleSmall">
          Dietary Restriction?
        </Text>
        <Text>{diet}</Text>
        <Text style={styles.h3} variant="titleSmall">
          Coffee, Tea, Boba, or All?
        </Text>
        <Text>{drinks}</Text>
        <Text style={styles.h3} variant="titleSmall">
          Comfort meals/food?
        </Text>
        <Text>{comfortMeal}</Text>
        <View style={styles.sections}>
          <Text style={styles.h2} variant="titleMedium">
            Entertainment
          </Text>
        </View>
        <Text style={styles.h3} variant="titleSmall">
          Movie, show, book person:
        </Text>
        <Text>{entType}</Text>
        <Text style={styles.h3} variant="titleSmall">
          Top Movie:
        </Text>
        <Text> {movie}</Text>
        <Text style={styles.h3} variant="titleSmall">
          Top Show:
        </Text>
        <Text> {show}</Text>
        <Text style={styles.h3} variant="titleSmall">
          Top Book:
        </Text>
        <Text> {book}</Text>
        <Text style={styles.h3} variant="titleSmall">
          Music Taste:
        </Text>
        <Text> {taste}</Text>
        <Text style={styles.h3} variant="titleSmall">
          Top Artist
        </Text>
        <Text> {artist}</Text>
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
