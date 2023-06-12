import { IService } from "../common/Service";

type ServiceProps = {
  service: IService;
};

const ServiceCard = ({ service }: ServiceProps) => {
  return (
    <div className="p-5 bg-gray-50 dark:bg-[#14143A] text-center group rounded-lg border border-gray-400 dark:border-[#14143A] hover:border-gray-500 dark:hover:border-gray-500 transition-all duration-300">
      <div className="text-3xl">{service.icon}</div>
      <div className="py-4 sm:py-0 sm:pt-7">
        <h4 className="text-3xl text-gray-950 dark:text-gray-200 group-hover:text-blue-600">{service.title}</h4>
        <p className="text-md sm:text-xl text-gray-950 dark:text-gray-300 mt-2">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
