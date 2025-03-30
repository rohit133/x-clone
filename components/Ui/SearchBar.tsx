import { SearchBorderIcon } from "@/lib/icon";
import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View } from "react-native";

interface SearchBarProps {
  onDebouncedSearch: (query: string) => void;
  debounceTime?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ onDebouncedSearch, debounceTime = 300 }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      onDebouncedSearch(input);
    }, debounceTime);

    return () => clearTimeout(handler);
  }, [input, debounceTime, onDebouncedSearch]);

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search messages..."
        value={input}
        onChangeText={setInput}
      />
      <View style={styles.iconContainer}>
        <SearchBorderIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    position: "relative",
    marginBottom: 10,
  },
  searchBar: {
    height: 60,
    borderColor: "#ccc",
    borderWidth: 0.5,
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingRight: 50, // extra padding to avoid text under icon
  },
  iconContainer: {
    position: "absolute",
    right: 20,
    top: 20, // adjust as needed for vertical centering
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchBar;
