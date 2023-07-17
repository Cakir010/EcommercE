import React, { useState } from "react";
import DetailSlider from "./DetailSlider";
import ReactImageMagnify from "react-image-magnify";

import "./Detail.css";

const Details = () => {
  const image = "./img/a1.png";

  const imgs = [
    "https://static.ticimax.cloud/39282/uploads/urunresimleri/thumb/q90-antik-beyaz---ahsap-ayakli-yuvarla-e4700c.jpg",
    "https://static.ticimax.cloud/39282/uploads/urunresimleri/thumb/q90-bendir-siyah-mermer-desenli---ahsa-442dc-.png",
    "https://static.ticimax.cloud/39282/uploads/urunresimleri/thumb/q90-bendir-siyah-mermer-desenli---ahsa-6-0bbb.jpg",
  ];
  const [sliderData, setSliderData] = useState(imgs[0]);

  const handleclick = (index) => {
    const slider = imgs[index];
    setSliderData(slider);
  };
  const size = window.screen.width;
  return (
    <>
      <div className="">
        {/* <div className="">
          <DetailSlider sliderData={sliderData} imgs={imgs} />
        </div> */}

        <div style={{ width: "400px" }}>
          <div style={{ width: "60%" }}>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "a",
                  isFluidWidth: true,
                  src: sliderData,
                },
                largeImage: {
                  src: sliderData,

                  width: 1000,
                  height: 1000,
                },
                isHintEnabled: true,
                enlargedImagePosition: size < 700 ? "over" : "beside",
                lensStyle: { backgroundColor: "rgba(0,0,0,.5" },
              }}
            />
          </div>
        </div>
        <div className="">
          {imgs.map((img, i) => (
            <img
              key={i}
              style={{ marginTop: "10px", padding: "10px" }}
              src={img}
              alt="6"
              width={71}
              onClick={() => handleclick(i)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Details;
