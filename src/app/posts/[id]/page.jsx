import Post from "@/app/components/Post";

async function getPost(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`);
    const data = await res.json();
    return data.data;
}

export default async function PostPage({params}) {
    const post = await getPost(params.id);
    // console.log(post)
    return (
        <div className="mt-8 max-w-4xl mx-auto">
            <h3 className="m-3">Posts - {post.id}</h3>
            <Post id={post.id} title={post.title} body={post.body} />
        </div>
    )
    
}