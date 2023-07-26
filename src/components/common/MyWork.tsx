import MyWorkCard from "../share/MyWorkCard";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
export interface IMyWork {
  id: number;
  img: string;
  title: string;
  text: string;
  liveLink: string;
  clientCodeLink: string;
  serverCodeLink?: string;
  description: string;
  technology: string;
}
const MyWork = () => {
  const myWorks: IMyWork[] = [
    {
      id: 1,
      img: "https://i.ibb.co/9nC804c/doc-technical.png",
      title: "Doc Technical",
      text: "Online Course",
      liveLink: "https://doc-technical-client.web.app/",
      clientCodeLink:
        "https://github.com/masudwebdeveloper/doc-technical-client",
      serverCodeLink:
        "https://github.com/masudwebdeveloper/doc-technical-server",
      description:
        "The tech stack for this project includes React, React Router, Tailwind CSS, Daisy UI, Firebase, JSON Web Tokens, Node.js, Express.js, and MongoDB for building a web application with frontend and backend components, authentication, and database functionality.",
      technology:
        "React | React-router-dom | Tailwind | Daisy Ui | Firebase | JsonWebToken | NodeJs | ExpressJs | MongoDB",
    },
    {
      id: 2,
      img: "https://i.ibb.co/XCbbLTP/clean-east.png",
      title: "Clean East",
      text: "Online Cleaning Service",
      liveLink: "https://cleaning-man.web.app/",
      clientCodeLink:
        "https://github.com/masudwebdeveloper/cleaning-man-client",
      serverCodeLink:
        "https://github.com/masudwebdeveloper/cleaning-man-server",
      description:
        "Clean East is a web application built using React, React Router, Tailwind CSS, and Daisy UI for the frontend, while Firebase provides authentication and JSON Web Tokens for secure user sessions. The backend is powered by Node.js, Express.js, and MongoDB for handling server-side logic and database operations",
      technology:
        "React | React-router-dom | Tailwind | Daisy Ui | Firebase | JsonWebToken | NodeJs | ExpressJs | MongoDB",
    },
    {
      id: 3,
      img: "https://i.ibb.co/YBSX41c/quizzy.png",
      title: "Quizzy",
      text: "Online quizz",
      liveLink: "https://quizzy-program.netlify.app/home",
      clientCodeLink: "https://github.com/masudwebdeveloper/quizzy-program-9",
      description:
        "Quizzy is a web application developed with React and Tailwind CSS, offering an interactive and engaging quiz experience using JavaScript for dynamic functionality and user interactions.",
      technology: "React | Tailwind | JavaScript",
    },
    {
      id: 4,
      img: "https://i.ibb.co/stPWsvm/oldbazar.png",
      title: "OLDBazaar",
      text: "Resaler Website",
      liveLink: "https://email-password-auth-953b5.web.app/",
      clientCodeLink: "https://github.com/masudwebdeveloper/oldbazaar-client",
      serverCodeLink: "https://github.com/masudwebdeveloper/oldbazaar-server",
      description:
        "OLDBazaar is a full-stack web application built with ReactJS and Tailwind CSS for the frontend, while Node.js, Express.js, and MongoDB handle the backend operations. It leverages Firebase for authentication and uses JSON Web Tokens (JWT) and JavaScript for secure user sessions and dynamic functionality.",
      technology:
        "ReactJs | NodeJs | ExpressJs | MongoDB | Tailwind | Firebase | JsonWebToken | JavaScript",
    },
    {
      id: 5,
      img: "https://i.ibb.co/nmKzCDL/bridge.png",
      title: "Brigate",
      text: "Construction consultation",
      liveLink: "https://brigate-construction.netlify.app/",
      clientCodeLink: "https://github.com/masudwebdeveloper",
      description:
        "Brigate is a web application developed with ReactJS and CSS, offering a modern and interactive user interface. With its seamless user interactions and engaging design, it provides a captivating user experience. Leveraging the power of ReactJS, Brigate ensures efficient and responsive rendering, enhancing the performance of the application. CSS plays a crucial role in the styling of Brigate, allowing for customization and visual appeal. Together, ReactJS and CSS make Brigate an ideal choice for building visually stunning and dynamic web applications.",
      technology: "ReactJs | CSS",
    },
    {
      id: 6,
      img: "https://i.ibb.co/HCmhgVX/protfolio.png",
      title: "Protfolio",
      text: "Protfolio Site",
      liveLink: "https://mrmasud.netlify.app/",
      clientCodeLink: "https://github.com/masudwebdeveloper/protfolio",
      description:
        "Protfolio is a modern web application developed with Vite, React, and TypeScript, leveraging the power of these technologies to create a fast and efficient development environment. With the integration of Tailwind CSS, it offers a highly customizable and responsive UI, making it ideal for showcasing personal or professional portfolios.",
      technology: "Vite + React | typescript | tailwind ",
    },
  ];

  return (
    <div id="myWork" className="px-1 sm:px-2 md:px-5 lg:px-14 xl:px-24 sm:py-20">
      <div className="py-10 sm:py-0 sm:pb-16 text-center">
        <h2 className="uppercase text-base md:text-xl text-gray-950 dark:text-gray-200">
          Check out my all Projects
        </h2>
        <h1 className="uppercase text-base sm:text-2xl font-bold text-blue-600">
          My Works
        </h1>
      </div>
      <div className="">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={10}
          slidesPerView={3}
          navigation
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            319: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {myWorks.map((work) => (
            <SwiperSlide key={work.id}>
              <MyWorkCard work={work} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MyWork;
