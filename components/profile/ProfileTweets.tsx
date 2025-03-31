import React from "react";
import { View, StyleSheet } from "react-native";
import Tweet from "@/components/tweet/TweetList";
import type { Tweet as TweetType } from "@/types";

const ProfileTweets = ({ tweets }: { tweets: TweetType[] }) => {
    console.log("tweets", tweets);
  return (
    <View style={styles.tweetsContainer}>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </View>
  );
};

export default ProfileTweets;

const styles = StyleSheet.create({
  tweetsContainer: { paddingBottom: 80 },
});
