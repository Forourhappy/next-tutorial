import React from 'react';
import classes from '@/styles/homePage/featuredPosts.module.css'
import PostList from "@/components/posts/PostList";
import {PostType} from "@/types/posts/postTypes";

type FeaturedPostsProps = {
  postList: PostType[]
}

const FeaturedPosts = ({postList}: FeaturedPostsProps) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostList postList={postList}/>
    </section>
  );
};

export default FeaturedPosts;
