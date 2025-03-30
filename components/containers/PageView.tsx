import { StyleSheet, View } from "react-native";

const PageView = ({ children }: { children: React.ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7ECF0",
  },
});
export default PageView;
