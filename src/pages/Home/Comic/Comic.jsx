import comicImage from "../../../assets/images/comic-image.png";
const Comic = () => {
  return (
    <div className=" bg-[#030303]">
      <div className="w-3/4 mx-auto py-20 space-y-10">
        <div className="space-y-4 ">
          <h3 className="text-3xl font-bold">
            Comics Online |{" "}
            <span className="text-[#F0141E]">Superfinity Plus</span>
          </h3>
          <div className="line h-1"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex items-center">
            <div className="space-y-4">
              <h3 className="lg:text-3xl text-2xl font-bold lg:w-3/4">
                <span className="text-[#F0141E]">
                  Enter the World of Comic:
                </span>{" "}
                Superfinity Plus
              </h3>
              <p className="lg:w-3/4">
                Discover a Universe of Marvel Comics, Exclusive Collectibles,
                and Exciting Adventures. Immerse Yourself in the Epic Stories,
                Legendary Characters, and Unlimited Possibilities. Embrace Your
                Passion for Superheroes and Dive into a Journey Beyond
                Imagination. Join Superfinity Plus and Experience the Marvel
                Magic Like Never Before.
              </p>
              <button className="bg-[#F0141E] lg:px-7 px-3 lg:py-3 py-2 rounded-md font-semibold">
                Get Now
              </button>
            </div>
          </div>
          <img src={comicImage} alt="" className="rounded-md"/>
        </div>
      </div>
    </div>
  );
};

export default Comic;
