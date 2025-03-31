import React, { useState, useCallback } from "react";
import { ScrollView, StyleSheet, RefreshControl, useColorScheme } from "react-native";
import PageView from "../../components/containers/PageView";
import TweetList from "../../components/tweet/TweetList";
import tweetsData from "@/assets/data/tweets"; 
import { useFocusEffect } from "@react-navigation/native";
import Colors from "@/constants/Colors";

export default function IndexTab() {
  const colorScheme = useColorScheme() ?? "light";
  
  const [tweets, setTweets] = useState(tweetsData);
  const [refreshing, setRefreshing] = useState(false);

  const fetchTweets = () => {
    // Ideally, call your API to fetch tweets here.
    // For now, we simply update the state (assuming tweetsData has been updated).
    setTweets([...tweetsData]);
  };
  
  useFocusEffect(
    useCallback(() => {
      fetchTweets();
    }, [])
  );

  // Optional pull-to-refresh
  const onRefresh = () => {
    setRefreshing(true);
    fetchTweets();
    setRefreshing(false);
  };

  return (
    <PageView style={StyleSheet.flatten([styles.container, { backgroundColor: Colors[colorScheme].background }])}>
      <ScrollView 
        style={styles.scrollView} 
        refreshControl={
          <RefreshControl 
            refreshing={refreshing} 
            onRefresh={onRefresh} 
            tintColor={Colors[colorScheme].text}
          />
        }
      >
        {tweets.map((tweet) => (
          <TweetList 
            key={tweet.id}
            tweet={{ 
              ...tweet, 
              user: { 
                ...tweet.user,
                id: tweet.user.id,
                fullname: tweet.user.fullname ?? '',
              },
              thread: tweet.thread?.map((threadTweet) => ({
                ...threadTweet,
                user: {
                  ...threadTweet.user,
                  id: threadTweet.user.id,
                },
              })),
            }}
          />
        ))}
      </ScrollView>
    </PageView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});
