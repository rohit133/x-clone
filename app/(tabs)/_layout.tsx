import { router, Tabs, usePathname } from "expo-router";
import React from "react";
import { TouchableOpacity, useColorScheme, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";
import {
  HomeBorderIcon,
  HomeFillIcon,
  MessagesBorderIcon,
  MessagesFillIcon,
  NotificationsBorderIcon,
  NotificationsFillIcon,
  SearchBorderIcon,
  SearchFillIcon,
  GrokFillIcon,
  GrokStrokeIcon,
} from "../../lib/icon";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const tabIconProps = {
  width: 30,
};

const tabIcons = {
  index: {
    normal: <HomeBorderIcon {...tabIconProps} />,
    active: <HomeFillIcon {...tabIconProps} />,
  },
  search: {
    normal: <SearchBorderIcon {...tabIconProps} />,
    active: <SearchFillIcon {...tabIconProps} />,
  },
  notifications: {
    normal: <NotificationsBorderIcon {...tabIconProps} />,
    active: <NotificationsFillIcon {...tabIconProps} />,
  },
  messages: {
    normal: <MessagesBorderIcon {...tabIconProps} />,
    active: <MessagesFillIcon {...tabIconProps} />,
  },
  chat: {
    normal: <GrokFillIcon width={30} height={25} />,
    active: <GrokFillIcon width={30} height={25} />,
  },
};

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const pathname = usePathname(); // get current route

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#fff",
          },
          // By default, we hide the header – but we'll override it for chat below.
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ focused }) => tabIcons["index"][focused ? "active" : "normal"],
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ focused }) => tabIcons["search"][focused ? "active" : "normal"],
          }}
        />
        <Tabs.Screen
          name="chat"
          options={{
            tabBarIcon: ({ focused }) => tabIcons["chat"][focused ? "active" : "normal"],
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            tabBarIcon: ({ focused }) => tabIcons["notifications"][focused ? "active" : "normal"],
          }}
        />
        <Tabs.Screen
          name="messages"
          options={{
            tabBarIcon: ({ focused }) => tabIcons["messages"][focused ? "active" : "normal"],
          }}
        />
      </Tabs>
      {/* Conditionally render the FAB only if the current route is not '/chat' */}
      {pathname !== "/chat" && (
        <TouchableOpacity style={styles.fab} onPress={() => router.push("/compose")}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
      )}
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 20,
    bottom: 90,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.main,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  fabIcon: {
    fontSize: 28,
    color: "white",
  },
  headerRightButton: {
    marginRight: 12,
  },
});
