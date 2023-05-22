import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {

  const carService = useLoaderData();
  const {url,name} = carService;

  return (
    <div className="card w-2/4 bg-base-100 shadow-xl mt-12 mx-auto">
  <figure><img src={url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-5xl">{name}</h2>
    <p>The car is very attractive. So, can buy it. If you could buy it will have been profited</p>
    <div className="card-actions justify-end">
      <Link className="btn btn-primary">Check Out</Link>
    </div>
  </div>
</div>
  );
};

export default ViewDetails;