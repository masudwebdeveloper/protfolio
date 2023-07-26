const Footer = () => {
  const date: Date = new Date();
  const getYear = date.getFullYear();

  return (
    // this is the footer
    <div className="container px-1 sm:px-2 md:px-5 lg:px-14 xl:px-24 sm:mx-auto text-center pb-5 sm:pb-10">
      <span className="text-gray-950 dark:text-gray-100 text-md sm:text-xl font-medium">
        &copy; {getYear} All right reserved | Made with 💖 by Masud Rana
      </span>
    </div>
  );
};

export default Footer;
