import React from 'react';
import {StyleSheet, View} from 'react-native';
import TrendingItem from './TrendingItem';

export default function TrendingList(){
  const trendingData = [
    { category: 'Entertainment - Trending', topic: '#SalmanKhan', postsCount: '73.2K' },
    { category: 'Trending', topic: '#GhibliStudio', postsCount: '82.1K' },
    { category: 'Trending in India', topic: 'Eid Mubarak', postsCount: '142K' },
  ];

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
  