import TrendingList from "@/components/Search/TrendingList";
import SearchBar from "@/components/Ui/SearchBar";
import WhoToFollow from "@/components/Search/WhoToFollow";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, SectionList, Text } from "react-native";
import SearchResults from "@/components/Search/SearchResults";

export default function SearchTab() {
  const [query, setQuery] = useState("");

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    console.log("searching:", searchQuery);
  };

  // Render the SearchBar as a header above the content
  const renderHeader = () => (
    <View style={styles.searchbar}>
      <SearchBar onDebouncedSearch={handleSearch} debounceTime={300} />
    </View>
  );

  if (query.trim().length > 0) {
    // When there's a search query, render the search results.
    return (
      <SafeAreaView style={styles.container}>
        {renderHeader()}
        <SearchResults query={query} />
      </SafeAreaView>
    );
  } else {
    // When there's no search query, use a SectionList to display TrendingList and WhoToFollow.
    const sections = [
      { title: "Trending", data: ["trending"] },
      { title: "Who to Follow", data: ["who"] },
    ];

    return (
      <SafeAreaView style={styles.container}>
        {renderHeader()}
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => item + index}
          renderItem={({ section }) => {
            if (section.title === "Trending") {
              return <TrendingList />;
            } else if (section.title === "Who to Follow") {
              return <WhoToFollow />;
            }
            return null;
          }}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
          contentContainerStyle={styles.listContainer}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchbar: {
    paddingVertical: 10,
    paddingHorizontal: 9,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 10,
  },
  listContainer: {
    paddingBottom: 20,
  },
});
