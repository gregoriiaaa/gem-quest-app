import * as React from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

{
  /* Source: 
  Get logo to navigate to Welcome Screen: 
  https://stackoverflow.com/questions/72413993/react-image-redirect-to-another-page-when-click-on-it-in-react-native
  To change background color: style={{ backgroundColor: "#FDE3E7" }}

  */
}

const Header = ({ navigation }) => {
  return (
    <Appbar.Header elevated={true}>
      <TouchableOpacity onPress={() => navigation.navigate("Welcome Screen")}>
        <Image
          source={require("../assets/logo.png")}
          alt="GemQuest logo showcasing pride colors"
          style={styles.image}
        />
      </TouchableOpacity>
    </Appbar.Header>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 45,
  },
});
export default Header;
