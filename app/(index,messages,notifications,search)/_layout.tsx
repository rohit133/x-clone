import { Stack, Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import Colors from "../../constants/Colors";

import {
  HomeBorderIcon,
  HomeFillIcon,
  MessagesBorderIcon,
  MessagesFillIcon,
  NotificationsBorderIcon,
  NotificationsFillIcon,
  SearchBorderIcon,
  SearchFillIcon,
} from "../../lib/icon";
import TabMainHeader from "../../components/Ui/TabMainHeader";

const tabIconProps = {
  width: 30,
};

const tabIcons = {
  index: {
    normal: <HomeBorderIcon {...tabIconProps} />,
    active: <HomeFillIcon {...tabIconProps} />,
  },
  search: {
    normal: <SearchBorderIcon {...tabIconProps} />,
    active: <SearchFillIcon {...tabIconProps} />,
  },
  notifications: {
    normal: <NotificationsBorderIcon {...tabIconProps} />,
    active: <NotificationsFillIcon {...tabIconProps} />,
  },
  messages: {
    normal: <MessagesBorderIcon {...tabIconProps} />,
    active: <MessagesFillIcon {...tabIconProps} />,
  },
};

export default function DynamicLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <TabMainHeader />,
      }}
    />
  );
}
