import { useEffect, useState } from "react";
import ShowAllToys from "./ShowAllToys";

const AllToyData = () => {
  const [services, setservices] = useState([]);

  useEffect(() => {
    fetch('https://toy-car-server-gamma.vercel.app/carServices')
    .then(res => res.json())
    .then(data => setservices(data.slice(0,20)))
  },[])

  console.log(services)

  return (
    <div>
      {
        services.map(service => <ShowAllToys
          key={service._id}
          service={service}
        ></ShowAllToys>)
      }

    </div>
  );
};

export default AllToyData;