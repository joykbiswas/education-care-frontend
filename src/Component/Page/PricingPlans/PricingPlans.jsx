import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import PricingBanner from "./PricingBanner";
import Option from "./Option";
import Sponcer from "../Sponcer/Sponcer";
import Footer from "../Footer/Footer";


const PricingPlans = () => {
    const priceOption= useLoaderData()
    console.log(priceOption);
    return (
        <div>
            <Navbar></Navbar>
            <PricingBanner></PricingBanner>

            <div>
                <h2 className="text-5xl font-bold my-7">Pricing plans</h2>
                <hr className="w-14 border-2 mb-4 border-red-500" />
                <p className="text-xl" data-aos="fade-up" data-aos-duration="2000">These education care pricing plans are commonly offered by One Online Course, One E-Book, 1 Hour of Mentorship and other service providers to support the educational community.Keep in mind that the specifics of these plans, including pricing, eligibility, and available features, can vary widely among different companies and products. It is important to review the terms and conditions of each plan to understand what is included and how to qualify for the discounts or benefits.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6  m-16 ">
                {
                    priceOption.map(option=><Option key={option.ID} option={option}></Option>)

                }

            </div>
            <Sponcer></Sponcer>
            <Footer></Footer>
        </div>
    );
};

export default PricingPlans;