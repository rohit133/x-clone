import React from 'react';
import {StyleSheet, View} from 'react-native';
import TrendingItem from './TrendingItem';
import { trendingData } from '@/assets/data/TrendingList';

export default function TrendingList(){
  return (
    <View style={styles.trendingListContainer}>
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
  