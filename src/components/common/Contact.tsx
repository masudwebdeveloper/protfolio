import React, { useRef, useState } from "react";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form: any = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_v7vmdpq",
        "template_sg87uc6",
        form.current,
        "AYoJPoUD5f98igdSt"
      )
      .then(
        (result: any) => {
          if (result.text === "OK") {
            setIsLoading(false);
            e.target.reset();
          }
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };
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
              <h3 className="text-3xl font-semibold text-gray-950 dark:text-gray-200">
                Call me:{" "}
              </h3>
              <p className="text-2xl font-semibold text-gray-950 dark:text-gray-200">
                +88 01796-682951
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-10 my-14">
            <div className="w-16 h-16 bg-gray-300 flex items-center justify-center rounded-full">
              <AiOutlineMail className="text-4xl text-[#000000]" />
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-gray-950 dark:text-gray-200">
                Email me:{" "}
              </h3>
              <p className="text-2xl font-semibold text-gray-950 dark:text-gray-200">
                abdullainfo30@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-10">
            <div className="w-16 h-16 bg-gray-300 flex items-center justify-center rounded-full">
              <MdLocationOn className="text-4xl text-[#F10000]" />
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-gray-950 dark:text-gray-200">
                Location:{" "}
              </h3>
              <p className="text-2xl font-semibold text-gray-950 dark:text-gray-200">
                Natore, Bangladesh.
              </p>
            </div>
          </div>
        </div>
        <div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-y-5"
          >
            <div className="flex gap-x-5">
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                placeholder="Your Name"
                className="bg-gray-200 dark:bg-[#14143A] p-5 rounded-md text-gray-950 dark:text-gray-100 text-xl flex-grow"
              />
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="your email"
                className="bg-gray-200 dark:bg-[#14143A] p-5 rounded-md text-gray-950 dark:text-gray-100 text-xl flex-grow"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="your subject"
              className="bg-gray-200 dark:bg-[#14143A] p-5 rounded-md text-gray-950 dark:text-gray-100 text-xl flex-grow"
            />
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={5}
              className="bg-gray-200 dark:bg-[#14143A] p-5 rounded-md text-gray-950 dark:text-gray-100 text-xl flex-grow"
              placeholder="message"
              required
            ></textarea>
            <button
              className="py-5 px-10 hover:bg-blue-600 transition duration-150 text-gray-100 rounded-full bg-blue-500 text-2xl font-semibold"
              type="submit"
            >
              {isLoading ? "sending..." : "send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
