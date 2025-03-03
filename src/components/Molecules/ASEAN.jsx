import AboutASEAN from "../Atoms/AboutASEAN";
import HeaderInternationalAwards from "../Atoms/HeaderInternationalAwards";
import CardAseanCultural from "../Card/CardAseanCultural";
import ImageSlider from "./ImageSlider";
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
      <div className="flex items-center justify-center">
        <div className="w-full">
          <AboutASEAN
            title={"ASEAN Cultural Heritage Award"}
            desc={
              "The ASEAN Cultural Heritage Award honors significant contributions to preserving, protecting, and promoting the rich and diverse cultural heritage of Southeast Asia."
            }
          />
        </div>
        <div className="w-[45%]">
        <CardAseanCultural />
        </div>
      </div>
      <ImageSlider />
    </>
  );
};

export default ASEAN;
