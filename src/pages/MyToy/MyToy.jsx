import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";
import Select from "react-select";
import useTitle from "../../hooks/useTitle";

const MyToy = () => {
  useTitle('My Toy | Superfinity');
  const [toyData, setToyData] = useState([]);
  const { user } = useContext(AuthContext);

  const handleDeleteToy = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://superfinity-server.vercel.app/toy/${_id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const previousToys = toyData.filter((toy) => toy._id !== _id);
              setToyData(previousToys);
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`https://superfinity-server.vercel.app/my_toy?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setToyData(data);
      });
  }, []);

 

  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "low-to-high", label: "Low to High" },
    { value: "high-to-low", label: "High to Low" },
  ];
  useEffect(() => {
    
    if(selectedOption){
      if(selectedOption.value === "low-to-high"){
        fetch(`https://superfinity-server.vercel.app/sortedToy?sort=lowtohigh&email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setToyData(data)
        })
      }
      if(selectedOption.value === "high-to-low"){
        fetch(`https://superfinity-server.vercel.app/sortedToy?sort=hightolow&email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          setToyData(data)
        })
      }
    }
  },[selectedOption])
  return (
    <div className="text-white comic py-20">
      <div className="space-y-4 w-3/4 mx-auto">
        <h3 className="lg:text-3xl text-2xl font-bold">
          My Toys | <span className="text-[#F0141E]">Superfinity Store</span>
        </h3>
        <div className="line h-1"></div>
      </div>
      <div className="flex justify-end items-center gap-3 w-3/4 mx-auto my-5">
        <p className="text-xl font-semibold">Filter:</p>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
          className="text-black"
        />
      </div>
      {toyData.length === 0 ? (
        <h3 className="lg:text-5xl text-2xl font-bold text-center">
          No Toy Added
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
                {/* row 1 */}
                {toyData.map((toy) => (
                  <MyToyRow
                    key={toy._id}
                    toy={toy}
                    handleDeleteToy={handleDeleteToy}
                  ></MyToyRow>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyToy;
