import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              console.log(data);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            } else
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                footer: '<a href="">Why do I have this issue?</a>',
              });
          });
      }
    });
  };
  return (
    <div className="grid grid-cols-6 bg-gray-300 gap-3 p-5">
      <img className="col-span-2" src={coffee?.photo} alt="" />
      <div className="col-span-3">
        <h3 className="font-semibold">Name: {coffee?.name}</h3>
        <h3 className="font-semibold">Chef: {coffee?.chef}</h3>
      </div>
      <div className="flex flex-col gap-4 col-span-1">
        <button className="p-2 bg-[#D2B48C]">View</button>
        <button className="p-2 text-white bg-black">Edit</button>
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
