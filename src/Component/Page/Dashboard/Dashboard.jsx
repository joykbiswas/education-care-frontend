import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("https://education-care-backend-jfd8zd519-joys-projects-3bf6e672.vercel.app/myCourse")
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
      });
  }, []);

  return (
    <div>
      <Navbar></Navbar>
     
      <div className="grid grid-cols-2 gap-9 py-8">
      {course.length === 0 ? (
          <div className="text-center text-4xl text-red-400 font-bold">No courses available</div>
        ) : (
          course.map((item) => (
            <div key={item._id} className="card card-side bg-base-100 shadow-xl">
              <figure>
                <img src={item.img} className="w-52 h-full" alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <div>
                  <p className="text-lg">{item.instructor}</p>
                  <p>{item.duration}</p>
                  <p>{item.schedule}</p>
                </div>
                <div>
                  <div className="flex flex-col mx-auto gap-2">
                    <div
                      className={`flex h-4 w-full  items-center justify-center rounded-full bg-sky-300`}
                    >
                      <div
                        style={{ width: `${0}%` }}
                        className={`transition-width flex justify-center items-center mr-auto h-full w-0 rounded-full  bg-sky-600 duration-500`}
                      >
                        <span className="font-medium  text-center text-white">
                          {0} %
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
