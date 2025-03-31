import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useColorScheme } from 'react-native';
import Colors from '@/constants/Colors';

interface FollowSuggestionItemProps {
  name: string;
  description: string;
}

export default function FollowSuggestionItem({ name, description }: FollowSuggestionItemProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const themeColors = Colors[colorScheme];

  return (
    <View style={styles.followItemContainer}>
      <View style={styles.followItemText}>
        <Text style={[styles.followName, { color: themeColors.text }]}>{name}</Text>
        <Text style={[styles.followDescription, { color: Colors.secondary_text_color }]}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  followItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  followItemText: {
    flex: 1,
    marginRight: 10,
  },
  followName: {
    fontSize: 16,
    fontWeight: '600',
  },
  followDescription: {
    fontSize: 14,
    marginTop: 2,
  },
  followButton: {
    backgroundColor: '#1DA1F2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  followButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
