import MyWorkCard from "../share/MyWorkCard";
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
      img: "https://i.ibb.co/dgM0xWt/istockphoto-1341094505-612x612.jpg",
      title: "Doc Technical",
      text: "Online Course",
      liveLink: "https://doc-technical-client.web.app/",
      clientCodeLink:
        "https://github.com/masudwebdeveloper/doc-technical-client",
      serverCodeLink:
        "https://github.com/masudwebdeveloper/doc-technical-server",
      description: "",
      technology:
        "React | React-router-dom | Tailwind | Daisy Ui | Firebase | JsonWebToken | NodeJs | ExpressJs | MongoDB",
    },
    {
      id: 2,
      img: "https://i.ibb.co/StrcW8Z/istockphoto-520021633-612x612.jpg",
      title: "Clean East",
      text: "Online Cleaning Service",
      liveLink: "https://cleaning-man.web.app/",
      clientCodeLink:
        "https://github.com/masudwebdeveloper/cleaning-man-client",
      serverCodeLink:
        "https://github.com/masudwebdeveloper/cleaning-man-server",
      description: "",
      technology:
        "React | React-router-dom | Tailwind | Daisy Ui | Firebase | JsonWebToken | NodeJs | ExpressJs | MongoDB",
    },
    {
      id: 3,
      img: "https://i.ibb.co/K0LhCBG/question-mark-5475172-340.jpg",
      title: "Quizzy",
      text: "Online quizz",
      liveLink: "https://quizzy-program.netlify.app/home",
      clientCodeLink: "https://github.com/masudwebdeveloper/quizzy-program-9",
      description: "",
      technology: "React | Tailwind | JavaScript",
    },
    {
      id: 4,
      img: "https://i.ibb.co/K0LhCBG/question-mark-5475172-340.jpg",
      title: "OLDBazaar",
      text: "Resaler Website",
      liveLink: "https://i.ibb.co/ssC2691/istockphoto-155354273-612x612.jpg",
      clientCodeLink: "https://github.com/masudwebdeveloper/oldbazaar-client",
      serverCodeLink: "https://github.com/masudwebdeveloper/oldbazaar-server",
      description: "",
      technology:
        "ReactJs | NodeJs | ExpressJs | MongoDB | Tailwind | Firebase | JsonWebToken | JavaScript",
    },
    {
      id: 5,
      img: "https://i.ibb.co/3N0MvrC/istockphoto-1385368397-612x612.jpg",
      title: "Brigate",
      text: "Construction consultation",
      liveLink: "https://brigate-construction.netlify.app/",
      clientCodeLink: "https://github.com/masudwebdeveloper",
      serverCodeLink: "",
      description: "",
      technology: "ReactJs | CSS",
    },
  ];

  return (
    <div id="myWork" className="container sm:px-20 sm:py-20">
      <div className="py-10 sm:py-16 text-center">
        <h2 className="uppercase text-xl sm:text-2xl text-gray-950 dark:text-gray-200">
          Check out my all Projects
        </h2>
        <h1 className="uppercase text-3xl sm:text-5xl font-bold text-blue-600">
          My Works
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mx-2 sm:mx-0">
        {myWorks.map((work) => (
          <MyWorkCard key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
};

export default MyWork;
