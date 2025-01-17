'use client'

import { useRouter } from "next/navigation"
export default function PostButton ({id}) {

    const router = useRouter();

    function handleClick() {
        router.push(`/posts/${id}`)
    }

    return (
        <div>
            <button className="bg-[#ceff1a] text-black text-sm hover:scale-105 active:bg-[#cdff1ad1] transition-all duration-75 px-2 py-1" onClick={handleClick}>See details</button>
        </div>
    )
}