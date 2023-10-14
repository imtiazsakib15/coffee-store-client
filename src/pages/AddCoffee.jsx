const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(newCoffee);

    // send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <>
      <section className="my-20">
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 bg-[#F4F3F0] rounded w-max mx-auto">
          <div className="max-w-xl lg:max-w-3xl">
            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Add New Coffee
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>

            <form
              onSubmit={handleAddCoffee}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="Name"
                  name="name"
                  className="mt-1 w-full rounded-md px-4 py-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Chef"
                  className="block text-sm font-medium text-gray-700"
                >
                  Chef
                </label>

                <input
                  type="text"
                  id="Chef"
                  name="chef"
                  className="mt-1 w-full rounded-md px-4 py-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Supplier"
                  className="block text-sm font-medium text-gray-700"
                >
                  Supplier
                </label>

                <input
                  type="text"
                  id="Supplier"
                  name="supplier"
                  className="mt-1 w-full rounded-md px-4 py-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Taste"
                  className="block text-sm font-medium text-gray-700"
                >
                  Taste
                </label>

                <input
                  type="text"
                  id="Taste"
                  name="taste"
                  className="mt-1 w-full rounded-md px-4 py-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Category"
                  className="block text-sm font-medium text-gray-700"
                >
                  Category
                </label>

                <input
                  type="text"
                  id="Category"
                  name="category"
                  className="mt-1 w-full rounded-md px-4 py-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Details"
                  className="block text-sm font-medium text-gray-700"
                >
                  Details
                </label>

                <input
                  type="text"
                  id="Details"
                  name="details"
                  className="mt-1 w-full rounded-md px-4 py-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="Photo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Photo Url
                </label>

                <input
                  type="text"
                  id="Photo"
                  name="photo"
                  className="mt-1 w-full rounded-md px-4 py-2 border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                />
              </div>

              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button className="rounded-md w-full border-2 border-[#331A15] bg-[#D2B48C] py-3 font-bold transition focus:outline-none focus:ring">
                  Add Coffee
                </button>
              </div>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};

export default AddCoffee;
