import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-primary border-l-transparent border-r-transparent text-secondary dark:text-Twhite  dark:bg-primary-transpartnt">
      <div className="container p-12 mx-auto flex flex-col items-center text-center md:justify-between md:flex-row">
        <span className="mb-4 md:mb-0">LOGO</span>
        <p className="text-tertiary-800 font-semibold text-sm dark:text-Twhite">Copyright 2024 Ahmad Alghawi. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;