import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import PageView from "../../../components/containers/PageView";
import { Stack } from "expo-router";
import TabMainHeader from "../../../components/Ui/TabMainHeader";
import TweetDetail from "../../../components/tweet/TweetDetail";
import tweets from "@/assets/data/tweets";

export default function TweetPage() {
  const { id } = useLocalSearchParams<{ id: string }>();
  // Find the tweet with the matching id
  const tweet = tweets.find((t) => t.id === id);
  if (!tweet) {
    return (
      <PageView>
        <Text>Tweet not found</Text>
      </PageView>
    );
  }

  return (
    <PageView>
      <Stack.Screen options={{ 
        title: "Tweet",
        header: () => (<TabMainHeader sides={{ left: "back", center: "title", right: "empty", }} 
        options={{ title: "Tweet" }}/>),}}/>
      <TweetDetail tweet={tweet} />
    </PageView>
  );
}
