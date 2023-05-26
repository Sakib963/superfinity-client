import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const MyToyRow = ({toy, handleDeleteToy}) => {
  const {
    _id,
    toyName,
    price,
    quantity,
    photo,
    categories,
    sellerName,
    sellerEmail,
  } = toy;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Toy Photo" />
            </div>
          </div>
          <div>
            <div className="font-bold">{toyName}</div>
            <div className="text-sm opacity-50">Available: {quantity}</div>
          </div>
        </div>
      </td>
      <td>
        {sellerName ? sellerName : "N/A"}
        <br />
        <span className="badge badge-ghost badge-sm">{sellerEmail}</span>
      </td>
      <td>
        <div className="font-semibold">
          {categories?.map((category, index) => (
            <p key={index}>{category.label}</p>
          ))}
        </div>
      </td>
      <td>${price}</td>
      <th className="space-x-2">
        <Link to={`/toy/edit/${_id}`}>
            <button className="bg-[#F1041E] p-1 rounded-md text-white hover:scale-110 hover:ease-in hover:duration-200 hover:transition"><AiFillEdit className="text-white"/></button>
        </Link>
        <button onClick={() => handleDeleteToy(_id)} className="bg-[#F1041E] p-1 rounded-md text-white hover:scale-110 hover:ease-in hover:duration-200 hover:transition"><AiFillDelete className="text-white"/></button>
      </th>
    </tr>
  );
};

export default MyToyRow;
