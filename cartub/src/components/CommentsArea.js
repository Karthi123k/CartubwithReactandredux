import React, { useState } from 'react';
import user from './img/user.png';
const Comment = ({ author, text, replies }) => {
  const [showReplies, setShowReplies] = useState(false);

  const toggleReplies = () => {
    setShowReplies(!showReplies);
  };

  return (
  
    <div style={{marginLeft: '28px', padding: '10px',width:"96%", marginBottom: '10px'}}>
      <p> <div className="flex flex-wrap font-bold"> <img alt="user-info" className="h-4 my-1" src={user} />{author}</div></p>
      <p>{text}</p>
      {replies && (
        <button onClick={toggleReplies}>
          {showReplies ? '⬆️Hide Replies' : '⬇️Show Replies'}
        </button>
      )}
      {showReplies && replies && (
        <div>
          {replies.map((reply, index) => (
            <Comment key={index} {...reply} />
          ))}
        </div>
      )}
    </div>
  
  );
};

const CommentSection = () => {
  const comments = [
    {
      author: 'Karthik',
      text: 'Comment 1',
      replies: [
        {
          author: 'Sai',
          text: 'Reply to Comment 1',
          replies: [
            {
              author: 'Karthik',
              text: 'Reply to Reply 1',
              replies: null
            }
          ]
        }
      ]
    },
    {
      author: 'gani',
      text: 'Comment 2',
      replies: null
    }
  ];

  return (
    <div>
      {comments.map((comment, index) => (
        <Comment key={index} {...comment} />
      ))}
    </div>
  );
};

export default CommentSection;
