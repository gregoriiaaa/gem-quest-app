import React, { useState } from "react";
import { TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import { Card, Text, TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const AvailableQuests = () => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };
  // const [listOfQuests, setListOfQuests] = useState([]);
  // useEffect(() => {
  //     effect
  //     return () => {
  //         cleanup
  //     };
  // }, [input]);
  return (
    <View style={styles.container}>
      <View></View>
      <View style={styles.sections}>
        <Text style={styles.h2} variant="titleMedium">
          Available Quests
        </Text>
      </View>

      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.cardContainer}
      >
        <TouchableRipple
          onPress={() => console.log("Pressed")}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Card elevation={4} style={styles.card}>
            <Card.Cover
              source={{
                uri: "https://source.unsplash.com/random/700/?bay",
                alt: "Random image of the Bay area by unsplash images",
              }}
            />
            <Card.Title subtitle="Date: [This friday at 1:20PM]" />
            <Card.Content>
              <Text style={styles.bold} variant="bodyLarge">
                [Title of Event]
              </Text>
              <Text variant="bodyMedium">RSVP: [2/3]</Text>
              <Text variant="bodyMedium">Hosted by: [Name of other.user]</Text>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
              <TouchableOpacity onPress={handleLikePress}>
                <Icon
                  name={isLiked ? "cards-heart" : "cards-heart-outline"}
                  size={28}
                  color="black"
                />
              </TouchableOpacity>
            </Card.Actions>
          </Card>
        </TouchableRipple>

        <TouchableRipple
          onPress={() => console.log("Pressed")}
          rippleColor="rgba(0, 0, 0, .32)"
        >
          <Card elevation={4} style={styles.card}>
            <Card.Cover
              source={{
                uri: "https://source.unsplash.com/random/700/?Cityscape",
                alt: "Random image of Cityscape area by unsplash images",
              }}
            />
            <Card.Title
              title="Attending"
              titleVariant="titleMedium"
              subtitle="This friday at 1:20PM"
            />
            <Card.Content>
              <Text style={styles.bold} variant="bodyLarge">
                Potluck at the Glade
              </Text>
              <Text variant="bodyMedium">RSVP: 2/3</Text>
              <Text variant="bodyMedium">Hosted by: [Name of other.user]</Text>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
              <TouchableOpacity onPress={handleLikePress}>
                <Icon
                  name={isLiked ? "cards-heart" : "cards-heart-outline"}
                  size={28}
                  color="black"
                />
              </TouchableOpacity>
            </Card.Actions>
          </Card>
        </TouchableRipple>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  sections: {
    height: 20,
  },
  bold: {
    fontWeight: "bold",
  },
  h2: {
    fontWeight: "800",
    color: "#523D6A",
    paddingBottom: 140,
  },
  cardContainer: {
    flexDirection: "row",
    marginVertical: 20,
    marginHorizontal: 10,
    marginBottom: 40,
  },
  card: {
    marginRight: 15,
    width: 300,
  },
  cardActions: {
    marginVertical: 10,
  },
});

export default AvailableQuests;
