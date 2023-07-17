import React from 'react'
import Slider from 'react-slick';

const DetailSlider = ({ imgs }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {imgs?.map((img, i) => (
          <div key={i} className="">
            <img
              style={{ width: "300px", height: "300px" }}
              src={img}
              alt="test"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DetailSlider