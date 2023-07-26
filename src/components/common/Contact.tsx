/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from "react";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { Button } from "../share/Button";

const Contact = () => {
  const form: any = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();
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
            e.target.reset();
          }
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className="px-1 sm:px-2 md:px-5 lg:px-14 xl:px-24 sm:py-20 py-5"
    >
      <div className="py-2 sm:py-0 sm:pb-16 text-center">
        <h2 className="uppercase text-base md:text-xl text-gray-500 dark:text-gray-200">
          I want to Hear From you
        </h2>
        <h1 className="uppercase text-lg md:text-2xl font-semibold text-blue-600">
          Contact me
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:p-0">
        <div>
          <div className="flex items-center gap-x-5 sm:gap-x-10">
            <div className="w-8 md:w-10 h-8 md:h-10 bg-gray-300 flex items-center justify-center rounded-full">
              <BiPhone className="w-6 h-6 text-[#182F51]" />
            </div>
            <div>
              <h3 className="text-sm md:text-xl font-semibold text-gray-500 dark:text-gray-200">
                Call me:
              </h3>
              <p className="text-sm md:text-xl font-semibold text-gray-500 dark:text-gray-200">
                +88 01796-682951
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-5 sm:gap-x-10 my-5">
            <div className="w-8 md:w-10 h-8 md:h-10 bg-gray-300 flex items-center justify-center rounded-full">
              <AiOutlineMail className="w-6 h-6 text-[#000000]" />
            </div>
            <div>
              <h3 className="text-sm md:text-xl font-semibold text-gray-500 dark:text-gray-200">
                Email me:
              </h3>
              <p className="text-sm md:text-xl font-semibold text-gray-500 dark:text-gray-200">
                abdullainfo30@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-5 sm:gap-x-10">
            <div className="w-8 md:w-10 h-8 md:h-10 bg-gray-300 flex items-center justify-center rounded-full">
              <MdLocationOn className="w-6 h-6 text-[#F10000]" />
            </div>
            <div>
              <h3 className="text-sm md:text-xl font-semibold text-gray-500 dark:text-gray-200">
                Location:
              </h3>
              <p className="text-sm md:text-xl font-semibold text-gray-500 dark:text-gray-200">
                Natore, Bangladesh.
              </p>
            </div>
          </div>
        </div>
        <div>
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 md:gap-2">
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                placeholder="Your Name"
                className="bg-gray-200 px-4 py-2 dark:bg-[#14143A] rounded-md text-gray-950 dark:text-gray-100 w-full"
              />
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="your email"
                className="bg-gray-200 px-4 py-2 dark:bg-[#14143A] rounded-md text-gray-950 dark:text-gray-100 w-full"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="your subject"
              className="bg-gray-200 px-4 py-2 dark:bg-[#14143A] rounded-md text-gray-950 dark:text-gray-100 flex-grow"
            />
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={5}
              className="bg-gray-200 px-4 py-2 dark:bg-[#14143A] rounded-md text-gray-950 dark:text-gray-100 mb-2 flex-grow"
              placeholder="message"
              required
            ></textarea>
            <Button text="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
