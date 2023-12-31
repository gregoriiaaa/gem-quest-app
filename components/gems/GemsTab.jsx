import React from "react";

import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { Col, Row, Grid } from "react-native-easy-grid";

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

/**
 * Returns a GemsTab component, which is a 3x3 grid of gems.
 *
 * @author Randy Nguyen
 * (TODO: specify which gems are rendered based on backend)
 * @param {*} props
 * @returns {ScrollView} GemsTab
 */
const GemsTab = (props) => {
  return (
    /** ScrollView is buggy on web, but good on QR and iOS */
    // <ScrollView style={styles.container}>
    <Grid style={styles.gemLayout}>
      <Row style={styles.row}>
        <Col style={styles.col}>
          <Image
            style={styles.gemIcon}
            alt="amber"
            source={GemsIcons.Amber}
          ></Image>
          <View style={styles.gemLine}></View>
          <Text style={styles.gemType}>amber</Text>
        </Col>
        <Col style={styles.col}>
          <Image
            style={styles.gemIcon}
            alt="pearl"
            source={GemsIcons.Pearl}
          ></Image>
          <View style={styles.gemLine}></View>
          <Text style={styles.gemType}>pearl</Text>
        </Col>

        <Col style={styles.col}>
          <Image
            style={styles.gemIcon}
            alt="ruby"
            source={GemsIcons.Ruby}
          ></Image>
          <View style={styles.gemLine}></View>
          <Text style={styles.gemType}>ruby</Text>
        </Col>
      </Row>

      <Row style={styles.row}>
        <Col style={styles.col}>
          <Image
            style={styles.gemIcon}
            alt="jade"
            source={GemsIcons.Jade}
          ></Image>
          <View style={styles.gemLine}></View>
          <Text style={styles.gemType}>jade</Text>
        </Col>
        <Col style={styles.col}>
          <Image
            style={styles.gemIcon}
            alt="sapphire"
            source={GemsIcons.Sapphire}
          ></Image>
          <View style={styles.gemLine}></View>
          <Text style={styles.gemType}>sapphire</Text>
        </Col>
        <Col style={styles.col}>
          <Image
            style={styles.gemIcon}
            alt="emerald"
            source={GemsIcons.Emerald}
          ></Image>
          <View style={styles.gemLine}></View>
          <Text style={styles.gemType}>emerald</Text>
        </Col>
      </Row>

      <Row style={styles.row}>
        <Col style={styles.col}>
          <Image
            style={styles.gemIcon}
            alt="amethyst"
            source={GemsIcons.Amethyst}
          ></Image>
          <View style={styles.gemLine}></View>
          <Text style={styles.gemType}>amethyst</Text>
        </Col>
        <Col style={styles.col}>
          <Image
            style={styles.gemIcon}
            alt="rose-quartz"
            source={GemsIcons.RoseQuartz}
          ></Image>
          <View style={styles.gemLine}></View>
          <Text style={styles.gemType}>rose quartz</Text>
        </Col>
        <Col style={styles.col}>
          <Image
            style={styles.gemIcon}
            alt="diamond"
            source={GemsIcons.Diamond}
          ></Image>
          <View style={styles.gemLine}></View>
          <Text style={styles.gemType}>diamond</Text>
        </Col>
      </Row>
    </Grid>
    // </ScrollView>
  );
};

export default GemsTab;

/**
 *  Styles are slightly forced with hard-coded numerical values.
 *  May not be accurately represented on different models/devices.
 *  Based off Figma iPhone 14 dimensions.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gemLayout: {
    flex: 1,
  },
  row: {
    /** necessary for ScrollView to work */
    flex: 1,
    height: 150,
  },
  col: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gemIcon: {
    resizeMode: "contain",
    height: 50,
    width: 50,
  },
  gemLine: {
    width: 50,
    height: 1.5,
    backgroundColor: "black",
    marginTop: 10,
  },
  gemType: {
    marginTop: 5,
    fontStyle: "italic",
  },
});
