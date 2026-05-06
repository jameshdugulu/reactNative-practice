import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const DetailPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Stack.Screen />
      <Text>News {id}</Text>
    </View>
  );
};

export default DetailPage;
