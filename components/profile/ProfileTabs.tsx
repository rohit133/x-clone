import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, useColorScheme } from "react-native";
import Colors from "@/constants/Colors";

const TABS = ["Posts", "Media", "Likes"];

type ProfileTabsProps = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
};

const ProfileTabs = ({ selectedTab, setSelectedTab }: ProfileTabsProps) => {
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];

  return (
    <View
      style={[
        styles.tabContainer,
        {
          backgroundColor: themeColors.background,
          borderBottomColor: Colors.secondary_text_color,
        },
      ]}
    >
      {TABS.map((tab) => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.tabItem,
            selectedTab === tab && {
              borderBottomWidth: 2,
              borderBottomColor: Colors.main,
            },
          ]}
          onPress={() => setSelectedTab(tab)}
        >
          <Text
            style={[
              styles.tabItemText,
              { color: Colors.secondary_text_color },
              selectedTab === tab && { color: Colors.main },
            ]}
          >
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ProfileTabs;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 0.5,
  },
  tabItem: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  tabItemText: {
    fontSize: 15,
    fontWeight: "500",
  },
});
