import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
// import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FcCalendar } from "react-icons/fc";
import { IoEarthOutline } from "react-icons/io5";
import Sponcer from "../Sponcer/Sponcer";
import Footer from "../Footer/Footer";

const CourseDetails = () => {
  const courseDetails = useLoaderData();
  const {
    title,
    img,
    description,
    duration,
    location,
    enrollmentStatus,
    category,
    price,
    rating,
    schedule,
    prerequisites,
    syllabus,
  } = courseDetails;
  console.log(courseDetails);

  return (
    <div>
      <Navbar></Navbar>

      <div className="mx-24 pt-10">
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl">{category}</h2>
            <p className="text-2xl">{title}</p>
            <div className="flex justify-between">
              <p className="text-xl">${price}</p>
              <p className="flex items-center gap-1 border">
                <AiFillStar className="text-green-700" />
                {rating}
              </p>
              <p className="flex items-center gap-2 ">
                <IoEarthOutline />
                {location}
              </p>
            </div>

            <div className="flex justify-start border ">
              <p>Enroll: {enrollmentStatus}</p>
              <p className="flex items-center gap-2 border">
                <FcCalendar />
                {duration}
              </p>
              <p>{schedule}</p>
            </div>
            <div>
              <p className="font-bold">Prerequisites:</p>
              <ol>
                {prerequisites.map((item, index) => (
                  <li key={index}>
                    {index + 1}. {item}
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="font-bold">Syllabus:</p>
              <ol>
                {syllabus.map((item, index) => (
                   <div key={index} className="join join-vertical w-full">
                   <div className="collapse collapse-arrow join-item border border-base-300">
                     <input type="radio" name="my-accordion-4" defaultChecked />
                     <div className="collapse-title text-lg font-medium">
                     Week {item.week}: {item.topic}
                     </div>
                     <div className="collapse-content">
                       <p>{item.content}</p>
                     </div>
                   </div>
                   
                 </div>
                ))}
              </ol>

             
            </div>
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
