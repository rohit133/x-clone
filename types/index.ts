export type User = {
    id: string;
    fullname: string;
    username: string;
    image?: string;
  };
  
  export type Tweet = {
    id: string;
    user: User;
    createdAt: string;
    content: string;
    image?: string;
    numberOfComments: number;
    numberOfRetweets: number;
    numberOfLikes: number;
    impressions?: number;
    // Optional properties for thread handling
    is_thread?: boolean;
    is_thread_start?: boolean;
    is_thread_end?: boolean;
    // Update thread property to support an array of Tweet replies
    thread?: Tweet[];
  };
  