import React from "react";

const Posts = ({ posts, loading }) =>
{
    if(loading)
    {
        return <h1>Loading...</h1>
    }
    return (
        <ul className="list-group mb-4">
            { posts.map(posts => (
                <li key={posts.id} className='list-group-item'>{posts.title}</li>
            ))}
        </ul>
    );
}

export default Posts;