import React from "react";
import { useRouter } from "expo-router";
import { Tweet as TweetType } from "../../types";
import { View, StyleSheet, Share, useColorScheme } from "react-native";
import { TweetActionButton } from "./TweetActionButton";
import Colors from "../../constants/Colors";

type Props = {
  tweet: TweetType;
  likes: number;
  retweets: number;
  onLike: () => void;
  onRetweet: () => void;
  onComment: () => void;
};

const TweetActions = ({
  tweet,
  likes,
  retweets,
  onLike,
  onRetweet,
  onComment,
}: Props) => {
  const router = useRouter();
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];

  const handleShare = async () => {
    try {
      await Share.share({
        message: tweet.content,
        url: `https://yourapp.com/tweet/${tweet.id}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={[styles.actionsWrapper, { backgroundColor: themeColors.background }]}>
      <TweetActionButton
        icon="comment"
        text={tweet.numberOfComments.toString()}
        onPress={onComment}
      />
      <TweetActionButton
        icon="retweet"
        text={retweets.toString()}
        onPress={onRetweet}
        activeColor="#00BA7C"
      />
      <TweetActionButton
        icon="favorite"
        text={likes.toString()}
        onPress={onLike}
        activeColor="#F91880"
      />
      <TweetActionButton icon="share" onPress={handleShare} />
    </View>
  );
};

const styles = StyleSheet.create({
  actionsWrapper: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 425,
  },
});

export default TweetActions;
