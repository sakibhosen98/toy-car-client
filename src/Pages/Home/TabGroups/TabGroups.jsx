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
          className={`tab text-center text-3xl text-black font-semibold ${activeTab === 0 ? 'active' : ''}`}
          onClick={() => handleTabClick(0)}
        >
          Tab 1
        </div>
        <div
          className={`tab text-center text-3xl text-black font-semibold ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Tab 2
        </div>
        <div
          className={`tab text-center text-3xl text-black font-semibold ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 3
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
