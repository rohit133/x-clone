import React, { useState } from "react";
import { Pressable, StyleSheet, View, Image, useColorScheme } from "react-native";
import { useRouter, useSegments } from "expo-router";
import { Tweet as TweetType } from "../../types";
import TweetHeader from "./TweetHeader";
import TweetContent from "./TweetContent";
import TweetActions from "./TweetActions";
import { ThreeDotsIcon } from "@/lib/icon";
import Colors from "../../constants/Colors";

export default function TweetList({ tweet }: { tweet: TweetType }) {
  const colorScheme = useColorScheme() ?? "light";
  const router = useRouter();
  const [segment] = useSegments();
  const [likes, setLikes] = useState(tweet.numberOfLikes);
  const [retweets, setRetweets] = useState(tweet.numberOfRetweets);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleLike = () => {
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
    setIsLiked((prev) => !prev);
  };

  const handleRetweet = () => {
    setRetweets((prev) => (isRetweeted ? prev - 1 : prev + 1));
    setIsRetweeted((prev) => !prev);
  };

  const handleComment = () => {
    router.push(`/${segment as string}/compose?reply_to=${tweet.id}`);
  };

  return (
    <Pressable
      style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}
      onPress={() => router.push(`/tweet/${tweet.id}`)}
    >
      {/* Left side with owner image and thread lines */}
      <View style={styles.left_side}>
        {tweet.is_thread && !tweet.is_thread_start && (
          <View style={styles.thread_line_top} />
        )}
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/profile",
              params: { flag: "differentUser", userId: tweet.user.id },
            })
          }
        >
          <Image source={{ uri: tweet.user.image }} style={styles.owner_image} />
        </Pressable>
        {tweet.is_thread && !tweet.is_thread_end && (
          <View style={styles.thread_line_bottom} />
        )}
      </View>

      {/* Right side with common tweet info */}
      <View style={styles.right_side}>
        <View style={styles.headerRow}>
          <TweetHeader tweet={tweet} />
          <Pressable
            style={styles.dotIconWrapper}
            onPress={() => setShowTooltip((prev) => !prev)}
          >
            <ThreeDotsIcon width={15} height={15} />
          </Pressable>
        </View>
        {showTooltip && (
          <View
            style={[
              styles.tooltip,
              {
                backgroundColor: Colors[colorScheme].background,
                borderColor: colorScheme === "dark" ? "#333" : "#ccc",
              },
            ]}
          >
            <View style={styles.tooltipInner}>
              <Image source={{ uri: tweet.user.image }} style={styles.tooltipImage} />
            </View>
          </View>
        )}
        <TweetContent tweet={tweet} />
        <TweetActions
          tweet={tweet}
          likes={likes}
          retweets={retweets}
          onLike={handleLike}
          onRetweet={handleRetweet}
          onComment={handleComment}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // backgroundColor is set dynamically
    paddingVertical: 12,
    flexDirection: "row",
    gap: 10,
    position: "relative",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EEE",
  },
  left_side: {
    paddingHorizontal: 10,
    position: "relative",
  },
  owner_image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#EEE",
  },
  right_side: {
    flex: 1,
    paddingRight: 16,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },
  dotIconWrapper: {
    padding: 4,
  },
  tooltip: {
    position: "absolute",
    top: 25,
    right: 20,
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    zIndex: 10,
  },
  tooltipInner: {
    flexDirection: "row",
    alignItems: "center",
  },
  tooltipImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  thread_line_top: {
    width: 2,
    height: 15,
    borderRadius: 10,
    backgroundColor: "#CED5DC",
    position: "absolute",
    top: -20,
    left: 27,
  },
  thread_line_bottom: {
    width: 2,
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#CED5DC",
    position: "absolute",
    top: 60,
    left: 27,
  },
});
