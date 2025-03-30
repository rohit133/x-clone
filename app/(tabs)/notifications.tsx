// NotificationsScreen.tsx

import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import NotificationItem from "../../components/Notification/NotificationItem";
import { useNotifications } from '@/context/NotificationContext';

const NotificationsScreen = () => {
  const { notifications } = useNotifications();

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NotificationItem 
            icon={item.icon}
            content={item.content}
            isRead={item.isRead}
            postId={item.postId} // Use the actual tweet/post id
          />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingVertical: 10,
  },
});

export default NotificationsScreen;
