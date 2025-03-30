import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Stack } from "expo-router";
import TabMainHeader from "@/components/Ui/TabMainHeader";

interface ComposeHeaderProps {
  tweetContent: string;
  handlePost: () => void;
}

const ComposeHeader = ({ tweetContent, handlePost }: ComposeHeaderProps) => {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Compose Tweet",
          header: () => (
            <TabMainHeader
              sides={{ left: "back", center: "title", right: "empty" }}
              options={{ title: "Compose Tweet" }}
            />
          ),
        }}
      />
      <View style={styles.headerContainer}>
        <View style={styles.headerActions}>
          <TouchableOpacity onPress={() => console.log("Drafts pressed")}>
            <Text style={styles.draftsText}>Drafts</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.postButton}
            onPress={handlePost}
            disabled={!tweetContent.trim()}
          >
            <Text style={styles.postButtonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ComposeHeader;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    justifyContent: "flex-end",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  draftsText: {
    color: "#1DA1F2",
    fontSize: 16,
    marginRight: 20,
  },
  postButton: {
    backgroundColor: "#1DA1F2",
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  postButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
