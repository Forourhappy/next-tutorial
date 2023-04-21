import React from 'react';
import classes from '@/styles/posts/all-posts.module.css'
import PostList from "@/components/posts/PostList";

const AllPosts = ({posts}) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostList postList={posts}/>
    </section>
  );
};

export default AllPosts;
