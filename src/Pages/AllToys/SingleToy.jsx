import { useLoaderData } from "react-router-dom";

const SingleToy = () => {

  const single = useLoaderData();
  const { name,url} = single;
  console.log(single)

  return (
    <div className="card w-2/4 mx-auto bg-base-100 mt-12 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
  </div>
  <figure><img src={url} alt="Shoes" /></figure>
</div>
  );
};

export default SingleToy;