import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import Colors from '@/constants/Colors';

interface TrendingItemProps {
  category: string;
  topic: string;
  postsCount: string;
}

export default function TrendingItem({ category, topic, postsCount }: TrendingItemProps) {
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];

  return (
    <View style={styles.trendingItemContainer}>
      <Text style={[styles.trendingCategory, { color: Colors.secondary_text_color }]}>{category}</Text>
      <Text style={[styles.trendingTopic, { color: themeColors.text }]}>{topic}</Text>
      <Text style={[styles.trendingPostsCount, { color: Colors.secondary_text_color }]}>{postsCount} Posts</Text>
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
  },
  trendingTopic: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 2,
  },
  trendingPostsCount: {
    fontSize: 14,
  },
});
