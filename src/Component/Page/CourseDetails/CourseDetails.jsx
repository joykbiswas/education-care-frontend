import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
// import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { FcCalendar } from "react-icons/fc";
import { IoEarthOutline } from "react-icons/io5";
import Sponcer from "../Sponcer/Sponcer";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
import { useState } from "react";

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

  const [enrollmentMessage, setEnrollmentMessage] = useState("");
  const handleAddCourse = () =>{
    fetch('https://education-care-backend.vercel.app/myCourse',{
            method:'POST',
            headers:{
              'content-type':'application/json'
            },
            body:JSON.stringify(courseDetails)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
              Swal.fire({
                title: 'success!',
                text: ' your course added successfully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
            } else {
              setEnrollmentMessage(data.message);
              Swal.fire({
                icon: "error",
                title: `${data.message}`,
               
              });
             
            }
        })
        .catch(error=>{console.error(error)})
  }
  return (
    <div>
      <Navbar></Navbar>

      <div className="mx-24 pt-10">
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-3xl hover:text-sky-500">{category}</h2>
            <p className="text-2xl hover:text-sky-500">{title}</p>
            <div className="flex justify-between">
              <p className="text-xl hover:text-sky-500">${price}</p>
              <p className="flex items-center gap-1 hover:text-sky-500">
                <AiFillStar className="text-green-700" />
                {rating}
              </p>
              <p className="flex items-center gap-2 hover:text-sky-500">
                <IoEarthOutline />
                {location}
              </p>
            </div>

            <div className="flex justify-start ">
              <p className="hover:text-sky-500">Enroll: {enrollmentStatus}</p>
              <p className="flex items-center gap-2 hover:text-sky-700">
                <FcCalendar />
                {duration}
              </p>
              <p className="hover:text-sky-500">{schedule}</p>
            </div>
            <div>
              <p className="font-bold">Prerequisites:</p>
              <ol className="hover:text-sky-400">
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
                       <p className="hover:text-sky-600">{item.content}</p>
                     </div>
                   </div>
                   
                 </div>
                ))}
              </ol>

             
            </div>
            <p className="hover:text-sky-500">{description}</p>
            {enrollmentMessage && (
              <p className="text-red-500">{enrollmentMessage}</p>
            )}
            <button onClick={handleAddCourse} className="group relative flex w-36 items-center rounded-lg border-2 border-sky-400 p-4 text-black"><span>Enroll Now</span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-sky-400 duration-300 group-hover:w-5/6"><svg viewBox="0 0 24 24" fill="none" className="w-10" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>

          </div>
        </div>
      </div>
      <Sponcer></Sponcer>
      <Footer></Footer>
    </div>
  );
};

export default CourseDetails;
