import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import FollowSuggestionItem from './FollowSuggestionItem';
import { followData } from '@/assets/data/FollowData';
import Colors from '@/constants/Colors';

export default function WhoToFollow(){
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];

  return (
    <View style={[styles.followListContainer, { backgroundColor: themeColors.background }]}>
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
