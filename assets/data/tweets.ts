const tweets = [
  {
    id: "t0",
    user: {
      id: "u1",
      username: "rohityou000",
      fullname: "Rohit",
      image:
        "https://pbs.twimg.com/profile_images/1789250096116494336/eFiEjb9c_400x400.jpg",
    },
    createdAt: "2020-08-27T12:00:00.000Z",
    content: "Can you please check if the Subscribe button on Youtube works?",
    image:
      "https://images.unsplash.com/photo-1742077414023-45a81fd63736?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
    thread: [
      {
        id: "t0_r1",
        user: {
          id: "u2",
          username: "JohnDoe",
          fullname: "John",
          image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/john.png",
        },
        createdAt: "2020-08-27T12:05:00.000Z",
        content: "I checked it and it works perfectly!",
        numberOfComments: 0,
        numberOfRetweets: 2,
        numberOfLikes: 5,
      },
    ],
  },
  {
    id: "111111111",
    createdAt: "2023-04-28T08:30:00.000Z",
    user: {
      id: "123456789",
      fullname: "Jeff B",
      username: "bezos",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg",
    },
    content:
      "Just had a great workout at the gym! 💪 #fitness #healthylifestyle",
    numberOfComments: 2,
    numberOfRetweets: 5,
    numberOfLikes: 25,
    impressions: 500,
    thread: [
      {
        id: "t0_r1",
        user: {
          id: "u2",
          username: "JohnDoe",
          fullname: "John",
          image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/john.png",
        },
        createdAt: "2020-08-27T12:05:00.000Z",
        content: "I checked it and it works perfectly!",
        numberOfComments: 0,
        numberOfRetweets: 2,
        numberOfLikes: 5,
      },
      {
        id: "t0_r2",
        user: {
          id: "u3",
          username: "rohit.dev",
          fullname: "Rohit",
          image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/john.png",
        },
        createdAt: "2020-08-27T12:05:00.000Z",
        content: "I checked it and it works perfectly!",
        numberOfComments: 0,
        numberOfRetweets: 2,
        numberOfLikes: 5,
      },
    ],
  },
  {
    id: "222222222",
    createdAt: "2023-04-27T19:45:00.000Z",
    user: {
      id: "987654321",
      fullname: "Zuck",
      username: "zuck",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
    },
    content: "Had an amazing surf session this morning",
    image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/8.jpg",
    numberOfComments: 10,
    numberOfRetweets: 20,
    numberOfLikes: 100,
    impressions: 1000,
    thread: [
      {
        id: "t0_r1",
        user: {
          id: "u2",
          username: "JohnDoe",
          fullname: "John",
          image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/john.png",
        },
        createdAt: "2020-08-27T12:05:00.000Z",
        content: "I checked it and it works perfectly!",
        numberOfComments: 0,
        numberOfRetweets: 2,
        numberOfLikes: 5,
      },
    ],
  },
  {
    id: "333333333",
    createdAt: "2023-04-26T12:00:00.000Z",
    user: {
      id: "123456789",
      fullname: "Jane Smith",
      username: "janesmith",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/6.png",
    },
    content:
      "Excited to announce that I will be speaking at the upcoming tech conference in San Francisco! 🎉 #womenintech",
    numberOfComments: 5,
    numberOfRetweets: 10,
    numberOfLikes: 50,
    impressions: 1000,
    thread: [
      {
        id: "t0_r1",
        user: {
          id: "u2",
          username: "JohnDoe",
          fullname: "John",
          image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/john.png",
        },
        createdAt: "2020-08-27T12:05:00.000Z",
        content: "I checked it and it works perfectly!",
        numberOfComments: 0,
        numberOfRetweets: 2,
        numberOfLikes: 5,
      },
    ],
  },
  {
    id: "t1",
    user: {
      id: "u1",
      username: "rohityou000",
      fullname: "Rohit",
      image:
        "https://pbs.twimg.com/profile_images/1789250096116494336/eFiEjb9c_400x400.jpg",
    },
    createdAt: "2020-08-27T12:00:00.000Z",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    image:
      "https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg",
    numberOfComments: 123,
    numberOfRetweets: 11,
    numberOfLikes: 10,
    thread: [
      {
        id: "t0_r1",
        user: {
          id: "u2",
          username: "JohnDoe",
          fullname: "John",
          image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/john.png",
        },
        createdAt: "2020-08-27T12:05:00.000Z",
        content: "I checked it and it works perfectly!",
        numberOfComments: 0,
        numberOfRetweets: 2,
        numberOfLikes: 5,
      },
    ],
  },
  {
    id: "t2",
    user: {
      id: "u1",
      username: "rohityou000",
      fullname: "Rohit",
      image:
        "https://pbs.twimg.com/profile_images/1789250096116494336/eFiEjb9c_400x400.jpg",
    },
    createdAt: "2020-08-27T12:00:00.000Z",
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
    thread: [
      {
        id: "t0_r1",
        user: {
          id: "u2",
          username: "JohnDoe",
          fullname: "John",
          image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/john.png",
        },
        createdAt: "2020-08-27T12:05:00.000Z",
        content: "I checked it and it works perfectly!",
        numberOfComments: 0,
        numberOfRetweets: 2,
        numberOfLikes: 5,
      },
    ],
  },
  {
    id: "t3",
    user: {
      id: "u1",
      username: "rohityou000",
      fullname: "Rohit",
      image:
        "https://pbs.twimg.com/profile_images/1789250096116494336/eFiEjb9c_400x400.jpg",
    },
    createdAt: "2020-08-27T12:00:00.000Z",
    content: "Hello World",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
    thread: [
      {
        id: "t0_r1",
        user: {
          id: "u2",
          username: "JohnDoe",
          fullname: "John",
          image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/john.png",
        },
        createdAt: "2020-08-27T12:05:00.000Z",
        content: "I checked it and it works perfectly!",
        numberOfComments: 0,
        numberOfRetweets: 2,
        numberOfLikes: 5,
      },
    ],
  },
  {
    id: "t4",
    user: {
      id: "u1",
      username: "rohityou000",
      fullname: "Rohit",
      image:
        "https://pbs.twimg.com/profile_images/1789250096116494336/eFiEjb9c_400x400.jpg",
    },
    createdAt: "2020-08-27T12:00:00.000Z",
    content:
      "Hey Hey Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    numberOfComments: 4,
    numberOfRetweets: 11,
    numberOfLikes: 99,
    thread: [
      {
        id: "t0_r1",
        user: {
          id: "u2",
          username: "JohnDoe",
          fullname: "John",
          image:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/john.png",
        },
        createdAt: "2020-08-27T12:05:00.000Z",
        content: "I checked it and it works perfectly!",
        numberOfComments: 0,
        numberOfRetweets: 2,
        numberOfLikes: 5,
      },
    ],
  },
];

export default tweets;
