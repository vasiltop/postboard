import './Post.css';
import { type PostData } from '../../utils/types';
import { useState, useEffect } from 'react';
import Like from '../Like/Like';

export default function Post(post: PostData) {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(post.liked);
  const [date, setDate] = useState(post.date);
  async function handleLike(liked: boolean) {
    setLiked(liked);

    if (liked) {
      await fetch(`http://localhost:8000/api/posts/${post._id}/like`, {
        method: 'GET',
        headers: {
          'auth-token': localStorage.getItem('jwt')!,
        },
      });

      setLikes(likes + 1);
    } else {
      await fetch(`http://localhost:8000/api/posts/${post._id}/unlike`, {
        method: 'GET',
        headers: {
          'auth-token': localStorage.getItem('jwt')!,
        },
      });

      setLikes(likes - 1);
    }
  }

  useEffect(() => {
    const dateCreated = new Date(post.date);
    setDate(dateCreated.toDateString());
  }, []);

  return (
    <div id="post-container">
      <div id="post-header">
        <h4> {post.title} </h4>
        <a href={'/profile/' + post.userId}> @{post.userName} </a>
        <p> {date} </p>
      </div>

      <p> {post.content} </p>

      <div id="like-information">
        <Like liked={liked} likes={likes} onClick={handleLike} />
        <p> {likes} </p>
      </div>
    </div>
  );
}
