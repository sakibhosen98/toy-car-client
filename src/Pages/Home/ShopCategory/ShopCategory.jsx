import { useEffect, useState } from "react";
import CategoryTab from "./CategoryTab";

const ShopCategory = () => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch('https://toy-car-server-gamma.vercel.app/carServices')
    .then(res => res.json())
    .then(data => setCategorys(data.slice(2,4)))
  }, []);

  return (
    <div>
        <div className="grid mt-8 mb-12 md:grid-cols-2 gap-5">
        {
          categorys.map(category => <CategoryTab
          key={category._id}
          category={category}
          ></CategoryTab>)
        }
        </div>
    </div>
  );
};

export default ShopCategory;