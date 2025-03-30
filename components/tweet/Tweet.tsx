import { useState } from "react";
import { useRouter, useSegments } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View, Share } from "react-native";
import { Tweet as TweetType } from "../../types";
import { TweetActionButton } from "./TweetActionButton";
import Colors from "../../constants/Colors";
import { differenceInDays, format, parseISO } from "date-fns";
import { ThreeDotsIcon } from "@/lib/icon";

const Tweet = ({ tweet }: { tweet: TweetType }) => {
  const [segment] = useSegments();
  const router = useRouter();
  const [likes, setLikes] = useState(tweet.numberOfLikes);
  const [retweets, setRetweets] = useState(tweet.numberOfRetweets);
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const tweetDate = parseISO(tweet.createdAt);
  const daysDifference = differenceInDays(new Date(), tweetDate);
  let timeAgo;
  if (daysDifference < 6) {
    // If within 6 days, show abbreviated distance like "6d"
    timeAgo = `${daysDifference}d`;
  } else if (daysDifference < 365) {
    // If more than 6 days but less than a year, show month and day (e.g., "20 Aug")
    timeAgo = format(tweetDate, "d MMM");
  } else {
    // If over a year, include the year (e.g., "20 Aug, 22")
    timeAgo = format(tweetDate, "d MMM yy");
  }

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

  // Conditionally truncate the username if it's longer than 10 characters
  const username = tweet.user.username.length > 10 ? tweet.user.username.substring(0, 10) + "...": tweet.user.username;
  return (
    <Pressable style={styles.container} onPress={() => { router.push(`/tweet/${tweet.id}`) }}>
      <View style={styles.left_side}>
        {tweet.is_thread && !tweet.is_thread_start && (
          <View style={styles.thread_line_top} />
        )}
        <View>
          <Pressable
            onPress={() => {
              router.push({
                pathname: "/profile",
                params: { flag: "differentUser", userId: tweet.user.id },
              });
            }}
          >
            <Image source={{ uri: tweet.user.image }} style={styles.owner_image} />
          </Pressable>
        </View>
        {tweet.is_thread && !tweet.is_thread_end && (
          <View style={styles.thread_line_bottom} />
        )}
      </View>
      <View style={styles.right_side}>
        {/* Header section */}
        <View style={styles.header}>
          <View style={styles.info}>
            <Text style={styles.owner_name}>{tweet.user.fullname}</Text>
            <Text style={styles.owner_username}>@{username}</Text>
            <Text style={styles.owner_name_seperator}>·</Text>
            <Text style={styles.timeAgo}>{timeAgo}</Text>
          </View>
          <Pressable style={styles.dotIconWrapper} onPress={() => setShowTooltip((prev) => !prev)} >
            <ThreeDotsIcon width={15} height={15} />
          </Pressable>
          {showTooltip && (
            <View style={styles.tooltip}>
              <Text style={styles.tooltipText}>Tooltip Content</Text>
            </View>
          )}
        </View>
        <Text style={styles.content}>{tweet.content}</Text>
        {tweet.image && (
          <Image source={{ uri: tweet.image }} style={styles.tweet_image} />
        )}
        <View style={styles.actions_wrapper}>
          <TweetActionButton
            icon="comment"
            text={tweet.numberOfComments.toString()}
            onPress={handleComment}
          />
          <TweetActionButton
            icon="retweet"
            text={retweets.toString()}
            onPress={handleRetweet}
            active={isRetweeted}
            activeColor="#00BA7C"
          />
          <TweetActionButton
            icon="favorite"
            text={likes.toString()}
            onPress={handleLike}
            active={isLiked}
            activeColor="#F91880"
          />
          <TweetActionButton icon="share" onPress={handleShare} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: "row",
    gap: 10,
    position: "relative",
    overflow: "hidden",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EEE",
  },
  left_side: {
    position: "relative",
    paddingHorizontal: 10,
  },
  right_side: {
    flex: 1,
    paddingRight: 16,
  },
  owner_image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#EEE",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 3,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  owner_name: {
    color: "#000",
    fontWeight: "600",
    fontSize: 16,
  },
  owner_username: {
    color: Colors.secondary_text_color,
    fontSize: 16,
    marginLeft: 5,
  },
  owner_name_seperator: {
    paddingHorizontal: 2,
    fontSize: 16,
    color: Colors.secondary_text_color,
  },
  timeAgo: {
    color: Colors.secondary_text_color,
    fontSize: 15,
    marginLeft: 5,
  },
  dotIconWrapper: {
    padding: 4,
  },
  tooltip: {
    position: "absolute",
    top: 25, // adjust based on your layout
    right: 0,
    backgroundColor: "#fff",
    borderColor: "#ccc",
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
  tooltipText: {
    fontSize: 12,
    color: "#333",
  },
  content: {
    lineHeight: 20,
    fontSize: 16,
    marginBottom: 8,
  },
  tweet_image: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginTop: 8,
    backgroundColor: "#EEE",
  },
  actions_wrapper: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 425,
  },
  thread_line_top: {
    width: 2,
    height: 15,
    borderRadius: 10,
    backgroundColor: "#CED5DC",
    marginHorizontal: "auto",
    position: "absolute",
    top: -20,
    marginLeft: 27,
  },
  thread_line_bottom: {
    width: 2,
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#CED5DC",
    marginTop: 60,
    marginLeft: 27,
    position: "absolute",
  },
});

export default Tweet;
