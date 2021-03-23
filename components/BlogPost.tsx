import React from "react";

export interface BlogPostMeta {
  author: string;
  title: string;
}

interface BlogPostProps {
  meta: BlogPostMeta;
}

export const BlogPost: React.FC<BlogPostProps> = ({meta}) => (
  <div className="lg:flex lg:items-center lg:justify-between">
    <div className="flex-1 min-w-0">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
        {meta.title}
      </h2>
      <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
        <div className="mt-2 flex items-center text-sm text-gray-500">
          <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
          </svg>
          by {meta.author}
        </div>
      </div>
    </div>
  </div>
);
