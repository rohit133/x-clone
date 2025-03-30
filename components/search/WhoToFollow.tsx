import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FollowSuggestionItem from './FollowSuggestionItem';
import { followData } from '@/assets/data/FollowData';

export default function WhoToFollow(){

  return (
    <View style={styles.followListContainer}>
      {followData.map((item, index) => (
        <FollowSuggestionItem
          key={index}
          name={item.name}
          description={item.description}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
    followListContainer: {
      marginVertical: 10,
      paddingHorizontal: 15,
    },
    followListHeading: {
      fontSize: 18,
      fontWeight: '700',
      marginBottom: 10,
    },
  });
  