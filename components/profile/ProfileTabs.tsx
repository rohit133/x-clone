import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";

const TABS = ["Posts", "Media", "Likes"];

type ProfileTabsProps = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
};

const ProfileTabs = ({ selectedTab, setSelectedTab }: ProfileTabsProps) => {
  return (
    <View style={styles.tabContainer}>
      {TABS.map((tab) => (
        <TouchableOpacity key={tab} style={[styles.tabItem, selectedTab === tab && styles.activeTabItem]} onPress={() => setSelectedTab(tab)}>
          <Text style={[styles.tabItemText, selectedTab === tab && styles.activeTabItemText]}>{tab}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ProfileTabs;

const styles = StyleSheet.create({
  tabContainer: { flexDirection: "row", justifyContent: "space-around", borderBottomWidth: 0.5, borderBottomColor: "#333", backgroundColor: Colors.light.background },
  tabItem: { flex: 1, paddingVertical: 12, alignItems: "center" },
  tabItemText: { color: "#888", fontSize: 15, fontWeight: "500" },
  activeTabItem: { borderBottomWidth: 2, borderBottomColor: Colors.main },
  activeTabItemText: { color: Colors.main },
});
