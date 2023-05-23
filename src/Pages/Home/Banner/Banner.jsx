

const Banner = () => {
  return (
    <div className="carousel w-full h-[650px] mb-12">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/F5372p7/banner-1.jpg" className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center text-center left-0 rounded-xl  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Ideal Partner For An Exciting Adventure Car
            </h2>
            <p>
              Midquis nis eleentum rhccus sit amet in nisi. Phasellus tmpor sit
              aet ex finibus. Morbi eget odales justo. Nulla ornar dolor mi, in
              lacinia ex blandit a. Donec sed consequat
            </p>
            <p>Starting only @ $999</p>
            <button className="btn btn-primary">VIEW DETAILS</button>
            <button className="btn btn-outline btn-warning">SHOP NOW</button>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/1r4bCsX/banner-2.jpg" className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center text-center left-0 rounded-xl  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Ideal Partner For An Exciting Adventure Car
            </h2>
            <p>
              Midquis nis eleentum rhccus sit amet in nisi. Phasellus tmpor sit
              aet ex finibus. Morbi eget odales justo. Nulla ornar dolor mi, in
              lacinia ex blandit a. Donec sed consequat
            </p>
            <p>Starting only @ $999</p>
            <button className="btn btn-primary">VIEW DETAILS</button>
            <button className="btn btn-outline btn-warning">SHOP NOW</button>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/yhh0NKn/banner-3.jpg" className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center justify-center left-0 rounded-xl  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Ideal Partner For An Exciting Adventure Car
            </h2>
            <p>
              Midquis nis eleentum rhccus sit amet in nisi. Phasellus tmpor sit
              aet ex finibus. Morbi eget odales justo. Nulla ornar dolor mi, in
              lacinia ex blandit a. Donec sed consequat
            </p>
            <p>Starting only @ $999</p>
            <button className="btn btn-primary">VIEW DETAILS</button>
            <button className="btn btn-outline btn-warning">SHOP NOW</button>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/WP91XMP/banner-4.jpg" className="w-full rounded-xl" />
        <div className="absolute h-full flex items-center text-center left-0 rounded-xl  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          <div className="text-white space-y-7 w-1/2 pl-12">
            <h2 className="text-6xl font-bold">
              Ideal Partner For An Exciting Adventure Car
            </h2>
            <p>
              Midquis nis eleentum rhccus sit amet in nisi. Phasellus tmpor sit
              aet ex finibus. Morbi eget odales justo. Nulla ornar dolor mi, in
              lacinia ex blandit a. Donec sed consequat
            </p>
            <p>Starting only @ $999</p>
            <button className="btn btn-primary">VIEW DETAILS</button>
            <button className="btn btn-outline btn-warning">SHOP NOW</button>
          </div>
        </div>

        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
