import { ScrollView, StyleSheet } from "react-native";
import PageView from "../../components/containers/PageView";
import Tweet from "../../components/tweet/Tweet";
import tweets from "@/assets/data/tweets";


export default function IndexTab() {
  return (
    <PageView>
      <ScrollView style={styles.scrollView}>
        {tweets.map(tweet => (
          <Tweet key={tweet.id}  tweet={{ ...tweet, user: {
            ...tweet.user,
              id: tweet.user.id,
              fullname: tweet.user.fullname ?? '',
            },
            thread: tweet.thread?.map(threadTweet => ({
              ...threadTweet,
              user: {
                ...threadTweet.user,
                id: threadTweet.user.id,
              },
            })),
          }}
        />
        ))}
      </ScrollView>
    </PageView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
});