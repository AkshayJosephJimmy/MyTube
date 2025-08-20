
// src/components/CommentSection.jsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function CommentSection({ videoId }) {
  const [comments, setComments] = useState([]);
  const [content, setContent] = useState('');
  const { token,  user,isSignedIn } = useSelector((state) => state.auth);

  const fetchComments = async () => {
    const res = await fetch(`/api/comments/${videoId}`);
    const data = await res.json();
    if (res.ok) setComments(data.comments);
  };

  useEffect(() => {
    fetchComments();
  }, [videoId]);

  const handleAddComment = async () => {
    if (!content.trim()) return;

    const res = await fetch(`http://localhost:5050/api/comments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
        
      },
      body: JSON.stringify({ videoId, content })
    });

    const data = await res.json();
    if (res.ok) {
      setComments([data.comment, ...comments]);
      setContent('');
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Comments</h3>

      
        <div className="mb-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full border rounded p-2 mb-2"
            placeholder="Write a comment..."
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Post
          </button>
        </div>
      

      <div className="space-y-4">
        {comments.map((c) => (
          <div key={c._id} className="p-2 border-b">
            <p className="text-sm font-semibold">{c.user?.username || 'Anonymous'}</p>
            <p>{c.content}</p>
            <p className="text-xs text-gray-500">{new Date(c.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;