import { Fragment } from "react";
import { HeaderNav } from "../components/HeaderNav";
import { Layout } from "../components/Layout";

export default function Home() {
  return (
    // Not using Layout here because of the complicated overlays masking the image
    <div className="relative mt-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* <HeaderNav /> */}
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <HeaderNav />
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Overlay that shapes the left edge of jumbo image on large desktops */}
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <main className="mt-0 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Deploy neural networks</span>
                <span className="block text-primary xl:inline"> instantly</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Computer vision pipelines for mobile, embedded or cloud
                deployments. Get started using our collection of pre-trained
                models or upload your own. No AI knowledge required.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-neutral hover:bg-neutral-dark md:py-4 md:text-lg md:px-10"
                  >
                    Watch the demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      // TODO: Swap this image to a more relevant one // TODO: Disable image for
      mobile devices (waste of space)
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt=""
        />
      </div>
    </div>
  );
}
