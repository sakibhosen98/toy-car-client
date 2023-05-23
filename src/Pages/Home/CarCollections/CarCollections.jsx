import { useEffect, useState } from "react";
import CarDisplay from "./CarDisplay";

const CarCollections = () => {
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
        services.map(service => <CarDisplay
          key={service._id}
          service={service}
        ></CarDisplay>)
      }
    </div>
  );
};

export default CarCollections;