import { IService } from "../common/Service";

type ServiceType = {
  service: IService;
};

const ServiceCard = ({ service }: ServiceType) => {
  return (
    <div className="p-5 bg-[#14143A] text-center group rounded-lg border border-[#14143A] hover:border-gray-500 transition-all duration-300">
      <div className="text-3xl">{service.icon}</div>
      <div className="py-14">
        <h4 className="text-3xl text-gray-200 group-hover:text-blue-600">{service.title}</h4>
        <p className="text-xl text-gray-300 mt-2">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
