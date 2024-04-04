import React from 'react';
import { Link } from 'react-router-dom';
import { blogPostList } from '../../Blog/Post/blogPost.mock';

export default function PostLists() {
  return (
    <ul>
      {Object.entries(blogPostList).map(([slug, { title }]) => (
        <li key={slug}>
          <Link to={`/posts/${slug}`}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}
