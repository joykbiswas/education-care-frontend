import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/myCourse")
      .then((res) => res.json())
      .then((data) => {
        setCourse(data);
      });
  }, []);
  console.log(course);

  return (
    <div>
      <Navbar></Navbar>
     
      <div className="grid grid-cols-2 gap-9 py-8">
        {course.map((item) => (
          <div key={item._id} className=" card card-side bg-base-100 shadow-xl">
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
                      style={{ width: `${20}%` }}
                      className={`transition-width flex justify-center items-center mr-auto h-full w-0 rounded-full  bg-sky-600 duration-500`}
                    >
                      <span className="font-medium  text-center text-white">
                        
                        {20} %
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
