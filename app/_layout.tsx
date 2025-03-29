import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Tabs } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TabMainHeader from "../components/Ui/TabMainHeader";
import Colors from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import {
  HomeBorderIcon,
  HomeFillIcon,
  MessagesBorderIcon,
  MessagesFillIcon,
  NotificationsBorderIcon,
  NotificationsFillIcon,
  SearchBorderIcon,
  SearchFillIcon,
} from "../lib/icon";

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
};

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={{ flex: 1 }} edges={["right", "top", "left"]}>
        <StatusBar style="dark" animated />

        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: "#fff",
            },
            headerShown: false,
          }}
        >
          <Tabs.Screen
            name="(index)"
            options={{
              tabBarIcon: ({ focused }) => {
                return tabIcons["index"][focused ? "active" : "normal"];
              },
            }}
          />
          <Tabs.Screen
            name="(search)"
            options={{
              tabBarIcon: ({ focused }) => {
                return tabIcons["search"][focused ? "active" : "normal"];
              },
            }}
          />
          <Tabs.Screen
            name="(notifications)"
            options={{
              tabBarIcon: ({ focused }) => {
                return tabIcons["notifications"][focused ? "active" : "normal"];
              },
            }}
          />
          <Tabs.Screen
            name="(messages)"
            options={{
              tabBarIcon: ({ focused }) => {
                return tabIcons["messages"][focused ? "active" : "normal"];
              },
            }}
          />
        </Tabs>
      </SafeAreaView>
    </ThemeProvider>
  );
}
