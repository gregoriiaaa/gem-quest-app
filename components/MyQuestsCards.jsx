import React, {useState, useEffect} from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { getQuestsByHostUid } from "../database/questQueries";
import authService from "../authService.jsx";
import { getUserById } from "../database/userQueries";

const MyQuestsCards = () => {
  const [listOfQuests, setListOfQuests] = useState([]);
  const [hostName, setHostName] = useState("");
  const currentUID = authService.currUID();
  const currName = async () => {
    const userObject = await getUserById(currentUID)
    const userName = userObject.name;
    setHostName(userName);
  }

  useEffect(() => {
    currName();
  });

  console.log(hostName);

  useEffect(() => {
    getQuestsByHostUid(currentUID).then((questData) => {
      setListOfQuests(questData);
    });
  });

  return (
    <View style={styles.container}>
      <View style={styles.sections}>
        <Text style={styles.h2} variant="titleMedium">
          My Quests
        </Text>
      </View>
      {/* Add other content for the My Quests page here */}
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
                alt: "Random image of the event title by unsplash images",
              }}
            />
            <Card.Title
              title= "My Quest"
              titleVariant="titleMedium"
              subtitle= {`${item.date} at ${item.time}`}
            />
            <Card.Content>
              <Text style={styles.bold} variant="bodyLarge">
              {item.title}
              </Text>
              <Text variant="bodyMedium">{`RSVP: 1/${item.rsvpLimit}`}</Text>
              <Text variant="bodyMedium">Hosted by: {hostName}</Text>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
              <Button
                mode="contained-tonal"
                icon="cancel"
                contentStyle={styles.submitButtonContent}
              >
                Cancel
              </Button>
              <Button icon="application-edit-outline">Edit</Button>
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
                uri: "https://source.unsplash.com/random/700/?Metropolitan",
                alt: "Random image of Metropolitan area by unsplash images",
              }}
            />
            <Card.Title
              title="My Quest"
              titleVariant="titleMedium"
              subtitle="Date: [This friday at 1:20PM]"
            />
            <Card.Content>
              <Text style={styles.bold} variant="bodyLarge">
                [Title of Event]
              </Text>
              <Text variant="bodyMedium">RSVP: [2/3]</Text>
              <Text variant="bodyMedium">Hosted by: [Name of this.user]</Text>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
              <Button
                mode="contained-tonal"
                icon="cancel"
                contentStyle={styles.submitButtonContent}
              >
                Cancel
              </Button>
              <Button icon="application-edit-outline">Edit</Button>
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
                uri: "https://source.unsplash.com/random/700/?Sf",
                alt: "Random image of San Francisco area by unsplash images",
              }}
            />
            <Card.Title
              title="My Quest"
              titleVariant="titleMedium"
              subtitle="This friday at 1:20PM"
            />
            <Card.Content>
              <Text style={styles.bold} variant="bodyLarge">
                Potluck at the Glade
              </Text>
              <Text variant="bodyMedium">RSVP: 2/3</Text>
              <Text variant="bodyMedium">Hosted by: [Name of this.user]</Text>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
              <Button
                mode="contained-tonal"
                icon="cancel"
                contentStyle={styles.submitButtonContent}
              >
                Cancel
              </Button>
              <Button icon="application-edit-outline">Edit</Button>
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

export default MyQuestsCards;
