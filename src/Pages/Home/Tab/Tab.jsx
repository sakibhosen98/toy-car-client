import { useEffect, useState } from "react";
import Tab1 from "./Tab1";

const Tab = () => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/carServices')
    .then(res => res.json())
    .then(data => setCategorys(data.slice(0,2)))
  }, []);

  return (
    <div className="mt-8 mb-12">
        <div className="grid grid-cols-2 gap-5">
        {
          categorys.map(category => <Tab1
          key={category._id}
          category={category}
          ></Tab1>)
        }
        </div>
    </div>
  );
};

export default Tab;