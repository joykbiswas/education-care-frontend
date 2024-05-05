import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useEffect, useState } from "react";
import Sponcer from "../Sponcer/Sponcer";
import Footer from "../Footer/Footer";

const CourseDetails = () => {
  const [course, setCourse] = useState({});
  const { id } = useParams();
  const courseDetails = useLoaderData();

  useEffect(() => {
    const findCourse = courseDetails.find((item) => item.id === id);
    setCourse(findCourse);
    console.log(findCourse);
  }, [courseDetails, id]);
  console.log(courseDetails);

  const {description,img,title,price,category} = course;
  return (
    <div >
      <Navbar></Navbar>
      <h2>Details here</h2>
      <div className="mx-24">
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
              src={img}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{category}</h2>
            <p className="text-2xl">{title}</p>
            <p className="text-xl">${price}</p>
            <p>{description}</p>
            
          </div>
        </div>
      </div>
      <Sponcer></Sponcer>
       <Footer></Footer>
    </div>
  );
};

export default CourseDetails;
