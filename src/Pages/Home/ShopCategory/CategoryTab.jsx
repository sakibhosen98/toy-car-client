import { Link } from "react-router-dom";
// import img from "../../../assets/toy-car/toy-1.jpg";

const CategoryTab = ({ category }) => {
  const { name, price, rating, url, id} = category;
  return (
    <div className="card card-side bg-base-100 gap-4 shadow-xl">
        <img src={url} className="w-1/2 rounded-xl" alt="Movie" />
      <div className="card-body text-center w-1/2">
        <h2 className="text-3xl font-semibold">{name}</h2>
        <p className="text-xl">Price: ${price}</p>
        <p className="text-xl">rating: {rating}</p>
        <div className="card-actions justify-center">
          <Link to={`/toy/${id}`} className="btn btn-secondary font-bold">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryTab;
