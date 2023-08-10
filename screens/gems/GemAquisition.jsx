import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";

const GemsIcons = {
  Amber: require("../../assets/gems/Amber.png"),
  Pearl: require("../../assets/gems/Pearl.png"),
  Ruby: require("../../assets/gems/Ruby.png"),
  Jade: require("../../assets/gems/Jade.png"),
  Sapphire: require("../../assets/gems/Sapphire.png"),
  Emerald: require("../../assets/gems/Emerald.png"),
  Amethyst: require("../../assets/gems/Amethyst.png"),
  RoseQuartz: require("../../assets/gems/RoseQuartz.png"),
  Diamond: require("../../assets/gems/Diamond.png"),
};

/**
 * Returns a screen that showcases the newly acquired gem when
 * PointsBar is filled up. Logic for updating the user should be elsewhere.
 *
 * @author Randy Nguyen
 * @param {color, gem} props
 * @param {string} props.color Hex color of gem
 * @param {string} props.gem Image path of the gem
 * @returns {SafeAreaView} GemAcquisition
 */
const GemAcquisition = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textLayout}>
        {/* Intro text */}
        <Text style={styles.congrats}>Congratulations!</Text>
        {/* Box containing the gem */}
        <View style={styles.acquisitionBox}>
          <Text style={styles.acquired}>You've Acquired:</Text>
          <View style={styles.gemBox}>
            <Text style={[styles.acquiredGem, { color: "#ec8bee"}]}>
              AMETHYST
            </Text>
            <Image alt="newly-acquired-gem" style={styles.gemIcon} source={GemsIcons.Amethyst}></Image>
          </View>
        </View>
        {/* Continue button (TODO: navigate to right page) */}
        <Button mode="contained" onPress={() => console.log("Pressed")}>
          tap to continue
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default GemAcquisition;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bd92cd",
  },
  textLayout: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  congrats: {
    fontSize: 34,
    fontWeight: "bold",
  },
  acquisitionBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  acquired: {
    textAlign: "center",
    paddingBottom: 20,
    fontSize: 34,
  },
  gemBox: {
    width: 300,
    height: 300,
    backgroundColor: "#fde3e7",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  acquiredGem: {
    fontSize: 26,
    fontWeight: "bold",
    padding: 20,
  },
  gemIcon: {
    resizeMode: "contain",
    width: 100,
    height: 100,
    paddingTop: 150,
  },
});
