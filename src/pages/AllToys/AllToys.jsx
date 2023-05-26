import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";
import { useState } from "react";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle("Toys | Superfinity");

  const loadedToyData = useLoaderData();

  const [toyData, setToyData] = useState(loadedToyData);

  const handleSearch = (event) => {
    event.preventDefault();

    const searchText = event.target.search.value;

    // If SearchText === '', previously loaded data will be toyData.
    if (!searchText) {
      setToyData(loadedToyData);
    }
    // Sending Search Text to Server
    fetch(`https://superfinity-server.vercel.app/search?key=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToyData(data);
      });
  };
  return (
    <div className="text-white comic py-20">
      <div className="space-y-4 w-3/4 mx-auto">
        <h3 className="lg:text-3xl text-2xl font-bold">
          All Toy | <span className="text-[#F0141E]">Superfinity Store</span>
        </h3>
        <div className="line h-1"></div>
      </div>
      <div className="flex justify-end w-3/4 mx-auto my-5">
        <form onSubmit={handleSearch} className="flex justify-end">
          <input
            type="text"
            name="search"
            placeholder="Enter Toy Name"
            className="p-3 rounded-s-md text-black w-2/4 lg:w-full"
          />
          <input
            type="submit"
            value="Search"
            className="p-3 rounded-e-md bg-[#F0141E]"
          />
        </form>
      </div>
      {toyData.length === 0 ? (
        <h3 className="lg:text-5xl text-2xl font-bold text-center py-10">
          No Data Found
        </h3>
      ) : (
        <div className="w-3/4 mx-auto mb-20" data-aos="zoom-out-right">
          <div className="overflow-x-auto w-full text-black">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th>Toy Details</th>
                  <th>Seller Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row Child */}
                {toyData.map((toy) => (
                  <ToyRow key={toy._id} toy={toy}></ToyRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllToys;
