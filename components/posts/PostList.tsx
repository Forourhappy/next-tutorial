import React from 'react';
import PostItem from "@/components/posts/PostItem";
import classes from '@/styles/posts/posts-grid.module.css'
import {PostType} from "@/types/posts/postTypes";

type PostListProps = {
  postList: PostType[]
}
const PostList = ({postList}: PostListProps) => {

  return (
    <ul className={classes.grid}>
      {postList.map(post => <PostItem key={post.slug} post={post}/>)}
    </ul>
  );
};

export default PostList;
