import Link from 'next/link'
import React from 'react'
import { redis } from '../libs/redis'

const page = async () => {
    const commentId = await redis.lrange('comments', 0, 3);

    const comments: any = await Promise.all(
        commentId.map(async (commentId) => {
            const details = await redis.hgetall(`comment_details:${commentId}`)
            const tags = await redis.smembers(`tags:${commentId}`)

            return {
                commentId,
                details,
                tags
            }
        })
    )
    console.log(comments);

    return (
        <div className='flex flex-col gap-8'>
            <Link href='/'>Homepage</Link>
            {comments.map((comment: any) => (
                <div className='flex flex-col gap-2' key={comment.details.author}>
                    <h1>{comment.details.author}</h1>
                    <p>{comment.details.text}</p>
                </div>
            ))}
        </div>
    )
}

export default page
