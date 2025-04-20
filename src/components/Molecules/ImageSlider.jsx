import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1628697723581-fd4ec5c38ab0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDU2fHx8ZW58MHx8fHx8",
      title: "Sudaji Tourism Village, Bali",
      year: "2025",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1707378174003-418d6262d355?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Terong TRG Tourism Village, Yogyakarta",
      year: "2025",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1653910729824-df4f32c60acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VzdCUyMHN1bWF0ZXJhfGVufDB8fDB8fHww",
      title: 'Traditional Village "Nagari Sijunjung”, West Sumatra.',
      year: "2025",
    },
    {
      id: 4,
      image:
        "https://assets.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/11/11/2464512598.jpg",
      title: "Semen Tourism Village, East Java",
      year: "2025",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1579364831375-c278de65fcac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENoaW5hdG93bnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Glodok Chinatown Tourism Village, Jakarta",
      year: "2025",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_, next) => setActiveSlide(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: (i) => (
      <div
        className={`w-6 h-2 mt-4 rounded-full mx-1 ${
          i === activeSlide ? "bg-light-red" : "bg-red-300"
        }`}
      ></div>
    ),
    dotsClass: "slick-dots flex justify-center mt-4",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      }
    ]
  };

  return (
    <div className="mx-6 lg:mx-16 mt-14 relative">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`px-2 transition-all duration-300 ${
              index === activeSlide ? "scale-100" : "scale-75 opacity-80"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[250px] lg:h-[320px] object-cover rounded-2xl"
              />
              <div className="absolute -top-1 left-0 bg-white text-light-red text-sm font-bold px-4 py-2 border border-gray-300 rounded-t-full rounded-br-full">
                {slide.year}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-light-red via-black/10 to-transparent p-5 flex items-end">
                <p className="text-white font-semibold text-[15px]/6 xl:text-[18px] text-justify border-l-2 p-3 border-white">
                  {slide.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-30px] transform -translate-y-1/2 z-10 cursor-pointer bg-light-red hover:bg-light-red/80 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg"
    onClick={onClick}
  >
    <FaChevronRight className="p-2 bg-white rounded-full text-light-red text-3xl" />
  </div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-30px] transform -translate-y-1/2 z-10 hover:bg-light-red/80 cursor-pointer bg-light-red text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg"
    onClick={onClick}
  >
    <FaChevronLeft  className="p-2 bg-white rounded-full text-light-red text-3xl" />
  </div>
);

export default ImageSlider;
