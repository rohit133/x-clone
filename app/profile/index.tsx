import { Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { View, ScrollView, StatusBar, SafeAreaView, StyleSheet } from "react-native";
import PageView from "@/components/containers/PageView";
import TabMainHeader from "@/components/Ui/TabMainHeader";
import users from "@/assets/data/users";
import tweets from "@/assets/data/tweets";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileTabs from "@/components/profile/ProfileTabs";
import ProfileTweets from "@/components/profile/ProfileTweets";
import Colors from "@/constants/Colors";
import { useTweets } from "@/context/TweetContext";

const ProfileScreen = () => {
  // const { userId } = useLocalSearchParams(); // Get user ID from params
  const userId = "u1"; // Hardcoded for demonstration purposes
  const userInfo = users.find((user) => user.id === userId ) || users[0]; // Default user if not found
  const [selectedTab, setSelectedTab] = useState("Posts");
  const [headerTitle, setHeaderTitle] = useState("Profile");
  
  const { tweets } = useTweets();
  const filteredTweets = tweets.filter((tweet) => tweet.user.id === userId);

  const handleScroll = (event: { nativeEvent: { contentOffset: { y: any; }; }; }) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    setHeaderTitle(scrollY > 120 ? userInfo?.fullname || "Profile" : "Profile");
  };

  return (
    <PageView>
      <Stack.Screen options={{ title: "Profile", header: () => (
          <TabMainHeader sides={{ left: "back", center: "title", right: "empty" }} options={{ title: headerTitle }}/>
      )}}/>
      
      <SafeAreaView style={styles.container}>
        <ScrollView onScroll={handleScroll} scrollEventThrottle={16}>
          <ProfileHeader user={userInfo} />
          <ProfileTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <ProfileTweets tweets={filteredTweets} />
        </ScrollView>
      </SafeAreaView>
    </PageView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
});
