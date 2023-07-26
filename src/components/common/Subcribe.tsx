import { Button } from "../share/Button";

const Subcribe = () => {
  return (
    <div
      id="subscribe"
      className="px-1 sm:px-2 md:px-5 lg:px-14 xl:px-24 sm:py-20 py-10"
    >
      <div className="py-10">
        <h4 className="text-blue-500 text-md sm:text-xl font-bold">
          Newsletter
        </h4>
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-950 dark:text-gray-200 mt-5">
              Let's Work Together
            </h2>
            <p className=" text-gray-950 dark:text-gray-300 mt-5">
              Are you impressed and want a project done, give a call or email me
              any time.
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <form className="flex justify-between items-center gap-3">
              <input
                type="text"
                name="text"
                id="text"
                placeholder="Enter your email"
                className="p-3 rounded-lg w-full"
              />
              <Button text="Subcribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcribe;
