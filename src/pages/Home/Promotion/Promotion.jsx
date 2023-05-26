import insider from "../../../assets/images/insider.png";
const Promotion = () => {
  return (
    <div className="bg-[#030303]">
      <div className="w-3/4 h-full mx-auto py-20 space-y-10 ">
        <div className="space-y-4 ">
          <h3 className="text-3xl font-bold">
            Insider Club |{" "}
            <span className="text-[#F0141E]">Superfinity Superfans</span>
          </h3>
          <div className="line h-1"></div>
        </div>
        <div className="mt-10 grid lg:grid-cols-2 gap-8 lg:gap-4">
          <div className="flex items-center">
            <div className="space-y-4">
              <h3 className="lg:w-3/4 lg:text-3xl text-2xl font-bold">
                Unlock Epic <span className="text-[#F0141E]">Rewards</span> and
                Exclusive <span className="text-[#F0141E]">Bonus</span> Content!
              </h3>
              <p className="lg:w-4/5">
                Unleash Epic Rewards and Exclusive Bonus Goodies! Join now to
                get a thrilling dose of surprises and an electrifying fansletter
                straight to your inbox!
              </p>

              <h4 className="text-[#F0141E] font-bold text-xl">
                Join the Superfinity Alliance
              </h4>
              <div className="w-full flex">
                <input
                  className="p-3 rounded-s-md text-black"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                />
                <input
                  className="p-3 bg-[#F0141E] rounded-e-md cursor-pointer hover:scale-105 hover:ease-in hover:duration-200 hover:transition"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </div>
          <div data-aos="zoom-out-right">
            <img src={insider} alt="" className="rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
