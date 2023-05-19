import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  // const toyId = useParams();

  // const [details, setDetails] = useState([]);

  const carService = useLoaderData();
  const {toyName,url,name,subCategory,_id,price,availableQuantity } = carService;

  // useEffect(() => {
  //   fetch("http://localhost:5000/carServices")
  //     .then((res) => res.json())
  //     .then((data) =>
  //       setDetails(data.find(detail => detail._id === toyId.id))
  //     );
  // }, []);

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
                      src={url}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{name}</div>
                </div>
              </div>
            </td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <th>
              <Link to={`/toys/${_id}`} className="btn btn-secondary">details</Link>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
