import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Rating from "react-rating";
import Select from "react-select";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const EditToy = () => {
  useTitle('Edit Toy | Superfinity');
    const navigate = useNavigate();
  const toy = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    _id,
    toyName,
    categories,
    description,
    photo,
    price,
    quantity,
    rating,
  } = toy;

  const [selectedOption, setSelectedOption] = useState(categories);
  const options = [
    { value: "avengers", label: "Avengers" },
    { value: "villains", label: "Villains" },
    { value: "mutants", label: "Mutants" },
    { value: "superhero", label: "Superhero" },
    { value: "guardian of galaxy", label: "Guardian Of the Galaxy" },
  ];
  const [changedRating, setChangedRating] = useState(rating);
  // Event Handler for Rating
  const handleRatingChange = (value) => {
    setChangedRating(value);
  };

  // Event Handler for Update Toy
  const handleUpdateToy = event => {
    event.preventDefault();

    const form = event.target;
    const newName = form.name.value;
    const newPrice = form.price.value;
    const newQuantity = form.quantity.value;
    const newRating = changedRating;
    const newPhoto = form.photo.value;
    const newCategories = selectedOption;
    const newDescription = form.description.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = user.email;

    const updatedToy = {
        newName, newPrice, newQuantity, newRating, newPhoto, newCategories, newDescription, sellerName, sellerEmail
    } 

    fetch(`https://superfinity-server.vercel.app/toy/${_id}`, {
        method: "PATCH",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(updatedToy)
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount){
          // if task is Successful
            Swal.fire({
                title: "Success!",
                text: "Toy Updated Successfully.",
                icon: "success",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/my_toy');
        }
        else{
            Swal.fire({
                title: "Error!",
                text: "Something Went Wrong.",
                icon: "error",
                confirmButtonText: "Got It",
              });
        }
    })

  }
  return (
    <div className="add-bg py-20  text-white">
      <div className="space-y-4 w-3/4 mx-auto">
        <h3 className="lg:text-3xl text-2xl font-bold">
          Update Toy | <span className="text-[#F0141E]">Superfinity Store</span>
        </h3>
        <div className="line h-1"></div>
      </div>
      <form
        onSubmit={handleUpdateToy}
        className="border border-[#F0141E] w-3/4 mx-auto mt-10 grid lg:grid-cols-2 p-5 rounded-md gap-8"
      >
        <div className="space-y-1">
          <label>
            Toy Name <span className="text-[#F0141E]">*</span>
          </label>
          <input
            required
            type="text"
            name="name"
            defaultValue={toyName}
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
            defaultValue={price}
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
            defaultValue={quantity}
            placeholder="Enter Available Quantity Of The Toy"
            className="block p-3 w-full rounded-md text-black"
          />
        </div>
        <div className="space-y-1">
          <label>
            Rating <span className="text-[#F0141E]">* </span>{" "}
            <span>{changedRating}</span>
          </label>
          <Rating
            className="block w-full text-5xl"
            initialRating={changedRating}
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
            defaultValue={photo}
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
            defaultValue={description}
            placeholder="Enter The Product Description"
            className="block p-3 w-full rounded-md text-black"
          />
        </div>
        <div className="line h-1 lg:col-span-2"></div>
        <div className="space-y-1">
          <label>Seller Name</label>
          <input
            required
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
          className="bg-[#F0141E] lg:px-7 px-3 lg:py-3 py-2 hover:scale-105 hover:ease-in hover:duration-200 hover:transition cursor-pointer rounded-md font-semibold w-full lg:col-span-2"
        />
      </form>
    </div>
  );
};

export default EditToy;
