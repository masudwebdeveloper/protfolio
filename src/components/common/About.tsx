import aboutImage from "../../assets/images/mail-to-sms-compatible-toute-messagerie.svg";
import { TiChevronRightOutline } from "react-icons/ti";

const About = () => {
  return (
    <div id="about" className="flex flex-col-reverse sm:flex-row gap-y-5 sm:px-20 sm:py-20 items-center py-4">
      <img src={aboutImage} className="w-full sm:w-2/5" alt="aboutIamge" />
      <div className="mx-5">
        <h4 className="text-blue-500 text-lg sm:text-2xl font-bold mb-4">
          About Me
        </h4>
        <h2 className="text-gray-950 dark:text-gray-200 text-xl sm:text-4xl font-normal uppercase">
          Why Hire me for your next Projects?
        </h2>
        <p className="text-gray-950 dark:text-gray-200 text-sm sm:text-xl mt-5">
          I'm 24 years old creative <strong>Web developer</strong> based in{" "}
          <a href="http://">
            <strong>front-end</strong>
          </a>{" "}
          specializing in User Interface Design and Development. I build clean,
          appealing, and functional interfaces which comply with the latest web
          standards🔥
        </p>
        <br />
        <p className="text-gray-950 dark:text-gray-200 text-sm sm:text-xl">
          I am currently complete web development from{" "}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <strong className="hover:text-blue-600">Programming Hero</strong>
          </a>{" "}
          Course. I'm React web developer passionate about open source.
        </p>
        <a
          href="https://drive.google.com/file/d/1CxzlmCRkpOFJf7w51dFG6ROXvRCyw5Oz/view?usp=drive_link"
          className="flex items-center w-[180px] bg-blue-500 hover:bg-blue-600 transition duration-150 px-5 sm:px-10 py-2 sm:py-4 rounded-full mt-4 sm:mt-10 text-xl sm:text-2xl font-normal sm:font-medium text-white group sm:w-[250px]"
          target="_blank"
        >
          Download cv
          <span>
            <TiChevronRightOutline className="inline-block ml-1 translate-x-0 group-hover:translate-x-2 transition-all duration-200"></TiChevronRightOutline>
          </span>
        </a>
      </div>
    </div>
  );
};

export default About;
