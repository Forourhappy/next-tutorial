import React from 'react';
import Link from "next/link";
import Image from "next/image";

import classes from '@/styles/posts/post-item.module.css'
import {PostType} from "@/types/posts/postTypes";

type PostItemProps = {
  post: PostType
}
const PostItem = ({post}: PostItemProps) => {
  const {title, image, excerpt, date, slug} = post

  const formattedDate = new Date(date).toLocaleDateString('KR', {
    day: 'numeric',
    month: 'long',
    year: "numeric"
  });

  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `/posts/${slug}`

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <div className={classes.image}>
          <Image src={imagePath} alt={title} width={300} height={200} style={{display: "flex"}}/>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
