const Footer = () => {
  const date: Date= new Date();
  const getYear = date.getFullYear();

  return (
    <div className="container px-20 text-center pb-5 sm:pb-10">
      <span className="text-gray-950 dark:text-gray-100 text-md sm:text-xl font-medium">
        &copy; {getYear} All right reserved | Made with 💖 by Masud Rana
      </span>
    </div>
  );
};

export default Footer;
