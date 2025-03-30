// NotificationItem.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface NotificationItemProps {
  icon: string;
  content: string;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ icon, content }) => {
  return (
    <View style={styles.container}>
      {/* Icon / Avatar Area */}
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>{icon}</Text>
      </View>

      {/* Text Content Area */}
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>{content}</Text>
      </View>
    </View>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  iconContainer: {
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
  },
  iconText: {
    fontSize: 24,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  contentText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 20,
  },
});
