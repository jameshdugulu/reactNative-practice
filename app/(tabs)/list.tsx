import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Link } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet } from "react-native";

const goods = [
  { id: 1, name: "News 1" },
  { id: 2, name: "News 2" },
  { id: 3, name: "News 3" },
  { id: 4, name: "News 4" },
  { id: 5, name: "News 5" },
  { id: 6, name: "News 6" },
  { id: 7, name: "News 7" },
  { id: 8, name: "News 8" },
  { id: 9, name: "News 9" },
  { id: 10, name: "News 10" },
  { id: 11, name: "News 11" },
  { id: 12, name: "News 12" },
  { id: 13, name: "News 13" },
  { id: 14, name: "News 14" },
  { id: 15, name: "News 15" },
  { id: 16, name: "News 16" },
  { id: 17, name: "News 17" },
  { id: 18, name: "News 18" },
  { id: 19, name: "News 19" },
  { id: 20, name: "News 20" },
];

const List = () => {
  const [selectedGood, setSelectedGood] = useState(goods);
  const borderColor = useThemeColor({}, "tint");

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {selectedGood.map((good) => (
          <ThemedView
            key={good.id}
            style={[styles.item]}
          >
            <Link href={`../list/${good.id}`} asChild>
              <ThemedText style={styles.itemText} type="defaultSemiBold">
                {good.name}
              </ThemedText>
            </Link>
          </ThemedView>
        ))}
      </ScrollView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#131656",
  },
  scrollView: {
    flex: 1,
    gap: 10,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 18,
  },
});

export default List;
