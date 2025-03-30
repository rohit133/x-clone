import React, { createContext, useContext, useState } from 'react';
import initialTweets from '@/assets/data/tweets';
import { Tweet } from '../types';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

type TweetContextType = {
  tweets: Tweet[];
  addTweet: (tweet: Tweet) => void;
};

const TweetContext = createContext<TweetContextType | undefined>(undefined);

export function TweetProvider({ children }: { children: React.ReactNode }) {
  const [tweets, setTweets] = useState<Tweet[]>(initialTweets);

  const addTweet = async (tweet: Tweet) => {
    setTweets(prevTweets => [tweet, ...prevTweets]);

    // Send push notification for new tweet (only on native platforms)
    if (Platform.OS !== 'web') {
      try {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: 'New Tweet',
            body: `${tweet.user.fullname} posted: ${tweet.content.substring(0, 50)}${tweet.content.length > 50 ? '...' : ''}`,
          },
          trigger: null, // Send immediately
        });
      } catch (error) {
        console.error('Failed to send notification:', error);
      }
    }
  };

  return (
    <TweetContext.Provider value={{ tweets, addTweet }}>
      {children}
    </TweetContext.Provider>
  );
}

export function useTweets() {
  const context = useContext(TweetContext);
  if (context === undefined) {
    throw new Error('useTweets must be used within a TweetProvider');
  }
  return context;
}