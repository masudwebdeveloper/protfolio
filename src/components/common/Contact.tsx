import { useRef, useState } from "react";
import { BiPhone } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [verified, setVerified] = useState<boolean>(false);
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

  const handleVerified = (value: any) => {
    console.log("varified value: ", value);
    setVerified(true);
  };
  return (
    <div id="contact" className="container sm:px-20 py-5 sm:py-12">
      <div className="py-2 sm:py-16 text-center">
        <h2 className="uppercase text-lg sm:text-2xl text-gray-950 dark:text-gray-200">
          I want to Hear From you
        </h2>
        <h1 className="uppercase text-3xl sm:text-5xl font-bold text-blue-600 sm:mt-3">
          Contact me
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-2 sm:p-0">
        <div>
          <div className="flex items-center gap-x-5 sm:gap-x-10">
            <div className="w-10 sm:w-16 h-10 sm:h-16 bg-gray-300 flex items-center justify-center rounded-full">
              <BiPhone className="text-xl sm:text-4xl text-[#182F51]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-3xl font-semibold text-gray-950 dark:text-gray-200">
                Call me:{" "}
              </h3>
              <p className="text-md sm:text-2xl font-semibold text-gray-950 dark:text-gray-200">
                +88 01796-682951
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-5 sm:gap-x-10 my-14">
            <div className="w-10 sm:w-16 h-10 sm:h-16 bg-gray-300 flex items-center justify-center rounded-full">
              <AiOutlineMail className="text-xl sm:text-4xl text-[#000000]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-3xl font-semibold text-gray-950 dark:text-gray-200">
                Email me:{" "}
              </h3>
              <p className="text-md sm:text-2xl font-semibold text-gray-950 dark:text-gray-200">
                abdullainfo30@gmail.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-5 sm:gap-x-10">
            <div className="w-10 sm:w-16 h-10 sm:h-16 bg-gray-300 flex items-center justify-center rounded-full">
              <MdLocationOn className="text-xl sm:text-4xl text-[#F10000]" />
            </div>
            <div>
              <h3 className="text-xl sm:text-3xl font-semibold text-gray-950 dark:text-gray-200">
                Location:{" "}
              </h3>
              <p className="text-md sm:text-2xl font-semibold text-gray-950 dark:text-gray-200">
                Natore, Bangladesh.
              </p>
            </div>
          </div>
        </div>
        <div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-y-2 sm:gap-y-5"
          >
            <div className="flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 sm:gap-5">
              <input
                type="text"
                name="user_name"
                id="user_name"
                required
                placeholder="Your Name"
                className="bg-gray-200 dark:bg-[#14143A] p-3 sm:p-5 rounded-md text-gray-950 dark:text-gray-100 text-md sm:text-xl flex-grow"
              />
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="your email"
                className="bg-gray-200 dark:bg-[#14143A] p-3 sm:p-5 rounded-md text-gray-950 dark:text-gray-100 text-md sm:text-xl flex-grow"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="your subject"
              className="bg-gray-200 dark:bg-[#14143A] p-3 sm:p-5 rounded-md text-gray-950 dark:text-gray-100 text-md sm:text-xl flex-grow"
            />
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={5}
              className="bg-gray-200 dark:bg-[#14143A] p-3 sm:p-5 rounded-md text-gray-950 dark:text-gray-100 text-md sm:text-xl mb-2 sm:mb-0 flex-grow"
              placeholder="message"
              required
            ></textarea>
            <div className="flex flex-col sm:flex-row justify-between">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={handleVerified}
              />
              <button
                disabled={!verified}
                className={`sm:mt-3 py-2 sm:py-3 w-[100px] sm:w-[150px] dark:hover:bg-[#017AF4] transition duration-150 dark:text-[#017AF4] bg-gray-200 dark:hover:text-gray-50 rounded-full hover:bg-blue-500 hover:text-gray-50 dark:bg-[#14143A] text-xl sm:text-2xl font-medium sm:-pt-2 ${
                  !verified && "cursor-not-allowed"
                }`}
                type="submit"
              >
                {isLoading ? "sending..." : "send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
