import React, { useState } from "react";
import {
  FlatList,
  TouchableHighlight,
  StyleSheet,
  View,
  Text,
  Image,
  Pressable,
  useColorScheme,
} from "react-native";
import { useRouter } from "expo-router";
import { Tweet as TweetType } from "../../types";
import TweetList from "./TweetList";
import TweetHeader from "./TweetHeader";
import TweetContent from "./TweetContent";
import TweetActions from "./TweetActions";
import Colors from "../../constants/Colors";
import { ThreeDotsIcon } from "@/lib/icon";

const TweetDetail = ({ tweet }: { tweet: TweetType }) => {
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const router = useRouter();
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];

  const formattedDate = new Date(tweet.createdAt).toLocaleString();

  const TweetHead = () => (
    <View style={styles.headerContainer}>
      <View style={styles.detailHeader}>
        <TouchableHighlight
          onPress={() =>
            router.push({
              pathname: "/profile",
              params: { flag: "differentUser", userId: tweet.user.id },
            })
          }
          underlayColor="transparent"
        >
          <View style={styles.headerRow}>
            <Image
              source={{ uri: tweet.user.image }}
              style={styles.userImage}
            />
            <TweetHeader tweet={tweet} />
            <Pressable
              style={styles.actionButton}
              onPress={() => console.log("Action pressed")}
            >
              <ThreeDotsIcon width={20} height={20} />
            </Pressable>
          </View>
        </TouchableHighlight>
      </View>
      <TweetContent tweet={tweet} />
      <Text style={[styles.timeDetail, { color: Colors.secondary_text_color }]}>
        {formattedDate} ·{" "}
        <Text style={{ color: Colors.main }}>Twitter Web App</Text>
      </Text>
      <TweetActions
        tweet={tweet}
        likes={tweet.numberOfLikes + (isFavorited ? 1 : 0)}
        retweets={tweet.numberOfRetweets + (isRetweeted ? 1 : 0)}
        onLike={() => setIsFavorited(!isFavorited)}
        onRetweet={() => setIsRetweeted(!isRetweeted)}
        onComment={() => console.log("Comment pressed")}
      />
    </View>
  );

  // Render thread replies if available
  const threadData = tweet.thread || [];

  return (
    <FlatList
      style={[styles.container, { backgroundColor: themeColors.background }]}
      ListHeaderComponent={TweetHead}
      nestedScrollEnabled
      data={threadData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableHighlight onPress={() => router.push(`/tweet/${item.id}`)}>
          <TweetList tweet={item} />
        </TouchableHighlight>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 14,
  },
  headerContainer: {
    paddingHorizontal: 6,
    paddingVertical: 12,
  },
  detailHeader: {
    marginBottom: 8,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 55,
    height: 55,
    borderRadius: 28,
    marginRight: 10,
  },
  actionButton: {
    marginLeft: "auto",
    padding: 4,
  },
  timeDetail: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 8,
    paddingBottom: 14,
    borderBottomWidth: 0.2,
    borderBottomColor: Colors.secondary_text_color
  },
});

export default TweetDetail;
