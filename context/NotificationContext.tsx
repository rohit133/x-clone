// NotificationContext.tsx
import { notifications } from '@/assets/data/Notifications';
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Notification {
  id: number;
  icon: string;
  content: string;
  isRead: boolean;
  postId: string;
}

interface NotificationContextProps {
  notifications: Notification[];
  addNotification: (notification: Notification) => void;
  markNotificationAsRead: (id: number) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

// Dummy notifications data for testing
const initialNotifications: Notification[] = notifications.map((notif) => ({
  ...notif,
  isRead: false,
  postId: '',
}));

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);

  const addNotification = (notification: Notification) => {
    setNotifications((prev) => [notification, ...prev]);
  };

  const markNotificationAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, markNotificationAsRead }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotifications must be used within a NotificationProvider");
  }
  return context;
};
