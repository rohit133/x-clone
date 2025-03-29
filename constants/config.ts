import type { Tweet, User } from "../types";

export const tmpUsers: User[] = [
  {
    id: 1,
    fullname: "Dio Brando",
    username: "diobrando",
    image: "../assets/images/users/its_was_me_dio.jpeg",
  },
];

export const tmp_tweet: Tweet = {
  id: "1",
  user: tmpUsers[0],
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorum debitis libero deleniti quibusdam consequuntur accusamus rerum enim saepe temporibus nulla quam, quae molestiae nisi, perspiciatis ea esse tenetur illo.",
  createdAt: "",
  image: "",
  quote_count: 5,
  reply_count: 5,
  favorite_count: 5,
  favorited: false,
  also_liked: [tmpUsers[0], tmpUsers[0]],
  also_retweeted: tmpUsers[0],
};

export const tmp_tweets: Tweet[] = Array.from({ length: 20 }).map((e, i) => ({
  ...tmp_tweet,
  id: i + 1 + "",
}));
