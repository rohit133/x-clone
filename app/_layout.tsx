import { Stack } from "expo-router";
import { Platform } from 'react-native';
import { StatusBar } from "react-native";
import { useContext, useEffect } from "react";
import * as Notifications from 'expo-notifications';
import { TweetProvider } from '@/context/TweetContext';
import TabMainHeader from "../components/Ui/TabMainHeader";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { NotificationProvider } from "@/context/NotificationContext";
import { HeaderConfigProvider, HeaderConfigContext } from "@/context/HeaderConfigContext";

// Configure notifications
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

function LayoutContent() {
  const { config } = useContext(HeaderConfigContext);

  useEffect(() => {
    registerForPushNotificationsAsync();
  }, []);

  return ( 
    <SafeAreaView style={{ flex: 1 }} edges={["right", "top", "left"]}>
      <StatusBar animated />
      <Stack
        screenOptions={{
          header: () => <TabMainHeader {...config} />,
        }}
      />
    </SafeAreaView>
  );
}

async function registerForPushNotificationsAsync() {
  if (Platform.OS === 'web') {
    // Web platform doesn't support push notifications
    return;
  }

  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }

  if (finalStatus !== 'granted') {
    console.log('Failed to get push token for push notification!');
    return;
  }

  const token = await Notifications.getExpoPushTokenAsync({
    projectId: 'your-project-id', // Replace with your project ID
  });
  console.log(token);
}

export default function DynamicLayout() {
  useFrameworkReady();

  return (
    <NotificationProvider>
    <TweetProvider>
      <HeaderConfigProvider>
        <LayoutContent />
      </HeaderConfigProvider>
    </TweetProvider>
    </NotificationProvider>
  );
}