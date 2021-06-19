import React, { Fragment } from "react";
import { MobileButton } from "./MobileButton";
import { MobileNavContent } from "./MobileNavContent";

export const MobileNav = () => {
  const [mobileMenuOpen, toggleMobileMenuOpen] = React.useState(false);

  const openMobileMenu = () => {
    toggleMobileMenuOpen(true);
  };
  const closeMobileMenu = () => {
    toggleMobileMenuOpen(false);
  };

  return (
    <Fragment>
      <MobileButton
        screenReaderText="Open main menu"
        rootClassName="-mr-2 flex items-center md:hidden"
        iconPath={
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        }
        onClick={openMobileMenu}
      />
      <MobileNavContent
        open={mobileMenuOpen}
        closeButton={
          <MobileButton
            screenReaderText="Close main menu"
            rootClassName="-mr-2"
            iconPath={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            }
            onClick={closeMobileMenu}
          />
        }
      />
    </Fragment>
  );
};
