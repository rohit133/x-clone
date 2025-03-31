import TabMainHeader from "@/components/Ui/TabMainHeader";
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { Stack, useRouter } from "expo-router";
import Colors from "@/constants/Colors";

export default function UnderMaintenance() {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];

  return (
    <>
      <Stack.Screen
        options={{
          title: "Maintenance",
          header: () => (
            <TabMainHeader
              sides={{ left: "back", center: "title", right: "empty" }}
              options={{ title: "Under Maintenance" }}
            />
          ),
        }}
      />
      <View style={[styles.container, { backgroundColor: themeColors.background }]}>
        <Text style={[styles.title, { color: themeColors.text }]}>We're Under Maintenance</Text>
        <Text style={[styles.message, { color: Colors.secondary_text_color }]}>
          We’ll be back soon. Thank you for your patience!
        </Text>
        <TouchableOpacity style={[styles.button, { backgroundColor: Colors.main }]} onPress={() => router.push("/")}> 
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
