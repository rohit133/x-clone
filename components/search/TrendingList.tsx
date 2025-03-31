import React from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import TrendingItem from './TrendingItem';
import { trendingData } from '@/assets/data/TrendingList';
import Colors from '@/constants/Colors';

export default function TrendingList() {
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];

  return (
    <View style={[styles.trendingListContainer, { backgroundColor: themeColors.background }]}>
      {trendingData.map((item, index) => (
        <TrendingItem
          key={index}
          category={item.category}
          topic={item.topic}
          postsCount={item.postsCount}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  trendingListContainer: {
    marginVertical: 10,
    paddingHorizontal: 15,
  },
});
