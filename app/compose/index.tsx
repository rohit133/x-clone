import React, { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Image, View, Alert } from "react-native";
import Colors from "@/constants/Colors";
import ComposeHeader from "@/components/composer/ComposeHeader";
import ComposeInput from "@/components/composer/ComposeInput";
import ComposeToolbar from "@/components/composer/ComposeToolbar";
import users from "@/assets/data/users";
// Import your tweets asset array
import tweets from "@/assets/data/tweets";

// Simple helper to generate a random ID.
const generateRandomId = () => "t" + Math.floor(Math.random() * 1000000);

export default function ComposeTweetScreen() {
  const [tweetContent, setTweetContent] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);

  const userInfo = users.find((user) => user.id === "u1");

  const handlePost = () => {
    if (!tweetContent.trim()) {
      Alert.alert("Empty tweet", "Please add some content to your tweet.");
      return;
    }

    // Create a new tweet object
    const newTweet = {
      id: generateRandomId(),
      user: {
        id: userInfo?.id || "u0",
        username: userInfo?.username || "unknown",
        fullname: userInfo?.fullname || "unknown",
        image: userInfo?.profileImage || "",
      },
      createdAt: new Date().toISOString(),
      content: tweetContent,
      image: selectedMedia ? selectedMedia.uri : null,
      numberOfComments: 0,
      numberOfRetweets: 0,
      numberOfLikes: 0,
      thread: [],
    };

    // Append the new tweet to the tweets array.
    tweets.push(newTweet);
    console.log("New tweet posted:", newTweet);
    console.log("Updated tweets:", tweets);

    // Optionally clear the composer after posting.
    setTweetContent("");
    setSelectedMedia(null);
    setSelectedLocation(null);
  };

  const handleMediaSelected = (media: any) => {
    console.log("Selected media:", media);
    setSelectedMedia(media);
  };

  const handleEmojiSelected = (emoji: string) => {
    setTweetContent((prev) => prev + emoji);
  };

  const handleLocationSelected = (location: any) => {
    console.log("Selected location:", location);
    setSelectedLocation(location);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ComposeHeader tweetContent={tweetContent} handlePost={handlePost} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.inputAndPreviewContainer}>
          <ComposeInput
            tweetContent={tweetContent}
            setTweetContent={setTweetContent}
            userProfileImage={userInfo?.profileImage || ""}
          />

          {/* Render media preview below the text input */}
          {selectedMedia && selectedMedia.uri && (
            <Image
              source={{ uri: selectedMedia.uri }}
              style={styles.mediaPreview}
              resizeMode="cover"
            />
          )}
        </View>
        <ComposeToolbar
          onMediaSelected={handleMediaSelected}
          onEmojiSelected={handleEmojiSelected}
          onLocationSelected={handleLocationSelected}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  inputAndPreviewContainer: {
    marginBottom: 10,
  },
  mediaPreview: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginTop: 10,
  },
});
