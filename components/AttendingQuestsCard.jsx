import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Text,
  TouchableRipple,
} from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { getAttendingQuestsByUid } from "../database/questQueries";
import authService from "../authService.jsx";
import { getUserById } from "../database/userQueries";

const AttendingQuestsCard = () => {
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
        const quests = await getAttendingQuestsByUid(currentUID);
        setListOfQuests(quests);
        console.log({ listOfQuests: listOfQuests });
      }
    }
    getMyQuests();
  }, [currentUID]);

  return (
    <View style={styles.container}>
      <View style={styles.sections}>
        <Text style={styles.h2} variant="titleMedium">
          Attending Quests
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
                  alt: "Random image of San Francisco area by unsplash images",
                }}
              />
              <Card.Title
                title="Attending"
                titleVariant="titleMedium"
                subtitle={`${item.date} at ${item.time}`}
              />
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
                    name={isLiked ? "cards-heart-outline" : "cards-heart"}
                    size={28}
                    color="black"
                  />
                </TouchableOpacity>
              </Card.Actions>
            </Card>
          </TouchableRipple>
        ))}

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
              subtitle="08/30/2023 at 12:00pm"
            />
            <Card.Content>
              <Text style={styles.bold} variant="bodyLarge">
                Potluck at the Glade
              </Text>
              <Text variant="bodyMedium">RSVP: 2/3</Text>
              <Text variant="bodyMedium">Hosted by: 123456789</Text>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
              <TouchableOpacity onPress={handleLikePress}>
                <Icon
                  name={isLiked ? "cards-heart-outline" : "cards-heart"}
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
    height: 15,
  },
  bold: {
    fontWeight: "bold",
  },
  h2: {
    fontWeight: "800",
    color: "#523D6A",
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

export default AttendingQuestsCard;
