import { SearchIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const logo = require("../../../assets/images/logo.png");

const sittings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>sittings</Text>
      <Image source={logo} style={styles.logo} />
      <View style={{ height: 20 }} />
      <HugeiconsIcon icon={SearchIcon} size={24} color="black" />
    </View>
  );
};

export default sittings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});
