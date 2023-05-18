import img1 from '../../../assets/car/car-1.jpg';
import img2 from '../../../assets/car/car-2.jpg';
import img3 from '../../../assets/car/car-3.jpg';
import img4 from '../../../assets/car/car-4.jpg';
import img6 from '../../../assets/car/car-6.jpg';
import img7 from '../../../assets/car/car-7.jpg';

const Gellary = () => {
  return (
    <div>
      <h2 className="text-center text-5xl font-bold text-gray-500 pt-8 pb-10">Toys Gellary</h2>
      <div className="md:columns-3 sm:columns-2 gap-3 w-full mx-auto space-y-3 pb-28">
        <div className='bg-gray-200 break-inside-avoid'><img src={img1} alt="" /></div>
        <div className='bg-gray-200 break-inside-avoid'><img src={img2} alt="" /></div>
        <div className='bg-gray-200 break-inside-avoid'><img src={img3} alt="" /></div>
        <div className='bg-gray-200 break-inside-avoid'><img src={img4} alt="" /></div>
        <div className='bg-gray-200 break-inside-avoid'><img src={img4} alt="" /></div>
        <div className='bg-gray-200 break-inside-avoid'><img src={img6} alt="" /></div>
        <div className='bg-gray-200 break-inside-avoid'><img src={img7} alt="" /></div>
        <div className='bg-gray-200 break-inside-avoid'><img src={img1} alt="" /></div>
        <div className='bg-gray-200 break-inside-avoid'><img src={img2} alt="" /></div>
        <div className='bg-gray-200 break-inside-avoid'><img src={img3} alt="" /></div>
        <div className='bg-gray-200 break-inside-avoid'><img src={img4} alt="" /></div>
        <div className='bg-gray-200 break-inside-avoid'><img src={img3} alt="" /></div>
      </div>
    </div>
  );
};

export default Gellary;