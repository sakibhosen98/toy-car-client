import Banner from "../Banner/Banner";
import CarCollections from "../CarCollections/CarCollections";
import FindCar from "../FindCar/FindCar";
import Slideshow from "../Slideshow/Slideshow";
import TabGroups from "../TabGroups/TabGroups";

const Home = () => {
  return (
    <div>
        <Banner></Banner>
        <Slideshow></Slideshow>
        <TabGroups></TabGroups>
        <CarCollections></CarCollections>
        <FindCar></FindCar>
    </div>
  );
};

export default Home;