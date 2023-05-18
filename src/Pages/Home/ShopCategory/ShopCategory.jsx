import { useEffect, useState } from "react";
import CategoryTab from "./CategoryTab";

const ShopCategory = () => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch('category.json')
    .then(res => res.json())
    .then(data => setCategorys(data))
  }, []);

  return (
    <div>
        <h2 className="text-center text-3xl">This si ShopCategory: {categorys.length}</h2>
        <div className="grid grid-cols-2 gap-5">
        {
          categorys.map(category => <CategoryTab
          key={category.id}
          category={category}
          ></CategoryTab>)
        }
        </div>
    </div>
  );
};

export default ShopCategory;