import {  useState } from "react";
import Tab from "../Tab/Tab";
import ShopCategory from "../ShopCategory/ShopCategory";

const TabGroups = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tabs mt-12 mb-5 justify-center">
        <div
          className={`tab text-center text-3xl text-black font-bold ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Truck
        </div>
        <div
          className={`tab text-center text-3xl text-black font-bold ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Regular Car
        </div>
        <div
          className={`tab text-center text-3xl text-black font-bold ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Mini Fire Truck
        </div>
      </div>

      <div className="card-container text-center text-3xl">
        {activeTab === 0 && <div className="card"> <ShopCategory></ShopCategory> </div>}
        {activeTab === 1 && <div className="card"> <Tab></Tab> </div>}
        {activeTab === 2 && <div className="card"><ShopCategory></ShopCategory></div>}
      </div>
    </div>
  );
};

export default TabGroups;
