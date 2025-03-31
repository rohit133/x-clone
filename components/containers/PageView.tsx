import React from "react";
import { StyleSheet, View, useColorScheme, ViewStyle } from "react-native";
import Colors from "@/constants/Colors";

type PageViewProps = {
  children: React.ReactNode;
  style?: ViewStyle;
};

const PageView = ({ children, style }: PageViewProps) => {
  const colorScheme = useColorScheme() ?? "light";
  return (
    <View style={[styles.container, { backgroundColor: Colors[colorScheme].background }, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PageView;
