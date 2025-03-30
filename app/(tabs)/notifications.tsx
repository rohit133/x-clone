// NotificationsScreen.js

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import NotificationItem from "../../components/Notification/NotificationItem";

const NotificationsScreen = () => {
  // Sample data to mimic the notifications in your screenshot
  const notifications = [
    {
      id: 1,
      icon: '🎙️',
      content: 'Sejal Sud is hosting the Space: "How to win friends and influence people"',
    },
    {
      id: 2,
      icon: '🎉',
      content: "It's your X anniversary! Celebrate with a special post created just for you",
    },
    {
      id: 3,
      icon: '📹',
      content:
        "ThePrimeagen is LIVE: 'LAST STREAM FROM TOWER! QUICK RECAP! GET IN!' #ad cursor?",
    },
    {
      id: 4,
      icon: '🎀',
      content: 'Recent post from Noor 🎀',
    },
    {
      id: 5,
      icon: '🎮',
      content:
        "ThePrimeagen is LIVE: '3 DAYS LEFT! KRAZAM BUILD GAME?! (+teej//) #ad cursor?'",
    },
    {
      id: 6,
      icon: '🎮',
      content:
        "ThePrimeagen is LIVE: 'HELP ME MAKE TOWERS - MAKING A GAME IN 7 DAYS using Cursor' #ad",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {notifications.map((item) => (
          <NotificationItem key={item.id} icon={item.icon} content={item.content} />
        ))}
      </ScrollView>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Dark theme background
  },
});
