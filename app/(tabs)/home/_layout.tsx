import { Stack } from "expo-router";

const stackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home" />
    </Stack>
  );
};

export default stackLayout;