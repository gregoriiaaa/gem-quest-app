import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import { Card, Text, TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getAvailableQuestsByUid } from "../database/questQueries";
import authService from "../authService.jsx";
import { getUserById } from "../database/userQueries";

const AvailableQuests = () => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLikePress = () => {
    setIsLiked(!isLiked);
  };

  const [listOfQuests, setListOfQuests] = useState([]);
  // const [hostName, setHostName] = useState("");
  const currentUID = authService.currUID();

  useEffect(() => {
    const currName = async () => {
      if (currentUID === undefined) {
        console.log("No current uid.");
      } else {
        const userObject = await getUserById(currentUID);
        const userName = userObject.name;
        // setHostName(userName);
        // console.log({ hostName: hostName });
      }
    };
    currName();
  });

  useEffect(() => {
    async function getMyQuests() {
      if (currentUID === undefined) {
        console.log("No current uid.");
      } else {
        const quests = await getAvailableQuestsByUid(currentUID);
        setListOfQuests(quests);
        console.log({ listOfQuests: listOfQuests });
      }
    }
    getMyQuests();
  }, [currentUID]);

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
        {listOfQuests.map((item, index) => (
          <TouchableRipple
            onPress={() => console.log("Pressed")}
            rippleColor="rgba(0, 0, 0, .32)"
            key={index}
          >
            <Card elevation={4} style={styles.card}>
              <Card.Cover
                source={{
                  uri: `https://source.unsplash.com/random/700/?${item.title}`,
                  alt: "Random image of the Bay area by unsplash images",
                }}
              />
              <Card.Title subtitle={`${item.date} at ${item.time}`} />
              <Card.Content>
                <Text style={styles.bold} variant="bodyLarge">
                  {item.title}
                </Text>
                <Text variant="bodyMedium">{`RSVP: 1/${item.rsvpLimit}`}</Text>
                <Text variant="bodyMedium">Hosted by: {item.hostUid}</Text>
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
        ))}
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
