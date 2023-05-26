import { useContext, useState } from "react";
import Select from "react-select";
import Rating from "react-rating";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  useTitle('Add A Toy | Superfinity');

  const { user } = useContext(AuthContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "avengers", label: "Avengers" },
    { value: "villains", label: "Villains" },
    { value: "mutants", label: "Mutants" },
    { value: "superhero", label: "Superhero" },
    { value: "guardian of galaxy", label: "Guardian Of the Galaxy" },
  ];
  const [rating, setRating] = useState(5);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  // Event Handler for Add Toy
  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const toyName = form.name.value;
    const price = parseFloat(form.price.value);
    const quantity = form.quantity.value;
    const photo = form.photo.value;
    const description = form.description.value;
    const sellerName = form.sellerName.value;

    const toy = {
      toyName,
      price,
      quantity,
      rating,
      photo,
      categories: selectedOption,
      description,
      sellerName : sellerName,
      sellerEmail: user.email,
    };

    // Sending Data to Create A Toy
    fetch('https://superfinity-server.vercel.app/toy', {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(toy)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
            form.reset();
            Swal.fire({
                title: "Success!",
                text: "New Toy Added Successfully.",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
  };

  return (
    <div className="add-bg py-20  text-white">
      <div className="space-y-4 w-3/4 mx-auto">
        <h3 className="lg:text-3xl text-2xl font-bold">
          Add A Toy | <span className="text-[#F0141E]">Superfinity Store</span>
        </h3>
        <div className="line h-1"></div>
      </div>
      <form
        onSubmit={handleAddToy}
        className="border border-[#F0141E] w-3/4 mx-auto mt-10 grid lg:grid-cols-2 p-5 rounded-md gap-8" data-aos="zoom-out-right"
      >
        <div className="space-y-1">
          <label>
            Toy Name <span className="text-[#F0141E]">*</span>
          </label>
          <input
            required
            type="text"
            name="name"
            placeholder="Enter Toy Name"
            className="block p-3 w-full rounded-md text-black"
          />
        </div>
        <div className="space-y-1">
          <label>
            Price <span className="text-[#F0141E]">*</span>
          </label>
          <input
            required
            type="text"
            name="price"
            placeholder="Enter Toy Price"
            className="block p-3 w-full rounded-md text-black"
          />
        </div>
        <div className="space-y-1">
          <label>
            Available Quantity <span className="text-[#F0141E]">*</span>
          </label>
          <input
            required
            type="text"
            name="quantity"
            placeholder="Enter Available Quantity Of The Toy"
            className="block p-3 w-full rounded-md text-black"
          />
        </div>
        <div className="space-y-1">
          <label>
            Rating <span className="text-[#F0141E]">* </span>{" "}
            <span>{rating}</span>
          </label>
          <Rating
            className="block w-full text-5xl"
            initialRating={rating}
            fractions={10}
            onChange={handleRatingChange}
            emptySymbol={<span className="text-gray-300">&#9734;</span>}
            fullSymbol={<span className="text-yellow-500">&#9733;</span>}
          />
        </div>
        <div className="space-y-1">
          <label>
            Photo URL <span className="text-[#F0141E]">*</span>
          </label>
          <input
            required
            type="text"
            name="photo"
            placeholder="Enter The URL Of Photo"
            className="block p-3 w-full rounded-md text-black"
          />
        </div>
        <div className="space-y-1">
          <label>
            Product Categories <span className="text-[#F0141E]">*</span>
          </label>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            isMulti
            required
            className="text-black"
          />
        </div>
        <div className="space-y-1 lg:col-span-2">
          <label>
            Product Description <span className="text-[#F0141E]">*</span>
          </label>
          <input
            required
            type="text"
            name="description"
            placeholder="Enter The Product Description"
            className="block p-3 w-full rounded-md text-black"
          />
        </div>
        <div className="line h-1 lg:col-span-2"></div>
        <div className="space-y-1">
          <label>Seller Name</label>
          <input
            type="text"
            name="sellerName"
            defaultValue={user?.displayName}
            placeholder="Enter The Seller Name"
            className="block p-3 w-full rounded-md text-black"
          />
        </div>
        <div className="space-y-1">
          <label>Seller Email</label>
          <input
            required
            type="email"
            name="sellerEmail"
            disabled
            defaultValue={user?.email}
            placeholder="Enter The Seller Email"
            className="block p-3 w-full rounded-md text-black custom-input"
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="bg-[#F0141E] lg:px-7 px-3 lg:py-3 py-2 hover:scale-105 hover:ease-in hover:duration-200 hover:transition cursor-pointer rounded-md font-semibold w-full lg:col-span-2 "
        />
      </form>
    </div>
  );
};

export default AddToy;
