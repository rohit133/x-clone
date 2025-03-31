const users = [
  {
    id: "u1",
    fullname: "Rohit Sharma",
    username: "rohityou000",
    verified: true,
    postsCount: 142,
    bio: "Software Engineer | Full stack developer | Tail Tech | Freelancer",
    location: "West Bengal",
    joined: "Joined March 2015",
    following: 181,
    followers: 80,
    bannerImage:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    profileImage:
      "https://pbs.twimg.com/profile_images/1789250096116494336/eFiEjb9c_400x400.jpg",
  },
  {
    id: "u2",
    fullname: "John Doe",
    username: "john_doe",
    verified: false,
    postsCount: 98,
    bio: "Tech enthusiast. Blogger. Coffee addict.",
    location: "San Francisco, CA",
    joined: "Joined January 2020",
    following: 250,
    followers: 300,
    bannerImage:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    profileImage:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww",
  },
  {
    id: "u3",
    fullname: "Jane Smith",
    username: "janesmith",
    verified: true,
    postsCount: 210,
    bio: "Designer. Traveler. Food lover.",
    location: "New York, NY",
    joined: "Joined June 2018",
    following: 340,
    followers: 1020,
    bannerImage:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    profileImage:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jane.png",
  },
  {
    id: "u4",
    fullname: "Alice Johnson",
    username: "alicej",
    verified: false,
    postsCount: 75,
    bio: "Frontend developer and UI/UX enthusiast.",
    location: "Austin, TX",
    joined: "Joined September 2019",
    following: 150,
    followers: 210,
    bannerImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    profileImage:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/alice.png",
  },
  {
    id: "u5",
    fullname: "Michael Brown",
    username: "mikebrown",
    verified: true,
    postsCount: 315,
    bio: "Digital marketer, content creator and storyteller.",
    location: "Chicago, IL",
    joined: "Joined November 2017",
    following: 500,
    followers: 750,
    bannerImage:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    profileImage:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/michael.png",
  },
  {
    id: "u6",
    fullname: "Samantha Lee",
    username: "samanthalee",
    verified: true,
    postsCount: 189,
    bio: "Photographer | Nature lover | Explorer",
    location: "Seattle, WA",
    joined: "Joined April 2016",
    following: 275,
    followers: 950,
    bannerImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    profileImage:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/samantha.png",
  },
  {
    id: "u7",
    fullname: "David Kim",
    username: "davidkim",
    verified: false,
    postsCount: 120,
    bio: "Backend developer and data geek.",
    location: "Los Angeles, CA",
    joined: "Joined July 2020",
    following: 190,
    followers: 420,
    bannerImage:
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    profileImage:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/david.png",
  },
  // Dummy users from comments
  {
    id: "u8",
    fullname: "Alice Anderson",
    username: "alice",
    verified: true,
    postsCount: 10,
    bio: "Enthusiastic developer.",
    location: "Los Angeles, CA",
    joined: "Joined May 2021",
    following: 100,
    followers: 150,
    bannerImage:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    profileImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    id: "u9",
    fullname: "Bob Builder",
    username: "bob",
    verified: false,
    postsCount: 5,
    bio: "Just building stuff.",
    location: "Detroit, MI",
    joined: "Joined August 2022",
    following: 50,
    followers: 75,
    bannerImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    profileImage:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    id: "u10",
    fullname: "Charlie Chaplin",
    username: "charlie",
    verified: true,
    postsCount: 20,
    bio: "Silent comedian turned coder.",
    location: "London, UK",
    joined: "Joined January 2023",
    following: 80,
    followers: 200,
    bannerImage:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    profileImage:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  // Additional new users
  {
    id: "u11",
    fullname: "Emily Davis",
    username: "emilyd",
    verified: false,
    postsCount: 50,
    bio: "Writer and coder.",
    location: "Boston, MA",
    joined: "Joined February 2020",
    following: 120,
    followers: 300,
    bannerImage:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    profileImage:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
  {
    id: "u12",
    fullname: "Frank Miller",
    username: "frankm",
    verified: false,
    postsCount: 75,
    bio: "Graphic novelist and storyteller.",
    location: "San Diego, CA",
    joined: "Joined July 2019",
    following: 200,
    followers: 400,
    bannerImage:
      "https://images.unsplash.com/photo-1503264116251-35a269479413?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80",
    profileImage:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60",
  },
];

export default users;
