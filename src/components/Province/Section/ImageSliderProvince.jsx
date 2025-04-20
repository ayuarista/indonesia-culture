import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ImageSliderProvince = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1735301709065-d0e8fc055baa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D",
      title: "Kalimantan",
      path: "/province/kalimantan",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1582426007790-f5a2e2392dd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D",
      title: "Sulawesi",
      path: "/province/sulawesi",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1560998264-8dca42822b68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D",
      title: "Java",
      path: "/province/java",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1630553069081-962b9270a00e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D",
      title: "Bali & Nusa Tenggara",
      path: "/province/bali-nusa-tenggara",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1703769605332-79bcf45d1c5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D",
      title: "Maluku & Papua",
      path: "/province/maluku-papua",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1692506881758-cad2a6129bf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D",
      title: "Sumatra",
      path: "/province/sumatra",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 5,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 2500,
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
    dotsClass: "slick-dots flex justify-center mt-4",responsive: [
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
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-b blur-2xl from-0% via-40% to-100% from-light-red via-[#A90809]/50 to-transparent p-5 flex items-end"></div>
      <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-t blur-2xl from-0% via-40% to-100% from-light-red via-[#A90809]/50 to-transparent p-5 flex items-end"></div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`px-2 transition-all duration-300 ${
              index === activeSlide ? "scale-100" : ""
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[250px] lg:h-[320px] object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-0% via-40% to-100% from-black/60 to-transparent p-5 flex items-end"></div>
              <div className="absolute bottom-4 left-0 right-0 px-5">
                <Link
                  to={slide.path}
                  className="border rounded-full hover:bg-light-red hover:border-none transition-all duration-300 border-white p-1 w-full text-white font-semibold text-[15px] xl:text-[17px] text-center block"
                >
                  {slide.title}
                </Link>
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
    <FaChevronLeft className="p-2 bg-white rounded-full text-light-red text-3xl" />
  </div>
);

export default ImageSliderProvince;
