import React, { useState } from 'react';
import Comment from './Comment';
import { CommentType } from './CommentType';
import Post from './Post';
import './styles.css';

export default function App() {
  const [comments, setComments] = useState<CommentType[]>([]);

  return (
    <div className="app">
      <h1>React Comment App</h1>
      <h3>Emily Kang Homework 5</h3>
      <Post setComments={setComments} />
      {comments.map((comment) => (
        <Comment
          key={`${comment.name}_${comment.content}`}
          comment={comment}
          setComments={setComments}
        />
      ))}
    </div>
  );
}