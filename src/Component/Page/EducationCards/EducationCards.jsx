import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FcCalendar } from "react-icons/fc";
import { IoEarthOutline } from "react-icons/io5";

const EducationCards = ({ education }) => {
  const {
    _id,
    title,
    img,
    description,
    duration,
    location,
    enrollmentStatus,
    category,
    price,
    rating,
  } = education;
  console.log(education);
  return (
    <div className="group ">
      <Link to={`/course/${_id}`}>
      <div
        className=" flex flex-col card  bg-base-100 shadow-xl mt-10 "
        data-aos="fade-up"
        data-aos-offset="200"
      >
        <div className="overflow-hidden">
        <figure className="group-hover:scale-110 transition ">
          <img className="w-full h-48" src={img} alt="Shoes" />
        </figure>
        </div>
        <div className=" flex-grow p-5 ">
          <h2 className=" card-title hover:text-sky-700">{title}</h2>
          <div className="flex justify-between">
            <h2 className="hover hover:text-sky-700">{category}</h2>
            <h3 className="hover:text-sky-700"> Enroll: {enrollmentStatus}</h3>
          </div>
          <div className="flex justify-between">
            <h2 className="flex items-center gap-2 hover:text-sky-700">
              <FcCalendar />
              {duration}
            </h2>
            <h2 className="flex items-center gap-2 hover:text-sky-700">
              <IoEarthOutline />
              {location}
            </h2>
          </div>
          <div className="hover:text-sky-700">
            {description.length > 130 ? (
              <p>
                {description.slice(0, 130)}
                <span> reed more....</span>
              </p>
            ) : (
              <p>{description}</p>
            )}
          </div>
          <div className="flex justify-between">
            <h2 className="flex items-center text-lg hover:text-sky-700 ">
              <AiFillStar></AiFillStar>
              {rating}
            </h2>
            <h2 className="text-lg hover:text-sky-700">${price}</h2>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/course/${_id}`}>
              <button className="group relative z-10 h-12 w-28 overflow-hidden bg-black text-lg text-white">
                <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-white transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-300"></span>
                <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-700 transition-transform duration-500 group-hover:scale-x-100 group-hover:duration-700"></span>
                <span className="absolute -inset-8 origin-left rotate-12 scale-x-0 transform bg-sky-900 transition-transform duration-300 group-hover:scale-x-50 group-hover:duration-500"></span>
                <span className="absolute z-10 text-center text-white opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-700">
                  Details
                </span>
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default EducationCards;
EducationCards.propTypes = {
  education: PropTypes.object,
};
