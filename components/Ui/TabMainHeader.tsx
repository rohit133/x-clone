import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import AppIcon from "../../assets/images/app-icon.svg";
import FeatureStrokeIcon from "../../assets/images/icons/feature_stroke_icon.svg";
import Colors from "../../constants/Colors";
import { useRouter } from "expo-router";
import { LeftArrowIcon } from "../../lib/icon";

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

const createTabMainHeaderComponents = (options: TabMainHeaderConfig["options"]): TabMainHeaderComponents => {
  const router = useRouter();

  return {
    left: {
      back: () => (
        <Pressable onPress={() => { router.back() }}>
          <View>
            <LeftArrowIcon width={13} height={19} />
          </View>
        </Pressable>
      ),
      user: () => (
        <Pressable onPress={() => router.push("/profile")}>
          <View style={styles.user_image_wrapper}>
            <Image source={require("../../assets/images/users/its_was_me_dio.jpeg")} style={styles.user_image} />
            <View style={styles.user_image_dot} />  
          </View>
        </Pressable>
      ),
    },
    center: {
      title: () => (
        <Pressable onPress={() => router.push("/")}>
          <View>
            <Text style={styles.title}>{options?.title || ""}</Text>
          </View>
        </Pressable>
      ),

      logo: () => (
        <Pressable onPress={() => router.push("/")}>
          <View>
            <AppIcon width={27} height={22} />
          </View>
        </Pressable>
      ),
    },
    right: {
      feature: () => (
        <Pressable onPress={() => router.push("/actions")}>
          <View>
            <FeatureStrokeIcon width={23} height={22} />
          </View>
        </Pressable>
      ),
    },

  };
};

const TabMainHeader = ({ sides = { left: "user", center: "logo", right: "feature" }, options }: TabMainHeaderConfig) => {
  const tabMainHeaderComps = createTabMainHeaderComponents(options);
  return (
    <View style={styles.container}>
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
    height: 45,
    paddingHorizontal: 20,
    backgroundColor: Colors.light.background,
    borderBottomWidth: 0.25,
    borderBottomColor: "#BDC5CD",
  },
  left_wrapper: {
    flexBasis: "50%",
    flexShrink: 1,
  },
  right_wrapper: {
    flexBasis: "50%",
    alignItems: "flex-end",
    flexShrink: 1,
  },
  center_wrapper: {
    flexShrink: 0,
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
    borderColor: Colors.light.background,
    borderRadius: 3,
    backgroundColor: Colors.main,
  },
  title: {
    fontWeight: "700",
  },
});

export default TabMainHeader;
