import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
  useTitle('Toy Details | Superfinity');
  const toy = useLoaderData();
  const {
    toyName,
    categories,
    description,
    photo,
    price,
    quantity,
    rating,
    sellerEmail,
    sellerName,
  } = toy;
  return (
    <div className="py-20 text-white comic space-y-6">
      <div className="space-y-4 w-3/4 mx-auto">
        <h3 className="lg:text-3xl text-2xl font-bold">
          {toy.toyName} |{" "}
          <span className="text-[#F0141E]">Superfinity Store</span>
        </h3>
        <div className="line h-1"></div>
      </div>
      <div className="w-3/4 mx-auto lg:grid grid-cols-2 lg:gap-8">
        <div className="flex items-center">
          <img src={photo} alt="" className="rounded-md mx-auto" />
        </div>
        <div className="border border-[#F0141E] p-5 mt-4 lg:mt-0 rounded-md flex items-center">
          <div className="space-y-5">
            <h3 className="lg:text-3xl text-xl font-bold w-3/4 lg:w-full">
              Name: <span className="text-[#F0141E]">{toyName}</span>
            </h3>
            <div>
              <div className="flex items-center gap-4">
                <p className="font-semibold text-lg flex items-center">
                  Price: <span className="text-[#F0141E] ml-2">${price}</span>
                </p>
                <Rating
                  className="block w-full text-2xl"
                  initialRating={rating}
                  fractions={10}
                  readonly
                  emptySymbol={<span className="text-gray-300">&#9734;</span>}
                  fullSymbol={<span className="text-yellow-500">&#9733;</span>}
                />
              </div>
              <p>Available Quantity: {quantity}</p>
            </div>
            <div className="space-y-2">
              <p>Categories:</p>
              {categories && (
                <div className="space-x-2">
                  {categories?.map((category, index) => (
                    <p
                      className="inline border border-[#F0141E] p-1 rounded-md hover:bg-[#F0141E] hover:ease-in hover:duration-200 hover:transition hover:text-white"
                      key={index}
                    >
                      {category.label}
                    </p>
                  ))}
                </div>
              )}
            </div>
            <p>Description: {description}</p>
            <div className="line h-1"></div>
            <h4 className="text-2xl font-bold text-[#F0141E]">
              Seller Information
            </h4>
            <h4>Name: {sellerName ? sellerName : "N/A"}</h4>
            <p>Email: {sellerEmail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
