import React from "react";
import { StyleSheet } from "react-native";
import GemScreen from "./gems/GemScreen";

const Gems = () => {
  return (
    
    <GemScreen progress={990} maxProgress={1250}></GemScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Gems;
