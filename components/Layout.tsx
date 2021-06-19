import React, { Fragment } from "react";
import { HeaderNav } from "./HeaderNav";

export interface LayoutProps {
  beforeContainer?: React.ReactNode;
  beforeMain?: React.ReactNode;
  insideMain: React.ReactNode;
  afterMain?: React.ReactNode;
  afterContainer?: React.ReactNode;
}

export const Layout = (props: LayoutProps) => {
  return (
    <Fragment>
      <div className="relative mt-0 bg-white overflow-hidden">
        {props.beforeContainer}
        <div className="max-w-7xl mx-auto">
          <HeaderNav />
          {props.beforeMain}
          <main className="mt-0 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            {props.insideMain}
          </main>
          {props.afterMain}
        </div>
        {props.afterContainer}
      </div>
    </Fragment>
  );
};
