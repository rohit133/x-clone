import React from "react";
import { View, Text, Image, StyleSheet, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import { Tweet as TweetType } from "../../types";

const TweetContent = ({ tweet }: { tweet: TweetType }) => {
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];

  return (
    <View style={styles.contentWrapper}>
      <Text style={[styles.content, { color: themeColors.text }]}>
        {tweet.content}
      </Text>
      {tweet.image && (
        <Image
          source={{ uri: tweet.image }}
          style={[styles.tweetImage, { backgroundColor: themeColors.background }]}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contentWrapper: {
    marginVertical: 8,
  },
  content: {
    fontSize: 16,
    lineHeight: 20,
  },
  tweetImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginTop: 8,
  },
});

export default TweetContent;
