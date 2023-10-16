import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  console.log(users);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = users.filter((user) => user._id !== id);
        if (data.deletedCount > 0) setUsers(remaining);
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table mx-auto">
          {/* head */}
          <thead>
            <tr>
              <th>Email</th>
              <th>Last Login Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="bg-base-200">
                <td>{user?.email}</td>
                <td>{user?.lastLoginTime}</td>
                <td>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="py-2 px-4 rounded bg-gray-700 text-white"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
