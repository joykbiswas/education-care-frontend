const AboutBanner = () => {
  return (
    <div>
      <div
        className="hero min-h-[90vh]" data-aos="zoom-in" data-aos-duration="1000"
        style={{
          backgroundImage: "url(https://i.ibb.co/6NKb3hm/Re-institute.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-10"></div>
        <div className="hero-content  text-neutral-content" >
          <div className=""  data-aos="fade-left" data-aos-duration="2000">
            <h1 className="mb-4 mt-48 text-7xl font-extrabold text-blue-400 " >
              About US
            </h1>
            <hr className="w-14 border-2 mb-2 border-blue-500" />

            <div className="space-x-5" >
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

export default AboutBanner;
