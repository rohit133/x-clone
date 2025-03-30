import { View, Text, FlatList, StyleSheet } from "react-native";
import users from "@/assets/data/users";
import { trendingData } from "@/assets/data/TrendingList";

export default function SearchResults({ query }: { query: string }) {
    const filteredUsers = users.filter(
      (user) =>
        user.fullname.toLowerCase().includes(query.toLowerCase()) ||
        user.username.toLowerCase().includes(query.toLowerCase())
    );
  
    const filteredTrending = trendingData.filter((trend) =>
      trend.topic.toLowerCase().includes(query.toLowerCase())
    );
  
    if (filteredUsers.length === 0 && filteredTrending.length === 0) {
      return (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No results found</Text>
        </View>
      );
    }
  
    return (
      <View style={styles.resultsContainer}>
        {filteredUsers.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Users</Text>
            <FlatList
              data={filteredUsers}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.resultItem}>
                  <Text style={styles.resultText}>
                    {item.fullname} {item.username}
                  </Text>
                </View>
              )}
            />
          </View>
        )}
        {filteredTrending.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Trending</Text>
            <FlatList
              data={filteredTrending}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.resultItem}>
                  <Text style={styles.resultText}>
                    {item.topic} - {item.postsCount} tweets
                  </Text>
                </View>
              )}
            />
          </View>
        )}
      </View>
    );
  }

  const styles = StyleSheet.create({

    emptyContainer: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
    },
    emptyText: {
      fontSize: 18,
      color: "gray",
    },
    resultsContainer: {
      paddingHorizontal: 10,
    },
    section: {
      marginVertical: 10,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 5,
    },
    resultItem: {
      padding: 15,
      borderBottomWidth: 0.5,
      borderColor: "#ccc",
    },
    resultText: {
      fontSize: 16,
    },
  });