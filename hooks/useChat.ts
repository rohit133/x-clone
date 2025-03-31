import { useState } from "react";
import { fetchChatResponse, cleanPrompt, generateId } from "../utils/chatApi";

export type ChatMessageType = {
  id: string;
  text: string;
  sender: "user" | "bot";
  imageUri?: string;
  animate?: boolean;
};

export const useChat = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessageType[]>([]);
  const [loadingResponse, setLoadingResponse] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const sendMessage = async () => {
    if (message.trim() === "" && !selectedMedia) return;

    const userMsg: ChatMessageType = {
      id: generateId(),
      text: message.trim(),
      sender: "user",
      imageUri: selectedMedia ? selectedMedia.uri : undefined,
    };

    // Add user's message
    setChatMessages((prev) => [...prev, userMsg]);
    setMessage("");
    
    // Check if an image is being sent
    if (selectedMedia) {
      // Reset the selected media
      setSelectedMedia(null);
      
      // Add a bot message indicating image support is not available yet
      const botMsg: ChatMessageType = {
        id: generateId(),
        text: "Images are not supported yet. Will update it soon with future updates.",
        sender: "bot",
      };
      setChatMessages((prev) => [...prev, botMsg]);
      return;
    }
    
    // Otherwise, proceed with API call
    setSelectedMedia(null);
    setLoadingResponse(true);
    try {
      const cleanedPrompt = cleanPrompt(userMsg.text);
      const responseText = await fetchChatResponse(cleanedPrompt);
      const botMsg: ChatMessageType = {
        id: generateId(),
        text: responseText,
        sender: "bot",
        animate: true,
      };
      setChatMessages((prev) => [...prev, botMsg]);
    } catch (error: any) {
      const errorMsg: ChatMessageType = {
        id: generateId(),
        text: error.message || "Sorry, something went wrong.",
        sender: "bot",
      };
      setChatMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoadingResponse(false);
    }
  };

  return {
    message,
    setMessage,
    chatMessages,
    loadingResponse,
    selectedMedia,
    setSelectedMedia,
    sendMessage,
  };
};
