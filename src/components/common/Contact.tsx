import React from "react";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn} from "react-icons/md";

const Contact = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="py-16 text-center">
        <h2 className="uppercase text-2xl text-gray-950 dark:text-gray-200">
          I want to Hear From you
        </h2>
        <h1 className="uppercase text-5xl text-blue-600 mt-3">Contact me</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-x-10">
            <div className="w-16 h-16 bg-gray-300 flex items-center justify-center rounded-full">
              <BiPhone className="text-4xl text-[#182F51]" />
            </div>
            <div>
                <h3 className="text-3xl font-semibold text-gray-950 dark:text-gray-200">Call me: </h3>
                <p className="text-2xl font-semibold text-gray-950 dark:text-gray-200">+88 01796-682951</p>
            </div>
          </div>
          <div className="flex items-center gap-x-10 my-14">
            <div className="w-16 h-16 bg-gray-300 flex items-center justify-center rounded-full">
              <AiOutlineMail className="text-4xl text-[#000000]" />
            </div>
            <div>
                <h3 className="text-3xl font-semibold text-gray-950 dark:text-gray-200">Email me: </h3>
                <p className="text-2xl font-semibold text-gray-950 dark:text-gray-200">abdullainfo30@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-x-10">
            <div className="w-16 h-16 bg-gray-300 flex items-center justify-center rounded-full">
              <MdLocationOn className="text-4xl text-[#F10000]" />
            </div>
            <div>
                <h3 className="text-3xl font-semibold text-gray-950 dark:text-gray-200">Location: </h3>
                <p className="text-2xl font-semibold text-gray-950 dark:text-gray-200">Natore, Bangladesh.</p>
            </div>
          </div>
        </div>
        <div>
            <form action="" className="flex flex-col gap-y-5">
                <div className="flex gap-x-5">
                    <input type="text" name="name" id="name" placeholder="Your Name" className="bg-gray-200 dark:bg-[#14143A] p-5 rounded-md text-gray-950 dark:text-gray-100 text-xl flex-grow" />
                    <input type="email" name="email" id="email" placeholder="your email" className="bg-gray-200 dark:bg-[#14143A] p-5 rounded-md text-gray-950 dark:text-gray-100 text-xl flex-grow" required />
                </div>
                <input type="text" name="subject" id="subject" placeholder="your subject" className="bg-gray-200 dark:bg-[#14143A] p-5 rounded-md text-gray-950 dark:text-gray-100 text-xl flex-grow" />
                <textarea name="description" id="description" cols={30} rows={5} className="bg-gray-200 dark:bg-[#14143A] p-5 rounded-md text-gray-950 dark:text-gray-100 text-xl flex-grow" placeholder="message"></textarea>
                <button className="py-5 px-10 hover:bg-blue-600 transition duration-150 text-gray-100 rounded-full bg-blue-500 text-2xl font-semibold" type="submit">
                    send
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
