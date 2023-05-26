import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ToyRow = ({ toy }) => {
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
      <td className="font-semibold">
        {sellerName ? sellerName : "N/A"}
        <br />
        <span className="badge badge-ghost badge-sm font-normal">{sellerEmail}</span>
      </td>
      <td>
        <div className="font-semibold">
          {categories?.map((category, index) => (
            <p key={index}>{category.label}</p>
          ))}
        </div>
      </td>
      <td className="font-semibold">${price}</td>
      <th>
        <Link to={`/toy/${_id}`}>
          <button className="bg-[#F0141E] lg:px-4 px-2 py-2 lg:py-2 rounded-md font-semibold flex items-center text-white hover:scale-105 hover:ease-in hover:duration-200 hover:transition">
            Details <AiFillCaretRight />
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default ToyRow;
