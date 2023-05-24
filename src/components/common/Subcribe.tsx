import React from "react";

const Subcribe = () => {
  return (
    <div className="container mx-auto py-20 bg-[#0C0122]">
      <div className="p-5">
        <h4 className="text-blue-500 text-xl font-bold">Newsletter</h4>
        <div className="flex">
          <div>
            <h2 className="text-5xl font-bold text-gray-200 mt-5">
              Let's Work Together
            </h2>
            <p className="text-gray-300 mt-5">
              Are you impressed and want a project done, give a call or email me
              any time.
            </p>
          </div>
          <div className="w-1/2 mt-5">
            <form action="">
              <input
                type="text"
                className="py-5 px-10 w-3/5 rounded-full ml-10 text-gray-900 text-xl"
                placeholder="Enter you email"
              />
              <button className="py-5 px-10 rounded-full text-gray-100 text-xl font-bold bg-blue-500 ml-10" type="submit">Subcribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcribe;
