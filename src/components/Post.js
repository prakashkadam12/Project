import React, { useState } from 'react';
import { AiOutlineLike, AiOutlineDislike, AiOutlineComment, AiOutlineLink } from 'react-icons/ai';
import { FaShareSquare} from "react-icons/fa";
import { Link } from 'react-router-dom';

function Post({ post }) {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className='flex flex-col space-y-2 border border-black'>
      <div className='flex flex-row space-x-2'>
        <img src={post.userAvatar} alt='User Avatar' className='w-[30px] h-[30px]' />
        <p className='text-black'>{post.username}</p>
        <img src={post.teamAvatar} alt='Team Avatar' className='w-[30px] h-[30px]' />
        <p className='text-black'>{post.teamName}</p>
      </div>
      <div>
        <h3 className='text-black'>{post.title}</h3>
        <img src={post.image} alt='Post Image' loading='lazy' className='w-[360px] h-[140px] pl-1 pr-1' />
      </div>
      <p className='text-gray-600 text-sm'>
        {showFullText ? post.description : `${post.description.substring(0, 150)}...`}
        {post.description.length > 150 && (
          <button onClick={() => setShowFullText(!showFullText)} className='text-black'>
            {showFullText ? 'Show Less' : 'Show More'}
          </button>
        )}
      </p>
      <div className='flex flex-row text-black space-x-2'>
      <Link to="/login">
      <AiOutlineLike />
      </Link>
        <p>{post.likes}</p>
        <Link to="/login">
        <AiOutlineDislike />
        </Link>
        <p>{post.dislikes}</p>
        <Link to="/login">
        <AiOutlineComment />
        </Link>
        <p>{post.comments}</p>
        <AiOutlineLink />
        <Link to="/login">
        <FaShareSquare />
        </Link>
        <p>{post.shares}</p>
      </div>
    </div>
  );
}

export default Post;
