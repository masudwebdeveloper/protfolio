import React, { useState } from "react";

const Footer = () => {
  const [date, setDate] = useState<Date>(new Date());
  const getYear = date.getFullYear();

  return (
    <div className="container mx-auto text-center pb-10">
      <span className="text-gray-950 dark:text-gray-100 text-xl font-medium">
        &copy; {getYear} All right reserved | Made with 💖 by Masud Rana
      </span>
    </div>
  );
};

export default Footer;
