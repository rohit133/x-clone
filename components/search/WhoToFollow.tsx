import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FollowSuggestionItem from './FollowSuggestionItem';

export default function WhoToFollow(){
  const followData = [
    {
      name: 'Prisma',
      description: 'Modern serverless DB, ORM & more.'
    },
    {
      name: 'TurboRepo',
      description: 'Build system for JS and TS maintained by Vercel.'
    },
    {
      name: 'Remix',
      description: 'Build better websites with React and Remix.'
    }
  ];

  return (
    <View style={styles.followListContainer}>
      <Text style={styles.followListHeading}>Who to follow</Text>
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
  