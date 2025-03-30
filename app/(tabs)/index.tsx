import React, { useState, useCallback } from "react";
import { ScrollView, StyleSheet, RefreshControl } from "react-native";
import PageView from "../../components/containers/PageView";
import Tweet from "../../components/tweet/Tweet";
import tweets from "@/assets/data/tweets";

export default function IndexTab() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate fetching new tweets from an API
    setTimeout(() => {
      // Optionally, update your tweets here.
      // For now, we'll just stop the refreshing indicator.
      setRefreshing(false);
    }, 1000);
  }, []);

  return (
    <PageView>
      <ScrollView 
        style={styles.scrollView}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {tweets.map((tweet) => (
          <Tweet
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
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
});
