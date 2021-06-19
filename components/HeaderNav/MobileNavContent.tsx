import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";

export interface MobileNavContentProps {
  open: boolean;
  closeButton: React.ReactNode;
}

export const MobileNavContent = ({ open, closeButton }) => {
  return (
    <Transition
      as={Fragment}
      show={open}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      {/* TODO: Make the mobile menu nicer: https://headlessui.dev/react/menu */}
      <div className="absolute top-0 right-0 origin-top-right inset-x-0 md:hidden">
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <img className="h-8 w-auto" src="modeline-logo.svg" alt="" />
            </div>
            {closeButton}
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/benchmark">
              <a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                Benchmark
              </a>
            </Link>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Blog
            </a>

            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Team
            </a>
          </div>
          <a
            href="#"
            className="block w-full px-5 py-3 text-center font-medium text-primary-dark bg-gray-50 hover:bg-gray-100"
          >
            Get started
          </a>
        </div>
      </div>
    </Transition>
  );
};
