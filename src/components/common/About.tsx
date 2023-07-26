import aboutImage from "../../assets/images/mail-to-sms-compatible-toute-messagerie.svg";
import { Button } from "../share/Button";

const About = () => {
  return (
    <div
      id="about"
      className="container flex flex-col-reverse sm:flex-row gap-y-5 px-1 sm:px-2 md:px-5 lg:px-14 xl:px-24 sm:py-20 items-center py-4"
    >
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
          </a>
          specializing in User Interface Design and Development. I build clean,
          appealing, and functional interfaces which comply with the latest web
          standards🔥
        </p>
        <br />
        <p className="text-gray-950 mb-5 dark:text-gray-200 text-sm sm:text-xl">
          I am currently complete web development from{" "}
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <strong className="hover:text-blue-600">Programming Hero</strong>
          </a>
          Course. I'm React web developer passionate about open source.
        </p>
        <Button
          text="Download cv"
          to="https://drive.google.com/file/d/1CxzlmCRkpOFJf7w51dFG6ROXvRCyw5Oz/view?usp=drive_link"
        />
      </div>
    </div>
  );
};

export default About;
