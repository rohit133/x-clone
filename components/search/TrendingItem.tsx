import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TrendingItemProps {
  category: string;
  topic: string;
  postsCount: string;
}

export default function TrendingItem ({ category, topic, postsCount }: TrendingItemProps){
  return (
    <View style={styles.trendingItemContainer}>
      <Text style={styles.trendingCategory}>{category}</Text>
      <Text style={styles.trendingTopic}>{topic}</Text>
      <Text style={styles.trendingPostsCount}>{postsCount} Posts</Text>
    </View>
  );
};


const styles = StyleSheet.create({

    trendingItemContainer: {
      marginBottom: 15,
      borderBottomWidth: 1,
      borderColor: '#E0E0E0',
      paddingBottom: 10,
    },
    trendingCategory: {
      fontSize: 14,
      color: '#666',
    },
    trendingTopic: {
      fontSize: 16,
      fontWeight: '600',
      marginVertical: 2,
    },
    trendingPostsCount: {
      fontSize: 14,
      color: '#999',
    },
  });
  