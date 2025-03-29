import Tweet from "./Tweet";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import Colors from "../../constants/Colors";
import { Tweet as TweetType } from "../../types";
import { TweetActionButton } from "./TweetActionButton";
import { FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";

const TweetDetail = ({ tweet }: { tweet: TweetType }) => {
  // Local state for toggling action button active states
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  // Expo Router hook for navigation
  const router = useRouter();

  // Format the createdAt date here if needed
  const formattedDate = new Date(tweet.createdAt).toLocaleString();

  const tweetHead = () => {
    return (
      <>
        <View style={styles.group}>
          <View style={styles.top_side}>
            <View>
              <Image
                source={{ uri: tweet.user.image }}
                style={styles.owner_image}
              />
            </View>
            <View style={styles.owner_name_wrapper}>
              <Text style={styles.owner_name}>{tweet.user.fullname}</Text>
              <Text style={styles.owner_username}>@{tweet.user.username}</Text>
            </View>
          </View>

          <Text style={styles.content}>{tweet.content}</Text>

          {/* Render media if available */}
          {tweet.image && (
            <Image source={{ uri: tweet.image }} style={styles.mediaImage} />
          )}

          <Text style={styles.time_detail}>
            {formattedDate} ·{" "}
            <Text style={{ color: Colors.main }}>Twitter Web App</Text>
          </Text>
        </View>
        <View style={styles.seperator} />
        <View style={styles.group}>
          <Text style={{ fontSize: 16 }}>
            <Text>
              <Text style={{ fontWeight: "600" }}>
                {tweet.numberOfRetweets + (isRetweeted ? 1 : 0)}
              </Text>{" "}
              <Text style={{ color: Colors.secondary_text_color }}>
                Retweets
              </Text>
            </Text>
            <View style={{ paddingLeft: 10 }} />
            <Text>
              <Text style={{ fontWeight: "600" }}>
                {tweet.numberOfLikes + (isFavorited ? 1 : 0)}
              </Text>{" "}
              <Text style={{ color: Colors.secondary_text_color }}>Likes</Text>
            </Text>
          </Text>
        </View>
        <View style={styles.seperator} />
        <View style={styles.group}>
          <View style={styles.actions_wrapper}>
            <TweetActionButton
              icon="comment"
              size="big"
              onPress={() => console.log("Comment pressed")}
            />
            <TweetActionButton
              icon="retweet"
              size="big"
              active={isRetweeted}
              onPress={() => setIsRetweeted(!isRetweeted)}
            />
            <TweetActionButton
              icon="favorite"
              size="big"
              active={isFavorited}
              onPress={() => setIsFavorited(!isFavorited)}
            />
            <TweetActionButton
              icon="share"
              size="big"
              onPress={() => console.log("Share pressed")}
            />
          </View>
        </View>
        <View style={styles.seperator} />
      </>
    );
  };

  // If there is a thread, assume tweet.thread is an array of reply tweets.
  // Otherwise, render just the main tweet.
  const threadData = tweet.thread || [];

  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={tweetHead}
      nestedScrollEnabled
      data={threadData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableHighlight
          onPress={() => router.push(`/tweet/${item.id}`)}
        >
          <Tweet tweet={item} />
        </TouchableHighlight>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 14,
  },
  group: {
    paddingHorizontal: 6,
    paddingTop: 12,
    paddingBottom: 12,
  },
  owner_name_wrapper: {
    marginLeft: 8,
  },
  owner_name: {
    color: "#000",
    fontWeight: "600",
    fontSize: 16,
  },
  seperator: {
    height: 0.25,
    backgroundColor: "#BDC5CD",
  },
  owner_username: {
    color: Colors.secondary_text_color,
    fontSize: 16,
  },
  top_side: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 23,
  },
  owner_image: {
    width: 55,
    height: 55,
    borderRadius: 28,
  },
  content: {
    lineHeight: 31,
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 15,
    flexShrink: 1,
  },
  mediaImage: {
    width: "100%",
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
  time_detail: {
    fontSize: 16,
    fontWeight: "400",
    color: Colors.secondary_text_color,
  },
  actions_wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default TweetDetail;