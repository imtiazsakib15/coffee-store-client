import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";
import { useState } from "react";
import Swal from "sweetalert2";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

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
              const remaining = coffees.filter((coffee) => coffee._id !== id);
              setCoffees(remaining);
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
            } else
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
          });
      }
    });
  };

  return (
    <div className="container mx-auto px-5">
      <h1 className="text-3xl font-semibold my-8">coffee: {coffees.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
