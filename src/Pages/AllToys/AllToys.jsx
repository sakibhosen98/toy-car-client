import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const AllToys = () => {
  const toyId = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) =>
        setDetails(data.find((detail) => detail.id === toyId.id))
      );
  }, []);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-Category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={details?.url}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{details?.name}</div>
                </div>
              </div>
            </td>
            <td>{details?.toyName}</td>
            <td>{details?.subCategory}</td>
            <td>{details?.price}</td>
            <td>{details?.availableQuantity}</td>
            <th>
              <Link className="btn btn-secondary">details</Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
