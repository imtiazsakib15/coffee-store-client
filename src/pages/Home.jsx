import { useLoaderData } from "react-router-dom";

const Home = () => {
  const coffees = useLoaderData();

  return <div>
    <h1>coffee: {coffees.length}</h1>
  </div>;
};

export default Home;
