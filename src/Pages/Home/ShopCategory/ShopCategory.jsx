import { useEffect, useState } from "react";
import CategoryTab from "./CategoryTab";

const ShopCategory = () => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/carServices')
    .then(res => res.json())
    .then(data => setCategorys(data))
  }, []);

  return (
    <div>
        <h2 className="text-center text-5xl font-bold mb-12">Shop Categories</h2>
        <div className="grid grid-cols-2 gap-5">
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