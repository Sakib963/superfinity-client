import msMarvel from "../../../assets/images/ms_marvel.png";
import spiderman from "../../../assets/images/spiderman-no-way-home.png";
import hulk from "../../../assets/images/hulk.png";

const ComicOffline = () => {
  return (
    <div className=" bg-[#030303] comic h-full">
      <div className="w-3/4 h-full mx-auto py-20 space-y-10 ">
        <div className="space-y-4 ">
          <h3 className="text-3xl font-bold">Comics | <span className="text-[#F0141E]">Superfinity Store</span></h3>
          <div className="line h-1"></div>
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div>
            <h3 className="lg:text-3xl text-2xl font-bold">
              <span className="text-[#F0141E]">Rare</span> and Timeless Comic
              Books
            </h3>
            <p>
              Discover a Vault of Exquisite and Coveted Comic Books, Preserving
              the Essence of Classic Characters and Epic Tales for Collectors
              and Enthusiasts Alike.
            </p>
            <div className="grid lg:grid-cols-3 gap-4 lg:w-3/4 mx-auto mt-10"  data-aos="flip-up">
              {/* Card 1 */}
              <div className="bg-white border-2 border-[#F0141E] rounded-lg shadow-lg p-4 flex flex-col justify-center text-black">
                <img src={spiderman} alt="Card Image" className="mx-auto" />
                <div className="text-center mt-4">
                  <h2 className="text-lg font-semibold">Spider-Man: No Way Home</h2>
                  <p className="text-sm text-gray-500">Experience the epic multiverse adventure with Spider-Man: No Way Home Limited Edition Comic Book. A must-have for fans!</p>
                </div>
                <div className="mt-auto pt-2">
                  <button className="bg-[#F0141E] lg:px-7 px-3 lg:py-3 py-2 rounded-md font-semibold text-white w-full hover:scale-105 hover:ease-in hover:duration-200 hover:transition">
                    Get it Now
                  </button>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-white border-2 border-[#F0141E] rounded-lg shadow-lg p-4 flex flex-col justify-center text-black">
                <img src={msMarvel} alt="Card Image" className="mx-auto" />
                <div className="text-center mt-4">
                  <h2 className="text-lg font-semibold">Ms. Marvel: Beyond the Limit</h2>
                  <p className="text-sm text-gray-500">Witness her heroic journey as she overcomes obstacles, embraces her powers, and becomes an inspiration to all. Limited edition, don&quot;t miss out!</p>
                </div>
                <div className="mt-auto pt-2">
                  <button className="bg-[#F0141E] lg:px-7 px-3 lg:py-3 py-2 rounded-md font-semibold text-white w-full hover:scale-105 hover:ease-in hover:duration-200 hover:transition">
                    Get it Now
                  </button>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-white border-2 border-[#F0141E] rounded-lg shadow-lg p-4 flex flex-col justify-center text-black">
                <img src={hulk} alt="Card Image" className="mx-auto" />
                <div className="text-center mt-4">
                  <h2 className="text-lg font-semibold">Hulk: Grand Design</h2>
                  <p className="text-sm text-gray-500">Explore the epic tale of the Hulk&quot;s history in this collectible comic book, featuring stunning artwork and a captivating storyline!</p>
                </div>
                <div className="mt-auto pt-2">
                  <button className="bg-[#F0141E] lg:px-7 px-3 lg:py-3 py-2 rounded-md font-semibold text-white w-full hover:scale-105 hover:ease-in hover:duration-200 hover:transition">
                    Get it Now
                  </button>
                </div>
              </div>
              





            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicOffline;
