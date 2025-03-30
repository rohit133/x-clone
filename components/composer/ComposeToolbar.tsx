import React from "react";
import { View, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Entypo, Feather, FontAwesome, MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";

type ComposeToolbarProps = {
  onMediaSelected: (media: any) => void;
  onEmojiSelected: (emoji: string) => void;
  onLocationSelected: (location: any) => void;
};

const ComposeToolbar = ({
  onMediaSelected,
  onEmojiSelected,
  onLocationSelected,
}: ComposeToolbarProps) => {
  const handlePickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission required", "Permission to access images is required!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      // Pass the first selected asset
      onMediaSelected(result.assets[0]);
    } else {
      Alert.alert("No image selected", "You did not select any image.");
    }
  };

  const handlePickVideo = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission required", "Permission to access videos is required!");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      onMediaSelected(result.assets[0]);
    } else {
      Alert.alert("No video selected", "You did not select any video.");
    }
  };

  const handleAddGIF = async () => {
    // GIF selection usually involves a dedicated API.
    // For demonstration, simulate GIF selection.
    const gifData = { type: "gif", uri: "https://media.giphy.com/media/your-gif-url" };
    onMediaSelected(gifData);
  };

  const handleCreatePoll = () => {
    console.log("Create poll");
  };

  const handleAddEmoji = () => {
    onEmojiSelected("😊");
  };

  const handleAddLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission required", "Permission to access location was denied");
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    onLocationSelected(location);
  };

  return (
    <View style={styles.toolbarContainer}>
      <TouchableOpacity onPress={handlePickImage}>
        <Feather name="image" size={24} color="#1DA1F2" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePickVideo}>
        <FontAwesome name="file-movie-o" size={24} color="#1DA1F2" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAddGIF}>
        <MaterialIcons name="poll" size={24} color="#1DA1F2" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAddEmoji}>
        <Entypo name="emoji-happy" size={24} color="#1DA1F2" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAddLocation}>
        <Entypo name="location-pin" size={24} color="#1DA1F2" />
      </TouchableOpacity>
    </View>
  );
};

export default ComposeToolbar;

const styles = StyleSheet.create({
  toolbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
    marginTop: 10,
    marginBottom: 20,
  },
});
  