import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";

const Home = () => {
  const coffees = useLoaderData();

  return (
    <div className="container mx-auto px-5">
      <h1 className="text-3xl font-semibold my-8">coffee: {coffees.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Home;
