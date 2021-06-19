import React from "react";
import Link from "next/link";

export const DesktopNav = ({}) => {
  return (
    <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
      <Link href="/benchmark">
        <a className="font-medium text-gray-500 hover:text-gray-900">
          Benchmark
        </a>
      </Link>

      <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
        Blog
      </a>

      <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
        Team
      </a>

      <a href="#" className="font-medium text-primary-dark hover:text-primary">
        Get started
      </a>
    </div>
  );
};
