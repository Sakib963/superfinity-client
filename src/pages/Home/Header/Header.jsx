import marvelImage from "../../../assets/marvel-one.jpg";

const Header = () => {
  return (
    <div className="header text-white pb-20 stack-card grid lg:grid-cols-2 items-center px-10 h-screen">
      <div className="space-y-4 order-2 lg:order-1">
        <h3 className="lg:text-6xl text-2xl font-bold">
          Unleash Your Inner Hero!
        </h3>
        <p className="lg:w-3/5 w-full">
          Unleash the Power Within: Explore the Marvel Action Figure Universe,
          Collect Your Favorite Superheroes, and Bring Marvel&apos;s Epic
          Stories to Life with Superfinity!
        </p>
        <div className="space-x-4">
          <button className="bg-[#F0141E] lg:px-7 px-3 lg:py-3 py-2 rounded-md font-semibold hover:scale-105 hover:ease-in hover:duration-200 hover:transition">
            Read More
          </button>
          <button className="border lg:px-7 px-3 lg:py-3 py-2 rounded-md font-semibold hover:bg-[#F0141E] hover:ease-in hover:duration-200 hover:transition">
            Join Now
          </button>
        </div>
      </div>
      <div className="flex justify-end order-1 lg:order-2">
        <img src={marvelImage} alt="" />
      </div>
    </div>
  );
};

export default Header;
