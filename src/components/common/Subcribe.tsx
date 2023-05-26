const Subcribe = () => {
  return (
    <div id="subscribe" className="container sm:px-20 py-10 sm:py-20 bg-gray-200 dark:bg-[#0C0122]">
      <div className="p-5">
        <h4 className="text-blue-500 text-md sm:text-xl font-bold">
          Newsletter
        </h4>
        <div className="flex flex-col sm:flex-row">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-950 dark:text-gray-200 mt-5">
              Let's Work Together
            </h2>
            <p className=" text-gray-950 dark:text-gray-300 mt-5">
              Are you impressed and want a project done, give a call or email me
              any time.
            </p>
          </div>
          <div className="w-full sm:w-1/2 mt-5">
            <form action="">
              <input
                type="text"
                className="py-3 sm:py-5 px-4 sm:px-10 w-full sm:w-3/5 rounded-full sm:ml-10 text-gray-900 text-md sm:text-xl"
                placeholder="Enter you email"
              />
              <button
                className="py-2 sm:py-5 px-6 sm:px-10 mt-5 hover:bg-blue-600 transition duration-150 rounded-full text-gray-100 text-xl font-bold bg-blue-500 sm:ml-10"
                type="submit"
              >
                Subcribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcribe;
