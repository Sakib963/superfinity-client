import Rating from "react-rating";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id, photo, rating, toyName, price, categories } = toy;
  return (
    <div className="bg-white border-2 border-[#F0141E] rounded-lg shadow-lg p-4 flex flex-col justify-center text-black">
      <img src={photo} alt="Card Image" className="mx-auto" />
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold">{toyName}</h2>
        <h2 className="text-lg font-semibold text-[#F1041E]">${price}</h2>
        <Rating
          className="block w-full text-2xl"
          initialRating={rating}
          fractions={10}
          readonly
          emptySymbol={<span className="text-gray-300">&#9734;</span>}
          fullSymbol={<span className="text-yellow-500">&#9733;</span>}
        />
        {categories && (
          <div className="space-x-2 my-2 grid grid-cols-2 gap-3">
            {categories?.map((category, index) => (
              <p
                className=" border border-[#F0141E] p-1 rounded-md hover:bg-[#F0141E] hover:ease-in hover:duration-200 hover:transition hover:text-white"
                key={index}
              >
                {category.label}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="mt-auto pt-2">
        <Link to={`/toy/${_id}`}>
          <button className="bg-[#F0141E] lg:px-7 px-3 lg:py-3 py-2 rounded-md font-semibold text-white w-full hover:scale-105 hover:ease-in hover:duration-200 hover:transition">
           View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
