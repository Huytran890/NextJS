import { NextRequest } from 'next/server';
import { nanoid } from 'nanoid';
import { redis } from '@/app/libs/redis';
export const POST = async (req: NextRequest) => {
	try {
		const body = await req.json();
		const { text, tags } = body;

		const commentId = nanoid();

		// retrieve and store comment details
		// const comment = {
		// 	text,
		// 	tags,
		// 	author: req.cookies.get('userId')?.value,
		// 	timestamp: new Date(),
		// };

		//! comment lai lan 1
		// await Promise.all([
		// 	// add comment to list
		// 	redis.rpush('comments', commentId),

		// 	// add tags to comment
		// 	redis.sadd(`tags:${commentId}`, tags),

		// 	redis.hset(`comment_details:${commentId}`, comment),
		// ]);

		//! comment lai lan 2
		// await Promise.all([
		// 	redis.rpush('comments', commentId),
		// 	redis.json.set(`comment:${commentId}`, '$', comment),
		// ]);

		//! comment lai lan 3: change value in redis
		const comment = {
			text,
			tags,
			upVotes: 0,
			author: req.cookies.get('userId')?.value,
			timestamp: new Date(),
		};
		await redis.json.numincrby('comment:lMVUb98NU0L2N9QdcbI4x', '$.upVotes', 1);

		return new Response('oke');
	} catch (error) {
		console.log('<<== 🚀 error ==>>', error);
	}
};

//! Note: Redis lists
// LPUSH - adds a new element to the head of a list
// RPUSH - adds to the tail
// LPOP - removes and returns an element from the head of a list
// RPOP - does the same but from the tails of a list
// LLEN - returns the length of a list
// LMOVE - atomically moves elements from one list to another
// LTRIM - reduces a list to the specified range of elements

//! Note: Redis Set
// SADD - adds a new member to a set
// SREM - removes the specified member from the set
// SISMEMBER - tests a string for set membership
// SINTER - returns the set of members that two or more sets have in common (i.e., the intersection)
// SCARD - returns the size (a.k.a. cardinality) of a set

//! Note: Redis hash
// HSET - sets the value of one or more fields on a hash
// HGET - returns the value at a given field
// HGET ALL - returns all fields and values in a hash
// HMGET - returns the values at one or more given fields
// HINCRBY - increments the value at a given field by the integer provided

//! Note: Redis JSON
// SET - sets the value of a JSON element
// ARRAPPEND - appends an element to JSON array
// ARRINSERT - Inserts JSON values into a JSON array before the given index
// DEL - removes a JSON element
// NUMINCRBY - increments the number stored at path by the specified number
// NUMMULTBY - does the same, just multiplies it
// STRAPPEND - appends the given string to the specified key's existing strings
