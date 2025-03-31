import { Image, Pressable, StyleSheet, Text, View, useColorScheme } from "react-native";
import AppIcon from "../../assets/images/app-icon.svg";
import FeatureStrokeIcon from "../../assets/images/icons/feature_stroke_icon.svg";
import Colors from "../../constants/Colors";
import { useRouter } from "expo-router";
import { LeftArrowIcon } from "../../lib/icon";
import users from "@/assets/data/users";

type TabMainHeaderConfig = {
  sides?: {
    left: "back" | "user" | "empty";
    center: "title" | "logo";
    right: "feature" | "empty";
  };
  options?: {
    title?: string;
  };
};

type TabMainHeaderComponents = {
  left: {
    back: () => JSX.Element;
    user: () => JSX.Element;
  };
  center: {
    title: () => JSX.Element;
    logo: () => JSX.Element;
  };
  right: {
    feature: () => JSX.Element;
  };
};

const createTabMainHeaderComponents = (
  options: TabMainHeaderConfig["options"],
  themeColors: typeof Colors["light"]
): TabMainHeaderComponents => {
  const router = useRouter();

  return {
    left: {
      back: () => (
        <Pressable onPress={() => router.back()} style={styles.iconPressable}>
          <LeftArrowIcon width={13} height={19} />
        </Pressable>
      ),
      user: () => (
        <Pressable onPress={() => router.push("/profile")} style={styles.iconPressable}>
          <View style={styles.user_image_wrapper}>
            <Image
              source={{ uri: users[0].profileImage }}
              style={styles.user_image}
            />
            <View style={styles.user_image_dot} />
          </View>
        </Pressable>
      ),
    },
    center: {
      title: () => (
        <Pressable onPress={() => router.push("/")} style={styles.centerPressable}>
          <Text style={[styles.title, { color: themeColors.text }]}>
            {options?.title || ""}
          </Text>
        </Pressable>
      ),
      logo: () => (
        <Pressable onPress={() => router.push("/")} style={styles.centerPressable}>
          <AppIcon width={27} height={22} />
        </Pressable>
      ),
    },
    right: {
      feature: () => (
        <Pressable onPress={() => router.push("/actions")} style={styles.iconPressable}>
          <FeatureStrokeIcon width={23} height={22} />
        </Pressable>
      ),
    },
  };
};


const TabMainHeader = ({ sides = { left: "user", center: "logo", right: "feature" }, options }: TabMainHeaderConfig) => {
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];
  const tabMainHeaderComps = createTabMainHeaderComponents(options, themeColors);

  return (
    <View style={[styles.container, { backgroundColor: themeColors.background, borderBottomColor: Colors.secondary_text_color }]}>
      <View style={styles.left_wrapper}>
        {sides.left !== "empty" && tabMainHeaderComps.left[sides.left]()}
      </View>
      <View style={styles.center_wrapper}>
        {tabMainHeaderComps.center[sides.center]()}
      </View>
      <View style={styles.right_wrapper}>
        {sides.right !== "empty" && tabMainHeaderComps.right[sides.right]()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: 20,
    borderBottomWidth: 0.5,
  },
  left_wrapper: {
    flexBasis: "10%",
    flexShrink: 1,
  },
  right_wrapper: {
    flexBasis: "10%",
    alignItems: "flex-end",
    flexShrink: 1,
  },
  center_wrapper: {
    flexShrink: 0,
    alignItems: "center",
  },
  user_image_wrapper: {
    position: "relative",
    width: 32,
    height: 32,
  },
  user_image: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  user_image_dot: {
    position: "absolute",
    top: 2,
    right: 2,
    width: 7,
    height: 7,
    borderWidth: 1,
    borderRadius: 3,
  },
  title: {
    fontWeight: "700",
    fontSize: 18,
  },
  iconPressable: {
    padding: 8, // Better touch area
  },
  centerPressable: {
    paddingVertical: 6, // Better tap space
  },
});

export default TabMainHeader;
