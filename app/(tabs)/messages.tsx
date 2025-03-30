import { messages } from "@/assets/data/DirectMessages";
import DirectMessages from "@/components/ChatList/DirectMessages";
import SearchBar from "@/components/Ui/SearchBar";
import Colors from "@/constants/Colors";
import React, { useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";


export default function MessagesTab() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter messages based on search query (by name, handle, or message)
  const filteredMessages = messages.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.handle.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.message.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <SearchBar onDebouncedSearch={setSearchQuery} debounceTime={300} />
      {filteredMessages.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No Result Found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredMessages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DirectMessages
              name={item.name}
              handle={item.handle}
              date={item.date}
              message={item.message}
              // Optionally pass an avatarUrl if available
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 18,
    color: Colors.main,
  },
});
