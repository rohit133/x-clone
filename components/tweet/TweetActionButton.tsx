import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import { CommentBorderIcon, FavoriteBorderIcon, FavoriteFillIcon, RetweetFillIcon, RetweetBorderIcon, ShareBorderIcon, } from "../../lib/icon";

type IconName = "comment" | "retweet" | "favorite" | "share";

type Props = {
  icon: IconName;
  text?: string;
  size?: "normal" | "big";
  onPress?: () => void;
  activeColor?: string;
  active?: boolean;
};

const normalIcons: { [key in Props["icon"]]: any } = {
  comment: <CommentBorderIcon width={15} height={15} />,
  favorite: <FavoriteBorderIcon width={15} height={15} />,
  retweet: <RetweetBorderIcon width={18} height={13} />,
  share: <ShareBorderIcon width={15} height={15} />,
};

const bigIcons: { [key in Props["icon"]]: any } = {
  comment: <CommentBorderIcon width={21} height={21} />,
  favorite: <FavoriteBorderIcon width={22} height={18} />,
  retweet: <RetweetBorderIcon width={23} height={23} />,
  share: <ShareBorderIcon width={20} height={20} />,
};

export const TweetActionButton = ({
  icon, text, size = "normal",
  onPress,
  active = false,
  activeColor = Colors.secondary_text_color }: Props) => {
  const color = active ? activeColor : Colors.secondary_text_color;
  // For the "favorite" icon, use the filled version when active
  let iconComponent;
  if (icon === "favorite" && active) {
    iconComponent = size === "big" ? (
      <FavoriteFillIcon width={22} height={18} fill="red" />
    ) : (
      <FavoriteFillIcon width={15} height={15} fill="red" />
    );
  } else if (icon === "retweet" && active) {
    iconComponent =
      size === "big" ? (
        <RetweetFillIcon width={23} height={23} fill={activeColor} />
      ) : (
        <RetweetFillIcon width={18} height={13} fill={activeColor} />
      );
  } else {
    iconComponent = size === "big" ? bigIcons[icon] : normalIcons[icon];
  }
    
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [ styles.container, pressed && styles.pressed ]}>
      {iconComponent}
      {text && <Text style={[styles.text, { color }]}>{text}</Text>}
    </Pressable>
  );
};


const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
    padding: 8,
  },
  text: {
    color: Colors.secondary_text_color,
    fontSize: 13,
  },
  pressed: {
    opacity: 0.7,
  },
});