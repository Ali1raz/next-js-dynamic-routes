import Post from "../components/Post";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();
  return data.data;
}

export default async function Posts() {
  const posts = await getPosts();
  // console.log(posts);
  return (
    <div className="mt-8 max-w-4xl mx-auto">
      <h3 className="m-3">Posts</h3>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            id={post.id}
            body={post.body}
            title={post.title}
          />
        );
      })}
    </div>
  );
}
