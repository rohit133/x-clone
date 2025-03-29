import { Stack } from "expo-router";
import TabMainHeader from "../../components/Ui/TabMainHeader";

export default function DynamicLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <TabMainHeader />,
      }}
    />
  );
}
