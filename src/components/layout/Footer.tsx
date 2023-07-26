const Footer = () => {
  const date: Date = new Date();
  const getYear = date.getFullYear();

  return (
    <footer className="px-1 sm:px-2 md:px-5 lg:px-14 xl:px-24 py-5">
      <p className="text-gray-800 dark:text-gray-100 text-sm md:text-base text-center font-medium">
        All right reserved | &copy; {getYear} | Made with 💖 by Masud Rana
      </p>
    </footer>
  );
};

export default Footer;
