import Post from "./Post";

function Posts() {
  const sampleData = [
    {
      id: "123",
      username: "Sample User",
      userImage: "https://links.papareact.com/3ke",
    },
  ];
  return (
    <div>
      <Post />
    </div>
  );
}

export default Posts;
