import PropTypes from "prop-types";
import { AiFillStar } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { FcCalendar } from "react-icons/fc";
import { IoEarthOutline } from "react-icons/io5";

const EducationCards = ({ education }) => {
  const { _id, title, img ,description, duration, location, enrollmentStatus, category ,price,rating} = education;
  console.log(education);
  return (
      <div className=" ">
        <div className=" flex flex-col card  bg-base-100 shadow-xl mt-10" data-aos="fade-up"
     data-aos-offset="200"
     >
          <figure>
            <img className="w-full h-52" src={img} alt="Shoes" />
          </figure>
          <div className=" flex-grow card-body">

            <h2 className=" card-title">{title}</h2>
            <div className="flex justify-between">
              <h2 className=" ">{category}</h2>
              <h3> Enroll: {enrollmentStatus}</h3>
              </div>
            
            {/* <h2>{schedule}</h2> */}
            
            <div className="flex justify-between">
              <h2 className="flex items-center gap-2"><FcCalendar />{duration}</h2>
              <h2 className="flex items-center gap-2"><IoEarthOutline />{location}</h2>
            </div>
            <div className="">
                {
                    description.length >130 ?(
                        <p >
                          {description.slice(0,130)}
                          <span > reed more....</span>
                        </p>
                    )
                    :(
                        <p>{description}</p>
                    )
                }
            </div>
            <div className="flex justify-between">
            <h2 className="flex items-center text-xl"><AiFillStar></AiFillStar>{rating}</h2>
            <h2 className="text-xl">${price}</h2>
            </div>
            <div className="card-actions justify-end">
              <Link to={`/course/${_id}`}><button className="btn btn-primary">Details</button></Link>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default EducationCards;
EducationCards.propTypes = {
  education: PropTypes.object,
};
