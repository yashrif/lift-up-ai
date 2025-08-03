import { Stack } from "expo-router";

export default function StartLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Start Screen",
        }}
      />
    </Stack>
  );
}
