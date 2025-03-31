import Colors from "@/constants/Colors";
import users from "@/assets/data/users";
import tweets from "@/assets/data/tweets";
import React, { useEffect, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import { useTweetComposer } from "@/hooks/useTweetComposer";
import TweetComposer from "@/components/composer/TweetComposer";
import ComposeHeader from "@/components/composer/ComposeHeader";
import ComposeToolbar from "@/components/composer/ComposeToolbar";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Alert, ToastAndroid, useColorScheme } from "react-native";
import { useNotifications } from "@/context/NotificationContext";

// Simple helper to generate a random ID.
const generateRandomId = () => "t" + Math.floor(Math.random() * 1000000);

export default function ComposeTweetScreen() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];
  const userInfo = users.find((user) => user.id === "u1");
  const {
    tweetContent,
    setTweetContent,
    selectedMedia,
    setSelectedMedia,
    selectedLocation,
    setSelectedLocation,
    isPosting,
    setIsPosting,
    clearComposer,
  } = useTweetComposer();
  const { addNotification } = useNotifications();
  const discardListenerRef = useRef<() => void>();

  // Add beforeRemove listener for unsaved content.
  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      if (tweetContent.trim() === "" && !selectedMedia) {
        return;
      }
      e.preventDefault();
      Alert.alert(
        "Discard tweet?",
        "Your tweet is not saved. Do you want to discard it?",
        [
          { text: "Cancel", style: "cancel", onPress: () => {} },
          {
            text: "Discard",
            style: "destructive",
            onPress: () => navigation.dispatch(e.data.action),
          },
        ]
      );
    });
    discardListenerRef.current = unsubscribe;
    return unsubscribe;
  }, [navigation, tweetContent, selectedMedia]);

  const handlePost = () => {
    if (!tweetContent.trim()) {
      Alert.alert("Empty tweet", "Please add some content to your tweet.");
      return;
    }
    setIsPosting(true);

    // Create the tweet payload.
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

    // Simulate network delay or API call.
    setTimeout(() => {
      tweets.unshift(newTweet);
      console.log("New tweet posted:", newTweet);
      console.log("Updated tweets:", tweets);

      // Add a new notification using the notification context.
      addNotification({
        id: Date.now(), // use timestamp as unique id
        icon: '🔔',
        content: 'Your post was successfully published!',
        isRead: false,
        postId: newTweet.id  // use the tweet's id as postId
      });

      clearComposer();
      setIsPosting(false);
      ToastAndroid.show("Tweet posted successfully!", ToastAndroid.SHORT);

      // Remove beforeRemove listener so it doesn't block navigation.
      if (discardListenerRef.current) {
        discardListenerRef.current();
      }
      navigation.goBack();
    }, 1000);
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

  const removeSelectedImage = () => {
    setSelectedMedia(null);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: themeColors.background }]}>
      <StatusBar barStyle={colorScheme === "dark" ? "light-content" : "dark-content"} />
      <ComposeHeader
        handlePost={handlePost}
        isPosting={isPosting}
        onPressBack={() => {
          if (tweetContent.trim() !== "" || selectedMedia) {
            Alert.alert(
              "Discard tweet?",
              "Your tweet is not saved. Do you want to discard it?",
              [
                { text: "Cancel", style: "cancel" },
                {
                  text: "Discard",
                  style: "destructive",
                  onPress: () => navigation.goBack(),
                },
              ]
            );
          } else {
            navigation.goBack();
          }
        }}
      />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TweetComposer
          tweetContent={tweetContent}
          setTweetContent={setTweetContent}
          userProfileImage={userInfo?.profileImage || ""}
          selectedMedia={selectedMedia}
          isPosting={isPosting}
          removeSelectedMedia={removeSelectedImage}
        />
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
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
});
