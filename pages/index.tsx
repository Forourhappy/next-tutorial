import React from 'react';
import Hero from "@/components/homePage/Hero";
import FeaturedPosts from "@/components/homePage/FeaturedPosts";
import {PostType} from "@/types/posts/postTypes";

type HomePageProps = {
  postList: PostType[]
}

const HomePage = ({postList}: HomePageProps) => {
  return (
    <div>
      <>
        <Hero/>
        <FeaturedPosts postList={postList}/>
      </>
    </div>
  );
};

export default HomePage;
