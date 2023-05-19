import './Gellary.css';
import img1 from '../../../assets/car/car-1.jpg';
import img2 from '../../../assets/car/car-2.jpg';
import img3 from '../../../assets/car/car-3.jpg';


const Gellary = () => {
  const imageUrls = [
    img1, img2, img3, img1, img2, img1, img3, img1
  ];

  return (
    <div className='mt-12 mb-12'>
      <h2 className='text-5xl font-bold text-center mb-12'>CarToys Gellary</h2>
      <div id="gallery">
      {imageUrls.map((url, index) => (
        <div className="image" key={index}>
          <img src={url} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default Gellary;
