import PropTypes from "prop-types";
import { AiFillStar } from 'react-icons/ai';
import { Link } from "react-router-dom";

const EducationCards = ({ education }) => {
  const { id, title, img ,description, duration, schedule, location, enrollmentStatus, category ,price,rating} = education;
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
            <h2 className=" ">{category}</h2>
            <h2>{schedule}</h2>
            <h3>{enrollmentStatus}</h3>
            <div>
              <h2>{duration}</h2>
              <h2>{location}</h2>
            </div>
            <div className="" >
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
              <Link to={`/courseDetails/${id}`}><button className="btn btn-primary">Details</button></Link>
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
