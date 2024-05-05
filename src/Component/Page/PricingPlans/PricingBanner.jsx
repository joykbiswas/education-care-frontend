
const PricingBanner = () => {
    return (
        <div>
            <div
        className="hero min-h-[90vh]" data-aos="fade-right" data-aos-duration="1000"
        style={{
          backgroundImage: "url(https://i.ibb.co/thv93Tc/pricing-ban.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content  text-neutral-content" data-aos="fade-left" data-aos-duration="3000">
          <div className="">
            <h1 className="mb-4 mt-36 text-7xl font-extrabold  ">
              Pricing Plans
            </h1>
            <hr className="w-14 border-2 mb-4 " />

            <div className="space-x-5">
              <button className=" border p-3 text-lg font-bold hover:bg-white hover:text-black">
                Read More
              </button>
              <button className="p-3 text-lg bg-red-500 font-bold hover:bg-red-600">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default PricingBanner;