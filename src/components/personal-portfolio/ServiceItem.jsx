import Link from "next/link";
import { PiArrowUpRightBold } from "react-icons/pi";

const ServiceItem = ({ title, description, link }) => {
  return (
    <div className="service__item">
      <span className="item__number"></span>
      <h6 className="item__title split-text right text-initial anker" style={{color:"#fff"}}>
      {title}
      </h6>
      <p>{description}</p>
      
    </div>
  );
};

export default ServiceItem;
