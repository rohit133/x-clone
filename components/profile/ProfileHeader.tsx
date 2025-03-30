
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "@/constants/Colors";
import { User } from "@/types";

interface ProfileHeaderProps {
  user: User;
}

const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  const isCurrentUser = user.id === "u1"; // Replace with actual logged-in user logic

  return (
    <>
      {/* Banner */}
      <View style={styles.bannerContainer}>
        {user.bannerImage && <Image source={{ uri: user.bannerImage }} style={styles.bannerImage} />}
      </View>

      {/* Profile Info */}
      <View style={styles.profileInfoContainer}>
        <Image source={{ uri: user.profileImage }} style={styles.profileImage} />

        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionButtonText}>
            {isCurrentUser ? "Edit Profile" : "Follow"}
          </Text>
        </TouchableOpacity>

        {/* User Info */}
        <View style={styles.nameRow}>
            <Text style={styles.nameText}> {user?.fullname || ""}</Text> 
                {user?.verified && ( 
                    <TouchableOpacity style={styles.verifiedBadge}>
                    <Image source={require('@/assets/images/checkmark.png')} style={{ width: 14, height: 14 }} />
                    <Text style={styles.verifiedText}>Get verified</Text>
                </TouchableOpacity>
            )}
        </View>
        <Text style={styles.usernameText}>@{user.username}</Text>
      
        <Text style={styles.bioText}>{user.bio}</Text>
        <Text style={styles.metaText}>{user.location} | {user.joined}</Text>

        {/* Stats */}
        <View style={styles.statsRow}>
          <Text style={styles.statsText}>{user.following} <Text style={styles.mutedText}>Following</Text></Text>
          <Text style={[styles.statsText, { marginLeft: 15 }]}>{user.followers} <Text style={styles.mutedText}>Followers</Text></Text>
        </View>
      </View>
    </>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
    
    bannerContainer: { width: "100%", height: 120, backgroundColor: Colors.light.background },
    bannerImage: { width: "100%", height: "100%", resizeMode: "cover" },
    profileInfoContainer: { paddingHorizontal: 16, paddingBottom: 12 , paddingTop: 30},
    profileImage: { width: 80, height: 80, borderRadius: 40, borderWidth: 3, borderColor: "#000", position: "absolute", top: -40, left: 16 },
    nameRow: { flexDirection: "row", alignItems: "center", textAlign: "center", marginTop: 30,gap:10},
    verifiedBadge: {display: "flex",flexDirection: "row",borderWidth: 1, borderColor: "#888",borderRadius: 20,paddingVertical: 4,paddingHorizontal: 8,alignItems: "center",justifyContent: "center",},
	  verifiedContent: {flexDirection: "row",alignItems: "center",justifyContent: "center",},
    verifiedText: {textAlign: "center",color: Colors.main,fontSize: 10,fontWeight: "600",},
    nameText: { fontSize: 20, fontWeight: "bold", color: Colors.light.text },
    usernameText: { fontSize: 16, color: Colors.secondary_text_color, marginTop: 2 },
    bioText: { fontSize: 14, color: Colors.light.text, marginTop: 8 },
    metaText: { fontSize: 13, color: "#888", marginTop: 4 },
    statsRow: { flexDirection: "row", marginTop: 10 },
    statsText: { fontSize: 15, color: Colors.light.text },
    mutedText: { color: Colors.secondary_text_color },
    actionButton: { alignSelf: "flex-end", borderWidth: 1, borderColor: "#888", borderRadius: 20, paddingVertical: 4, paddingHorizontal: 10 },
    actionButtonText: { color: Colors.main, fontSize: 14 },
});
