import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleToy = () => {
  const toysId = useParams();

  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) =>
        setDetails(data.filter((detail) => detail._id === !toysId.id))
      );
  }, []);
  
  console.log(details)

  return (
    <div>
      <h3>This is a single page: {details.length}</h3>
      
    </div>
  );
};

export default SingleToy;
