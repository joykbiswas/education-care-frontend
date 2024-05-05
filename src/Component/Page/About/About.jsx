import Navbar from "../Navbar/Navbar";
import AboutBanner from "./AboutBanner";
import { FcSmartphoneTablet } from 'react-icons/fc';
import { GiMaterialsScience,GiProgression,GiPencilBrush } from 'react-icons/gi';
import { MdDesignServices } from 'react-icons/md';
import Sponcer from "../Sponcer/Sponcer";
import Footer from "../Footer/Footer";


const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      
      <AboutBanner></AboutBanner>
      <div className=" flex  mt-5 max-w-5xl mx-auto gap-3" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <div className="flex-1 mx-auto  ">
          
          <img
            className=" w-full h-full rounded-lg"
            src="https://i.ibb.co/bbWPRHw/instractor-img1.jpg"
            alt=""
          />
        </div>

        <div className="flex-1   space-y-3 ">
          <div className="">
            
            <img
              className=" rounded-lg "
              src="https://i.ibb.co/C9843xV/instract-img2.jpg"
              alt=""
            />
          </div>
          <div className="">
            
            <img
              className=" rounded-lg"
              src="https://i.ibb.co/d5ZdgmW/blogging1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto space-y-4 mt-6">
        <h2 className="text-3xl">
          We Are <span className="font-bold text-red-400">Education care</span>, Online Course Since 1990
        </h2>
        <hr className="border-2  w-20 border-red-500" />
        <p className="text-xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
          ducimus optio? Fuga ut distinctio hic nesciunt consequatur adipisci,
          possimus eligendi dolores tempore, odit tenetur porro inventore omnis
          cum veritatis? Neque consequatur, voluptatum est quisquam aliquid
          nihil odit necessitatibus corrupti nisi libero adipisci repudiandae
          distinctio deserunt, ducimus quod. Odio voluptates, molestias delectus
          itaque excepturi natus, ut odit nisi maiores modi consequatur impedit
          aut? Ad iusto cupiditate quae, optio distinctio vel obcaecati nulla
          excepturi laborum tempore, commodi consequatur quos nisi maxime sequi
          laudantium facilis doloribus eveniet officia, possimus voluptatum
          error. Dolorem totam adipisci unde? Officia dolorum maxime provident
          minima quod qui tenetur.
        </p>

        <div data-aos="fade-left" data-aos-offset="300">
          <h2 className="text-3xl">Education care course <span className="font-bold text-blue-500">Category</span></h2>
          <hr className="border-2 w-20 border-blue-500 mt-4"/>
          <div className="flex  justify-between py-7">

            <div className="text-5xl " >
            <FcSmartphoneTablet className=" "></FcSmartphoneTablet>
            <h2 className="text-xl">Responsive Website</h2>
            </div>

            <div className="text-5xl ">
            <GiMaterialsScience className="mx-auto"></GiMaterialsScience >
            <h2 className="text-xl">Science</h2>
            </div>
            <div className="text-5xl">
            <GiProgression className="mx-auto"></GiProgression>
            <h2 className="text-xl">Marketing</h2>
            </div>
            <div className="text-5xl">
            <MdDesignServices className="mx-auto"></MdDesignServices>
            <h2 className="text-xl">IOS Application</h2>
            </div>
            <div className="text-5xl justify-center">
            <GiPencilBrush className="mx-auto"></GiPencilBrush>
            <h2 className="text-xl">Graphic Design</h2>
            </div>
            
          
            
            
           
          </div>
        </div>
      </div>

      <Sponcer></Sponcer>
       <Footer></Footer>
    </div>
  );
};

export default About;

/*
<div  className=" flex border-2 max-w-5xl mx-auto">
                <img className="w-96 m-2 rounded-lg" src="https://i.ibb.co/bbWPRHw/instractor-img1.jpg" alt="" />
                <div className="">
                <img className="w-96 m-2 rounded-lg " src="https://i.ibb.co/C9843xV/instract-img2.jpg" alt="" />
                <img className="w-96 m-2 rounded-lg" src="https://i.ibb.co/d5ZdgmW/blogging1.jpg" alt="" />
                </div>
            </div>
*/
