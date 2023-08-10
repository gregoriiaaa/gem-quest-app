import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import {
  Avatar,
  Button,
  Card,
  Text,
  TouchableRipple,
} from "react-native-paper";

const draftsCard = () => {
  // const [listOfQuests, setListOfQuests] = useState([]);
  // useEffect(() => {
  //     effect
  //     return () => {
  //         cleanup
  //     };
  // }, [input]);
  return (
    <View style={styles.container}>
      <View style={styles.sections}>
        <Text style={styles.h2} variant="titleMedium">
          My Drafts
        </Text>
      </View>
      {/* Add other content for the My Quests page here */}
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
                uri: "https://source.unsplash.com/random/700/?Cityscape",
                alt: "Random image of Cityscape area by unsplash images",
              }}
            />
            <Card.Title
              title="Draft"
              titleVariant="titleMedium"
              subtitle="TBD"
            />
            <Card.Content>
              <Text style={styles.bold} variant="bodyLarge">
                Potluck at the Glade
              </Text>
              <Text variant="bodyMedium">RSVP: 0/3</Text>
              <Text variant="bodyMedium">Hosted by: Melissa</Text>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
              <Button
                mode="contained-tonal"
                icon="delete-outline"
                contentStyle={styles.submitButtonContent}
              >
                Delete
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
              title="Draft"
              titleVariant="titleMedium"
              subtitle="TBD"
            />
            <Card.Content>
              <Text style={styles.bold} variant="bodyLarge">
                Pizza at the Glade
              </Text>
              <Text variant="bodyMedium">RSVP: 0/3</Text>
              <Text variant="bodyMedium">Hosted by: Melissa</Text>
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
              <Button
                mode="contained-tonal"
                icon="delete-outline"
                contentStyle={styles.submitButtonContent}
              >
                Delete
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

export default draftsCard;
