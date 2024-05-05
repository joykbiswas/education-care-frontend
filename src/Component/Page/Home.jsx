import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import EducationCards from "./EducationCards/EducationCards";
import Category from "./Category/Category";
import { useState } from "react";
import Author from "./Author/Author";
import From from "./Form/Form";
import Sponcer from "./Sponcer/Sponcer";
import Footer from "./Footer/Footer";



const Home = () => {
    const educations =useLoaderData();
    // console.log(educations);
    const [selectedCategory,setSelectedCategory] = useState(null)
    
    const filteredEducations = selectedCategory === "all" 
  ? educations
  : selectedCategory 
  ? educations.filter((education) => education.category === selectedCategory)
  : educations;


    
     console.log(selectedCategory);
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Category setSelectedCategory={setSelectedCategory} ></Category>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            

            {filteredEducations.map((aEducation) => (
               <EducationCards key={aEducation.id}
               education={aEducation}
              ></EducationCards>
            ))}
            </div>
            <Author></Author>
            <From></From>
            <Sponcer></Sponcer>
            <Footer></Footer>
        </div>
    );
};

export default Home;
