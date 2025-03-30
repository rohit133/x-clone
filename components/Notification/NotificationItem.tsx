// NotificationItem.js

import Colors from '@/constants/Colors';
import { ThreeDotsIcon } from '@/lib/icon';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, GestureResponderEvent } from 'react-native';
import { router } from 'expo-router';

interface NotificationItemProps {
  icon: string;
  content: string;
  isRead?: boolean;
  postId: string;
}

const tooltipOptions = [
  { id: "mute", label: "Mute/unmute" },
  { id: "markRead", label: "Mark as Read" },
  { id: "block", label: "Block" },
];

const NotificationItem: React.FC<NotificationItemProps> = ({ icon, content, isRead = false, postId }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [read, setRead] = useState(isRead);

  // When the notification is pressed, mark it as read and navigate.
  const handleNotificationPress = () => {
    setRead(true);
    setShowTooltip(false);
    router.push(`/tweet/${postId}`);
  };

  // Toggle tooltip when pressing the three-dot icon.
  const handleDotPress = (e: GestureResponderEvent) => {
    e.stopPropagation();
    setShowTooltip((prev) => !prev);
  };

  // When tapping on a tooltip option, simply hide the tooltip.
  const handleTooltipItemPress = () => {
    setShowTooltip(false);
  };

  return (
    <Pressable onPress={handleNotificationPress}>
      <View style={[styles.container, !read && styles.unreadContainer]}>
        {/* Icon / Avatar Area */}
        <View style={styles.iconContainer}>
          <Text style={styles.iconText}>{icon}</Text>
        </View>

        {/* Text Content Area */}
        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>{content}</Text>
        </View>

        {/* Three dots icon to toggle tooltip */}
        <Pressable style={styles.dotIconWrapper} onPress={handleDotPress}>
          <ThreeDotsIcon width={15} height={15} />
        </Pressable>

        {showTooltip && (
          <View style={styles.tooltip}>
            {tooltipOptions.map((option, index) => (
              <Pressable
                key={option.id}
                style={[
                  styles.tooltipItem,
                  index < tooltipOptions.length - 1 && styles.divider,
                ]}
                onPress={handleTooltipItemPress}
              >
                <Text style={styles.tooltipText}>{option.label}</Text>
              </Pressable>
            ))}
          </View>
        )}
      </View>
    </Pressable>
  );
};

export default NotificationItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.secondary_text_color,
    alignItems: 'center',
    position: 'relative',
    overflow: 'visible',
  },
  unreadContainer: {
    backgroundColor: '#E3F2FD',
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
    color: Colors.light.text,
    fontSize: 14,
    lineHeight: 20,
  },
  dotIconWrapper: {
    padding: 4,
  },
  tooltip: {
    position: 'absolute',
    top: 10,
    right: 35,
    backgroundColor: '#333',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 100,
    zIndex: 10000,
  },
  tooltipItem: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  tooltipText: {
    fontSize: 12,
    color: '#fff',
  },
});
