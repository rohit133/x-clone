import { useState } from "react";
export function useTweetComposer() {
  const [tweetContent, setTweetContent] = useState("");
  const [selectedMedia, setSelectedMedia] = useState<any>(null);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [isPosting, setIsPosting] = useState(false);

  const clearComposer = () => {
    setTweetContent("");
    setSelectedMedia(null);
    setSelectedLocation(null);
  };

  return {
    tweetContent,
    setTweetContent,
    selectedMedia,
    setSelectedMedia,
    selectedLocation,
    setSelectedLocation,
    isPosting,
    setIsPosting,
    clearComposer,
  };
}
