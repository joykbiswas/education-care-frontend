const From = () => {
  return (
    <div>
      
      <div
        className="hero min-h-screen mt-16" data-aos="fade-right"
        data-aos-offset="300"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/5cwyx2t/woman-taking-notes-during-team-meeting.jpg)",
        }}
      >
        <div className=" bg-opacity-60"></div>

        <div className="w-2/5 m-5 bg-slate-50 p-6"  data-aos="fade-left"
        data-aos-offset="600">
          <div className="mb-4 flex-row md:flex">
            <h2 className="text-5xl font-bold ">Apply Now</h2> 
            <img className="w-36 " src="https://i.ibb.co/hDHMhxD/free.jpg" alt="" />
          </div>
        <div className="form-control  space-y-4 " >
                      <input
                        type="text"
                        placeholder="Your Name"
                        className=" border-b-2 border-black p-3"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Your number"
                        className=" border-b-2 border-black p-3"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Email Address"
                        className=" border-b-2 border-black p-3"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Select Course"
                        className=" border-b-2 border-black p-3"
                        required
                      />
                      <input
                        type="text"
                        placeholder="Message"
                        className=" border-b-2 border-black p-6"
                        required
                      />
                 
            </div>
            <button className="p-3 m-5 font-bold bg-black text-white text-xl">Get it now</button>
        </div>



        {/* <div className="hero-content  text-neutral-content">
          <div className="">
           

            <div className="hero  ">
              <div className=" border border-red-500">
              
                
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 space-y-6">
                  <form className="card-body">
                  <div>
              <h2 className="text-6xl">Apply Now</h2>
            </div>
                    <div className="form-control">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className=" border-b border-black"
                        required
                      />
                    </div>
                    <div className="form-control">
                      
                      <input
                        type="text"
                        placeholder="Your Number"
                        className="border-b border-black"
                        required
                      />
                      
                    </div>
                    <div className="form-control">
                      
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="border-b border-black"
                        required
                      />
                      
                    </div>
                    <div className="form-control">
                      
                      <input
                        type="text"
                        placeholder="Select Course"
                        className="border-b border-black"
                        required
                      />
                      
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">Login</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default From;
