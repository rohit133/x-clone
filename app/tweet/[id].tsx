import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import PageView from "../../components/containers/PageView";
import { Stack } from "expo-router";
import TabMainHeader from "../../components/Ui/TabMainHeader";
import TweetDetail from "../../components/tweet/TweetDetail";
import tweets from "@/assets/data/tweets";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
// import { SafeAreaView,  } from "react-native-safe-area-context";

// Recursive function to find a tweet by id in both top-level tweets and nested threads
const findTweetById = (tweetsArray: any[], id: string): any | null => {
  for (const tweet of tweetsArray) {
    if (tweet.id === id) {
      return tweet;
    }
    if (tweet.thread && tweet.thread.length > 0) {
      const found = findTweetById(tweet.thread, id);
      if (found) return found;
    }
  }
  return null;
};

export default function TweetPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  // Use the recursive function to find the tweet by id
  const tweet = findTweetById(tweets, id);
  
  if (!tweet) {
    return (
      <PageView>
        <Text>Tweet not found</Text>
      </PageView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
    <PageView>
      <Stack.Screen
        options={{
          title: "Tweet",
          header: () => (
            <TabMainHeader
              sides={{ left: "back", center: "title", right: "empty" }}
              options={{ title: "Tweet" }}
            />
          ),
        }}
      />
      <TweetDetail tweet={tweet} />
    </PageView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContent: {
    paddingBottom: 80,
  },
});
