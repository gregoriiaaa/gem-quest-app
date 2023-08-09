import React from "react";
import { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  StatusBar,
} from "react-native";

/**
 *  Mapping of gem pngs.
 */
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

/** In user's database of what they own. So we only render whats there. */
const GEMS = [
  { name: "amber", key: "amber" },
  { name: "pearl", key: "pearl" },
  { name: "ruby", key: "ruby" },
  { name: "jade", key: "jade" },
  { name: "sapphire", key: "sapphire" },
  { name: "emerald", key: "emerald" },
  { name: "amethyst", key: "amethyst" },
  { name: "rose quartz", key: "rose quartz" },
  { name: "diamond", key: "diamond" },
];

const Gem = (props) => {
  return (
    <View style={styles.gem}>
      <Image style={styles.gemIcon} source={GemsIcons.Amber} />
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
};

const GemsTab = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={3}
        columnWrapperStyle={styles.row}
        data={GEMS}
        extraData={this.Amber}
        renderItem={({ item, index, separators }) => <Gem name={item.name} />}
      />
    </SafeAreaView>
  );
};

export default GemsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  gem: {
    flex: 1,
    padding: 30,
    columnGap: 100,
  },
  gemIcon: {
    width: "auto",
    height: "auto",
  },
  name: {
    textAlign: "center",
    fontSize: 16,
  },
  row: {},
});
