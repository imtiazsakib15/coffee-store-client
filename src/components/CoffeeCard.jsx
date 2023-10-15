import { useNavigate } from "react-router-dom";

const CoffeeCard = ({ coffee, handleDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-6 bg-gray-300 gap-3 p-5">
      <img className="col-span-2" src={coffee?.photo} alt="" />
      <div className="col-span-3">
        <h3 className="font-semibold">Name: {coffee?.name}</h3>
        <h3 className="font-semibold">Chef: {coffee?.chef}</h3>
      </div>
      <div className="flex flex-col gap-4 col-span-1">
        <button className="p-2 bg-[#D2B48C]">View</button>
        <button
          onClick={() => navigate(`/update/${coffee._id}`)}
          className="p-2 text-white bg-black"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(coffee._id)}
          className="p-2 text-white bg-red-600"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
