import TabMainHeader from "@/components/Ui/TabMainHeader";
import { Stack } from "expo-router";

export default function actions() {
  return (
    <Stack.Screen
        options={{
          title: "Compose Tweet",
          header: () => (
            <TabMainHeader
              sides={{ left: "back", center: "title", right: "empty" }}
              options={{ title: "Action Menu" }}
            />
          ),
        }}
      />
  )
}   