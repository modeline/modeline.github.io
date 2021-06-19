import { MobileNav } from "./HeaderNav/MobileNav";
import { DesktopNav } from "./HeaderNav/DesktopNav";
import Link from "next/link";

export const HeaderNav = ({}) => {
  return (
    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
      <nav
        className="relative flex items-center justify-between sm:h-10 lg:justify-start"
        aria-label="Global"
      >
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <a href="#" className="font-medium text-gray-900">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="modeline-logo.svg"
                  alt=""
                />
              </a>
            </Link>
          </div>
        </div>
        <MobileNav />
        <DesktopNav />
      </nav>
    </div>
  );
};
