import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";
import { format, parseISO, differenceInDays } from "date-fns";
import { Tweet as TweetType } from "../../types";

const TweetHeader = ({ tweet }: { tweet: TweetType }) => {
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];

  const tweetDate = parseISO(tweet.createdAt);
  const daysDifference = differenceInDays(new Date(), tweetDate);
  let timeAgo;
  if (daysDifference < 6) {
    timeAgo = `${daysDifference}d`;
  } else if (daysDifference < 365) {
    timeAgo = format(tweetDate, "d MMM");
  } else {
    timeAgo = format(tweetDate, "d MMM yy");
  }

  // Truncate username if too long
  const username =
    tweet.user.username.length > 10
      ? tweet.user.username.substring(0, 10) + "..."
      : tweet.user.username;

  return (
    <View style={styles.header}>
      <Text style={[styles.ownerName, { color: themeColors.text }]}>
        {tweet.user.fullname}
      </Text>
      <Text style={[styles.ownerUsername, { color: Colors.secondary_text_color, marginLeft: 5 }]}>
        @{username}
      </Text>
      <Text style={[styles.separator, { color: Colors.secondary_text_color, paddingHorizontal: 2 }]}>
        ·
      </Text>
      <Text style={[styles.timeAgo, { color: Colors.secondary_text_color, marginLeft: 5 }]}>
        {timeAgo}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  ownerName: {
    fontWeight: "600",
    fontSize: 16,
  },
  ownerUsername: {
    fontSize: 16,
  },
  separator: {
    fontSize: 16,
  },
  timeAgo: {
    fontSize: 15,
  },
});

export default TweetHeader;
