import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}
const slideImages = [
  {
    url: 'https://i.ibb.co/Mp48xQg/lance-asper-N9-Pf2-J656a-Q-unsplash.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://i.ibb.co/DQSjRZq/fahad-bin-kamal-anik-QLaa3a-Ypwv8-unsplash.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://i.ibb.co/DQSjRZq/fahad-bin-kamal-anik-QLaa3a-Ypwv8-unsplash.jpg',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <h2 className='text-5xl font-bold mb-8 text-center'>Slider Gellary</h2>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className='' key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default Slideshow;



