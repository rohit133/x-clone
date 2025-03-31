import React, { useState, useEffect } from "react";
import { TextInput, StyleSheet, View, useColorScheme } from "react-native";
import { SearchBorderIcon } from "@/lib/icon";
import Colors from "@/constants/Colors";

interface SearchBarProps {
  onDebouncedSearch: (query: string) => void;
  debounceTime?: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ onDebouncedSearch, debounceTime = 300 }) => {
  const [input, setInput] = useState("");
  const colorScheme = useColorScheme() ?? "light";
  const themeColors = Colors[colorScheme];

  useEffect(() => {
    const handler = setTimeout(() => {
      onDebouncedSearch(input);
    }, debounceTime);

    return () => clearTimeout(handler);
  }, [input, debounceTime, onDebouncedSearch]);

  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={[styles.searchBar, { borderColor: themeColors.text, color: themeColors.text }]}
        placeholder="Search messages..."
        placeholderTextColor={Colors.secondary_text_color}
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
