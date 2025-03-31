import React from 'react';
import { View, FlatList, StyleSheet, useColorScheme } from 'react-native';
import NotificationItem from "../../components/Notification/NotificationItem";
import { useNotifications } from '@/context/NotificationContext';
import Colors from '@/constants/Colors';

const NotificationsScreen = () => {
  const { notifications } = useNotifications();
  const colorScheme = useColorScheme() ?? "light";
  
  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme].background }]}>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NotificationItem 
            icon={item.icon}
            content={item.content}
            isRead={item.isRead}
            postId={item.postId}
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
    paddingHorizontal: 5,

  },
  listContainer: {
    paddingVertical: 10,
  },
});

export default NotificationsScreen;
