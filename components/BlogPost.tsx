import React from "react";

export interface BlogPostMeta {
  author: string;
  title: string;
}

interface BlogPostProps {
  meta: BlogPostMeta;
}

export const BlogPost: React.FC<BlogPostProps> = ({ meta, children }) => (
  <div>
    <h1>{meta.title}</h1>
    <h2>by {meta.author}</h2>
    {children}
  </div>
);
