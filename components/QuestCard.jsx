import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Image = () => {
  return (
    <div className="imageContainer">
      <img
        className="imageContent"
        alt="The Glade"
        src={require("../assets/the-glade.png")}
      />
    </div>
  );
};

const QuestCard = (props) => {
  return (
    <View style={styles.questCard}>
      <View style={styles.questCardContent}>
        {/* <Image /> */}
        <Text>THIS FRIDAY AT 1:30PM</Text>
        <Text>Potluck on the Glade</Text>
        <Text>RSVP: 2/3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  questCard: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderWidth: 0.5,
    borderColor: "#808080",
    borderRadius: 10,
    flexDirection: "column",
    height: 200,
    // overflow: "hidden",
    // position: "relative",
    width: 250,
  },
  questCardContent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
  imageContainer: {
    borderWidth: 0, // Equivalent to 'border: 0px none;'
    height: 80,
    width: 250,
    resizeMode: "contain",
  },
  imageContent: {
    height: 80,
    left: 0,
    resizeMode: "cover", // Equivalent to 'object-fit: cover;'
    position: "absolute", // Equivalent to 'position: fixed;'
    top: 0,
    width: 250,
  },
});

export default QuestCard;
