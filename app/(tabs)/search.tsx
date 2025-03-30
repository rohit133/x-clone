import TrendingList from "@/components/search/TrendingList";
import WhoToFollow from "@/components/search/WhoToFollow";
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";

export default function SearchTab() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TrendingList />
        <WhoToFollow />
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});