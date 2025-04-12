import AboutASEAN from "../Atoms/AboutASEAN";
import HeaderInternationalAwards from "../Atoms/HeaderInternationalAwards";
import CardAseanCultural from "../Card/CardAseanCultural";
import CardAseanTourism from "../Card/CardAseanTourism";
import ImageSlider from "./ImageSlider";
import ImageSliderAsean from "./ImageSliderAsean";
import asean from "/assets/awards/asean.svg";
const ASEAN = () => {
  return (
    <>
      <HeaderInternationalAwards
        image={asean}
        title={"ASEAN Cultural Awards"}
        desc={
          "Awards from ASEAN (Association of Southeast Asian Nations) are a form of appreciation given by ASEAN to individuals, organizations or member countries that have made extraordinary contributions in various fields, one of which is Culture."
        }
      />
      <div className="flex items-center justify-center flex-col-reverse md:flex-row lg:flex-row">
        <div className="w-full">
          <AboutASEAN
            title={"ASEAN Cultural Heritage Award"}
            desc={
              "The ASEAN Cultural Heritage Award honors significant contributions to preserving, protecting, and promoting the rich and diverse cultural heritage of Southeast Asia. This award recognizes the efforts of individuals, organizations, and communities in safeguarding the region's cultural."
            }
          />
        </div>
        <div className="w-full lg:w-[45%]">
          <CardAseanCultural />
        </div>
      </div>
      <ImageSliderAsean />
      <div className="flex items-center flex-col md:flex-row lg:flex-row mt-10">
        <div className="w-full lg:w-[45%]">
          <CardAseanTourism />
        </div>
        <div className="w-full">
          <AboutASEAN
            title={"ASEAN Tourism Award"}
            desc={
              "The purpose of this award is to recognize the efforts that have been made in improving the quality and competitiveness of tourist destinations in ASEAN member countries. Here are some of them :"
            }
          />
        </div>
      </div>
      <ImageSlider />
    </>
  );
};

export default ASEAN;
