import PostButton from "./PostButton";

export default function Post({ title, body, id }) {
    return (
        <div className="border-b-2 p-2 mb-3 bg-[#383d3b] grid grid-cols-8">
            <div className="col-span-1 mr-4 flex items-start justify-end"><span className="rounded-full h-12 w-12 bg-black"></span></div>
            <div className="col-span-7">
                <h3>{title}</h3>
                <p>{body}</p>
                <PostButton id={id} />
            </div>
        </div>
    )
}