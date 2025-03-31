import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, useColorScheme } from "react-native";
import Colors from "@/constants/Colors";
import { User } from "@/types";

interface ProfileHeaderProps {
  user: User;
}

const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  const isCurrentUser = user.id === "u1"; // Replace with actual logged-in user logic
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];

  return (
    <>
      {/* Banner */}
      <View style={[styles.bannerContainer, { backgroundColor: themeColors.background }]}>
        {user.bannerImage && (
          <Image source={{ uri: user.bannerImage }} style={styles.bannerImage} />
        )}
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfoContainer}>
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />

        <TouchableOpacity style={styles.actionButton}>
          <Text style={[styles.actionButtonText, { color: Colors.main }]}>
            {isCurrentUser ? "Edit Profile" : "Follow"}
          </Text>
        </TouchableOpacity>

        {/* User Info */}
        <View style={styles.nameRow}>
          <Text style={[styles.nameText, { color: themeColors.text }]}>
            {user?.fullname || ""}
          </Text>
          {user?.verified && (
            <TouchableOpacity style={[styles.verifiedBadge, { borderColor: Colors.secondary_text_color }]}>
              <Image
                source={require('@/assets/images/checkmark.png')}
                style={{ width: 14, height: 14 }}
              />
              <Text style={[styles.verifiedText, { color: Colors.main }]}>
                Get verified
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <Text style={[styles.usernameText, { color: Colors.secondary_text_color }]}>
          @{user.username}
        </Text>
        <Text style={[styles.bioText, { color: themeColors.text }]}>{user.bio}</Text>
        <Text style={[styles.metaText, { color: Colors.secondary_text_color }]}>
          {user.location} | {user.joined}
        </Text>

        {/* Stats */}
        <View style={styles.statsRow}>
          <Text style={[styles.statsText, { color: themeColors.text }]}>
            {user.following}{" "}
            <Text style={[styles.mutedText, { color: Colors.secondary_text_color }]}>
              Following
            </Text>
          </Text>
          <Text style={[styles.statsText, { marginLeft: 15, color: themeColors.text }]}>
            {user.followers}{" "}
            <Text style={[styles.mutedText, { color: Colors.secondary_text_color }]}>
              Followers
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  bannerContainer: {
    width: "100%",
    height: 120,
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  profileInfoContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    paddingTop: 30,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#000",
    position: "absolute",
    top: -40,
    left: 16,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    marginTop: 30,
    gap: 10,
  },
  verifiedBadge: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  verifiedText: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "600",
    marginLeft: 4,
  },
  nameText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  usernameText: {
    fontSize: 16,
    marginTop: 2,
  },
  bioText: {
    fontSize: 14,
    marginTop: 8,
  },
  metaText: {
    fontSize: 13,
    marginTop: 4,
  },
  statsRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  statsText: {
    fontSize: 15,
  },
  mutedText: {
    fontSize: 15,
  },
  actionButton: {
    alignSelf: "flex-end",
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  actionButtonText: {
    fontSize: 14,
  },
});
