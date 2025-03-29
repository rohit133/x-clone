import { Stack } from "expo-router";
import React, { useState } from "react";
import users from "@/assets/data/users";
import Colors from "@/constants/Colors";
import tweets from "@/assets/data/tweets";
import Tweet from "@/components/tweet/Tweet";
import PageView from "@/components/containers/PageView";
import TabMainHeader from "@/components/Ui/TabMainHeader";
import { View, Text, StyleSheet,Image,TouchableOpacity,SafeAreaView,
Dimensions,StatusBar, ScrollView, NativeSyntheticEvent, NativeScrollEvent} from "react-native";

const ProfileScreen = () => {
  const [selectedTab, setSelectedTab] = useState("Posts");
  const [headerTitle, setHeaderTitle] = useState("Profile");
	const userInfo = users.find((user) => user.id === 'u1');
	console.log(userInfo);
	const filteredTweets = tweets.filter((tweet) => tweet.user.id === 'u1');
	const TABS = ["Posts", "Media", "Likes"];
	
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const scrollY = event.nativeEvent.contentOffset.y;
    if (scrollY > 120) {
      setHeaderTitle(userInfo?.fullname || "Profile");
    } else {
      setHeaderTitle("Profile");
    }
  };
  
  return (
    <PageView>
        <Stack.Screen options={{ title: "Profile", header: () => (
          <TabMainHeader sides={{ left: "back", center: "title", right: "empty" }} options={{ title: headerTitle }}/>
				)}}/>
        <SafeAreaView style={styles.container}>
        	<StatusBar barStyle="light-content" />
					<ScrollView style={styles.scrollView} onScroll={handleScroll} scrollEventThrottle={16} > 
						{/* Banner Section */}
						<View style={styles.bannerContainer}> 
                {userInfo?.bannerImage && (
                  <Image source={{ uri: userInfo.bannerImage }} style={styles.bannerImage} />
                )}
						</View>

						{/* Profile Info Section */}
						<View style={styles.profileInfoContainer}>
								{/* Profile image overlapping the banner */}
                {userInfo?.profileImage && (
                  <Image source={{ uri: userInfo.profileImage }} style={styles.profileImage} />
                )}
								
								{/* Edit Profile Button */}
								<TouchableOpacity style={styles.editProfileButton}>
										<Text style={styles.editProfileText}>Edit profile</Text>
								</TouchableOpacity>
								
								{/* Name, userInfoname, and action buttons */}
								<View style={styles.nameRow}>
										<Text style={styles.nameText}>
                        {userInfo?.fullname || ""}
										</Text>
                    {userInfo?.verified && (
												<TouchableOpacity style={styles.verifiedBadge}>
														<Image source={require('@/assets/images/checkmark.png')} style={{ width: 14, height: 14}}/>
														<Text style={styles.verifiedText}>Get verified</Text>
												</TouchableOpacity>
										)}
								</View>

								<Text style={styles.usernameText}>@{userInfo?.username}</Text>
								<Text style={styles.bioText}>{userInfo?.bio}</Text>
								<Text style={styles.metaText}>
										{userInfo?.location} | {userInfo?.joined}
								</Text>
								
								{/* Stats */}
								<View style={styles.statsRow}>
								<Text style={styles.statsText}>
										{userInfo?.following} <Text style={styles.mutedText}>Following</Text>
								</Text>
								<Text style={[styles.statsText, { marginLeft: 15 }]}>
										{userInfo?.followers} <Text style={styles.mutedText}>Followers</Text>
								</Text>
								</View>
						</View>

						{/* Tab Menu */}
						<View style={styles.tabContainer}>
								{TABS.map((tab) => (
										<TouchableOpacity key={tab} style={[ styles.tabItem, selectedTab === tab && styles.activeTabItem,]} onPress={() => setSelectedTab(tab)}>
												<Text style={[ styles.tabItemText, selectedTab === tab && styles.activeTabItemText,]}>
														{tab}
												</Text>
										</TouchableOpacity>
								))}
						</View>

						{/* Posts List */}
						{filteredTweets.map((tweet) => (
							<Tweet key={tweet.id} tweet={{
								...tweet, user: { ...tweet.user, id: tweet.user.id, fullname: tweet.user.fullname ?? "", },
								thread: tweet.thread?.map((threadTweet) => ({
									...threadTweet, user: {
										...threadTweet.user,
										id: threadTweet.user.id,
									}
								}))
							}}
							/>
						))}
					</ScrollView> 
				</SafeAreaView>
    </PageView>

  );
};

export default ProfileScreen;
const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background, 
  },
  bannerContainer: {
    width: "100%",
    height: 120,
    backgroundColor: Colors.light.background,
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  profileInfoContainer: {
    backgroundColor: Colors.light.background,
    paddingHorizontal: 16,
    paddingBottom: 12,
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
    marginTop: 20, // 80 (image) - 40 overlap + some spacing
		gap:10
    // justifyContent: "space-between",
  },
  nameText: {
    color: Colors.light.text,
    fontSize: 20,
    fontWeight: "bold",
  },
	verifiedBadge: {
		display: "flex",
		flexDirection: "row",
		borderWidth: 1,
		borderColor: "#888",
		borderRadius: 20,
		paddingVertical: 4,
		paddingHorizontal: 8,
		alignItems: "center",
		justifyContent: "center",
	},
	verifiedContent: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	verifiedText: {
		textAlign: "center",
		color: Colors.main,
		fontSize: 10,
		fontWeight: "600",
	},
  usernameText: {
    color: Colors.secondary_text_color,
    fontSize: 16,
    marginTop: 2,
  },
  bioText: {
    color: Colors.light.text,
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
  },
  metaText: {
    color: Colors.secondary_text_color,
    fontSize: 13,
    marginTop: 4,
  },
  editProfileButton: {
    alignSelf: "flex-end",
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#888",
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  editProfileText: {
    color: Colors.secondary_text_color,
    fontSize: 14,
  },
  statsRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  statsText: {
    color: Colors.light.text,
    fontSize: 15,
  },
  mutedText: {
    color: Colors.secondary_text_color,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
    backgroundColor: Colors.light.background,
  },
  tabItem: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
  },
  tabItemText: {
    color: "#888",
    fontSize: 15,
    fontWeight: "500",
  },
  activeTabItem: {
    borderBottomWidth: 2,
    borderBottomColor: "#1DA1F2",
  },
  activeTabItemText: {
    color: Colors.main,
  },
  postsListContainer: {
    backgroundColor: "#000",
    paddingBottom: 80,
  },
  postItem: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#333",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  postDate: {
    color: "#888",
    fontSize: 13,
    marginBottom: 6,
  },
  postContent: {
    color: "#fff",
    fontSize: 15,
    marginBottom: 6,
  },
  postImage: {
    width: width - 32,
    height: 200,
    borderRadius: 8,
    resizeMode: "cover",
  },
  scrollView: {
    flex: 1,
  },
});
